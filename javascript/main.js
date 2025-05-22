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

function getHumanChoice() {
    return prompt("Play your move: ");
}

function playRound(human_choice, computer_choice) {
    human_choice = human_choice.toLowerCase();

    console.log("Your choice: " + human_choice);
    console.log("Computer choice: " + computer_choice);

    switch (human_choice) {
        case "rock":
            if (computer_choice == "rock") {
                console.log("Tie!");
                return 2;
            }
            else if (computer_choice == "scissors") {
                console.log("You won!");
                return 0
            }
            else {
                console.log("You lost!");
                return 1;
            }
            break;
        case "paper":
            if (computer_choice == "paper") {
                console.log("Tie!");
                return 2;
            }
            else if (computer_choice == "rock") {
                console.log("You won!");
                return 0
            }
            else {
                console.log("You lost!");
                return 1;
            }
            break;
        case "scissors":
            if (computer_choice == "scissors") {
                console.log("Tie!");
                return 2;
            }
            else if (computer_choice == "paper") {
                console.log("You won!");
                return 0
            }
            else {
                console.log("You lost!");
                return 1;
            }
            break;
    }
}

function playGame() {
    let human_score = 0;
    let computer_score = 0;
    for (let i=0; i<5; i++) {
        output = playRound(prompt("Play your move: "), getComputerChoice());

        // human won
        if (output == 0) {
            human_score++;
        }
        // comp won
        else if (output == 1) {
            computer_score++;
        }
    
        if (human_score > computer_score) {
            console.log("Human Player Wins!");
        }
        else if (computer_score > human_score) {
            console.log("Computer Wins!");
        }
        else {
            console.log("Tie!");
        }
    }
}

playGame();
