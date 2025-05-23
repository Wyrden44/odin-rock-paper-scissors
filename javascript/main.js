function getComputerChoice() {
    let random_num = Math.random();
    if (random_num <= 0.33) {
        return "rock";
    }
    else if (random_num <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getGameResult(human_choice, computer_choice) {
    switch (human_choice) {
        case "rock":
            if (computer_choice == "rock") {
                return "tie";
            }
            else if (computer_choice == "scissors") {
                return "player win";
            }
            else {
                return "computer win";
            }
            break;
        case "paper":
            if (computer_choice == "paper") {
                return "tie";
            }
            else if (computer_choice == "rock") {
                return "player win";
            }
            else {
                return "computer win";
            }
            break;
        case "scissors":
            if (computer_choice == "scissors") {
                return "tie";
            }
            else if (computer_choice == "paper") {
                return "player win";
            }
            else {
                return "computer win";
            }
            break;
    }
}

function printWinner() {
    winner_label.textContent = (player_score == BEST_OF) ? "Player Won!" : "Computer Won!";
}

function reset() {
    player_score = 0;
    computer_score = 0;
    winner_label.textContent = "";
    result_label.textContent = "";
    updateScores();
    game_ended = false;
}

function showResult(player_choice, computer_choice, result) {
    result_label.textContent = `${player_choice} : ${computer_choice} -> ${result}`;
}

function updateScores() {
    player_score_label.textContent = `Player: ${player_score}`;
    computer_score_label.textContent = `Computer: ${computer_score}`;
}

function playRound(player_choice) {
    let computer_choice = getComputerChoice();
    let result = getGameResult(player_choice, computer_choice);

    switch (result) {
        case "player win":
            player_score++;
            break;
        case "computer win":
            computer_score++;
            break;
        case "tie":
            break;
    }

    showResult(player_choice, computer_choice, result);
    updateScores();

    // finished round
    if (player_score >= BEST_OF || computer_score >= BEST_OF) {
        game_ended = true;
        printWinner();
    }
}


const btn_container = document.querySelector(".buttons");
const winner_label = document.querySelector("#winner-label");
const reset_btn = document.querySelector("#reset");
const result_label = document.querySelector("#game-result")
const player_score_label = document.querySelector("#player-score");
const computer_score_label = document.querySelector("#computer-score");
const BEST_OF = 5
let player_score = 0;
let computer_score = 0;
let game_ended = false;

// event delegation
btn_container.addEventListener('click', e => {
        if (!game_ended) playRound(e.target.id);
    });

reset_btn.addEventListener('click', e => {
    reset();
})
