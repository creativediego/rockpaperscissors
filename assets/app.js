$(document).ready(function() {

    let userScore = 0
    let computerScore = 0
    let tieScore = 0

    document.onkeyup = function(event) {
        let userKey = event.key
        let computerChoices = ["r", "p", "s"]
        let computerGuess = computerChoices[Math.floor(Math.random() * 3)];
        console.log(computerGuess)


        function playthrough() {

            if (computerGuess === "r" || computerGuess === "p" || computerGuess === "s") {

                switch (computerGuess) {

                    case "r":
                        $("#computer-image").attr("src", "assets/rock.png");
                        break;

                    case "p":
                        $("#computer-image").attr("src", "assets/paper.png");
                        break;

                    case "s":
                        $("#computer-image").attr("src", "assets/scissors.png");
                        break;

                }
            }
            if (userKey === "r" || userKey === "p" || userKey === "s") {

                switch (userKey) {

                    case "r":
                        $("#user-image").attr("src", "assets/rock.png");
                        switch (computerGuess) {
                            case "r":
                                tieScore++;
                                $("#tie-score").text(tieScore);
                                break;

                            case "p":
                                computerScore++;
                                $("#computer-score").text(computerScore);
                                break;

                            case "s":
                                userScore++;
                                $("#user-score").text(userScore);
                                break;

                        }
                        break;
                    case "p":
                        $("#user-image").attr("src", "assets/paper.png");
                        switch (computerGuess) {
                            case "r":
                                userScore++;
                                $("#user-score").text(userScore);
                                break;

                            case "p":
                                tieScore++;
                                $("#tie-score").text(tieScore);
                                break;

                            case "s":
                                computerScore++;
                                $("#computer-score").text(computerScore);
                                break;

                        }

                        break;

                    case "s":
                        $("#user-image").attr("src", "assets/scissors.png");
                        switch (computerGuess) {
                            case "r":
                                computerScore++;
                                $("#computer-score").text(computerScore);
                                break;

                            case "p":
                                userScore++;
                                $("#user-score").text(userScore);
                                break;

                            case "s":
                                tieScore++;
                                $("#tie-score").text(tieScore);
                                break;

                        }
                        break;

                }

            }
            console.log("userscore", userScore, "computer", computerScore, "tie", tieScore)
        }

        playthrough();
    }


});