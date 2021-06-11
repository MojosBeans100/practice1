let easyFrench = ["ranger", "baisser", "ecouter", "manger", "boire", "saluer", "remuer", "venir", "aller", "mélanger", "danser", "jouer", "nager"];
let easyEnglish = ["tidy", "kiss", "listen", "eat", "drink", "wave", "stir", "come", "go", "mix", "danse", "play", "swim"];

/**
 * This function creates the first intro screen, with a short welcome message
 * and test input for the name.  It starts when the browser has loaded, and 
 * resets to this if the Reset/Home/Start Again button is pressed in other screens
 */
function introSection() {

    let mainDiv = document.getElementById("main-div");

    let introSectionDiv = document.createElement('div');
    introSectionDiv.classList = "introSectionDiv";
    introSectionDiv.id = "intro-section-div";
    mainDiv.appendChild(introSectionDiv);

    let helloHeader = document.createElement("h1");
    helloHeader.id = "welcome-header";
    helloHeader.innerHTML = "Welcome to Un Petit Jeu Francais!";
    introSectionDiv.appendChild(helloHeader);

    let helloIntro = document.createElement("p")
    helloIntro.id = "hello-intro";
    helloIntro.innerHTML = "First let's start with your name:";
    introSectionDiv.appendChild(helloIntro);

    let introForm = document.createElement("form");
    introForm.id = "intro-form";
    introSectionDiv.appendChild(introForm);

    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name-entry";
    introForm.appendChild(nameInput);

    let firstSubmitButton = document.createElement("button");
    firstSubmitButton.type = "submit";
    firstSubmitButton.id = "name-button";



    firstSubmitButton.innerHTML = "Ok";
    introForm.appendChild(firstSubmitButton);

    firstSubmitButton.addEventListener("click", function (event) {
        event.preventDefault()
    });
    // firstSubmitButton.onclick = "chooseGameOptions()";
    firstSubmitButton.addEventListener("click", chooseGameOptions);

    document.getElementById("hello").remove();


}


/**
 * This function changes the first intro screen into the game options screen,
 * whereby it displays the user's name, the user can choose a game difficulty
 * and length.  The "Play!" button then loads runGame.
 */

function chooseGameOptions() {

    // Get the main div as the parent
    let mainDiv = document.getElementById("main-div");
    let userName = document.getElementById("name-entry").value;

    // Create Game Options Screen div
    let gameOptionsDiv = document.createElement("div");
    gameOptionsDiv.classList = "game-options-div";
    gameOptionsDiv.id="game-options-div-id";
    mainDiv.appendChild(gameOptionsDiv);

    // Print name in welcome message
    let welcomeMessage = document.createElement("h1");
    welcomeMessage.id = "welcome-message";
    welcomeMessage.innerHTML = (`Welcome ${userName}!`);
    gameOptionsDiv.appendChild(welcomeMessage);

    // Add some text to direct users to choose some game options
    let chooseGameOptions = document.createElement("p");
    chooseGameOptions.id = "choose-game-options-text"
    chooseGameOptions.innerHTML = "Now choose some game options:";
    gameOptionsDiv.appendChild(chooseGameOptions);

    // Create choose difficulty form
    let difficultyForm = document.createElement("form");
    difficultyForm.id = "difficulty-form";
    gameOptionsDiv.appendChild(difficultyForm);

    // Game difficulty text
    let difficultyh2 = document.createElement("h2");
    difficultyh2.innerHTML = (`Please choose a game difficulty`);
    difficultyForm.appendChild(difficultyh2);

    // Create difficulty radio buttons
    let difficultyRadioOptions = ["Easy", "Medium", "Hard"];
    let radioform = document.createElement("form");
    radioform.classList.add("radioformclass");
    difficultyForm.appendChild(radioform);

    radioformDiff = [];
    for (let i = 0; i < difficultyRadioOptions.length; i++) {
        var radio = document.createElement("input");
        var label = document.createElement("label");
        radio.type = "radio";
        radio.name = "radioname";
        radio.required = true;
        radio.classList.add("game-difficulty-radio-buttons")
        radio.id = (`${difficultyRadioOptions[i]}`);
        radio.checked = false;
        label.classList.add("game-difficulty-radio-labels");
        label.innerHTML = difficultyRadioOptions[i];
        radioform.appendChild(radio);
        radioform.appendChild(label);
        radioformDiff.push(radio.id);
    }

    // Set default game difficulty to Easy
    Easy.checked = true;

    // Create choose game length form
    let gameLengthForm = document.createElement("form");
    gameLengthForm.id = "game-length-form";
    gameOptionsDiv.appendChild(gameLengthForm);

    // Game length text
    let gamelengthh2 = document.createElement("h2");
    gamelengthh2.innerHTML = (`Now choose how many questions you'd like to answer`);
    gameLengthForm.appendChild(gamelengthh2);

    // Create game length options
    let testLengthOptions = ["10", "20", "30", "40", "50"];

    for (let i = 0; i < testLengthOptions.length; i++) {
        var radiolength = document.createElement("input");
        var label = document.createElement("label");
        radiolength.type = "radio";
        radiolength.required = true;
        radiolength.name = "radiolengthname";
        radiolength.classList.add("game-length-radio-buttons");
        radiolength.id = (`gameLength${testLengthOptions[i]}`);
        label.classList.add("game-length-radio-labels");
        label.innerHTML = testLengthOptions[i];
        gameLengthForm.appendChild(radiolength);
        gameLengthForm.appendChild(label);
    }

    // Set default game length to 10 questions
    gameLength10.checked = true;

    // Create button to display "Play!" - link to function runGame
    let playButton = document.createElement("button");
    playButton.innerHTML = "Play!";
    playButton.id = "play-game-button";
    gameOptionsDiv.appendChild(playButton);

    playButton.addEventListener("click", function () {
        if (Easy.checked) {
            gameDifficulty = "Easy";
        } else if (Medium.checked) {
            gameDifficulty = "Medium";
        } else {
            gameDifficulty = "Hard";
        };

        // console.log(gameDifficulty);

        if (gameLength10.checked) {
            gameLength = 10;
        } else if (gameLength20.checked) {
            gameLength = 20;
        } else if (gameLength30.checked) {
            gameLength = 30;
        } else if (gameLength40.checked) {
            gameLength = 40;
        } else {
            gameLength = 50;
        };

        // console.log(gameLength);
        homeButton.remove();
        openGameArea();
    });

    // Create button to return to homepage, goes back to intro screen with name input etc
    let homeButton = document.createElement("button");
    homeButton.id = "home-button"
    homeButton.innerHTML = "Return to Home";
    mainDiv.appendChild(homeButton);

    // Remove the intro screen div
    document.getElementById("intro-section-div").remove();

    // Link button to return to intro screen
    homeButton.addEventListener("click", function () {
        homeButton.remove();
        gameOptionsDiv.remove();
        introSection();
    });

}


/**
 * This function changes the first intro screen into the game area with question, 
 * multiple choice, answer tally etc.  It sets up the HTML.  It is called by the "Play"
 * button on the game options screen.  
 */
function openGameArea() {

    // Determine difficulty chosen to determine how many radio buttons needed
    // if (gameDifficulty === "Easy") {
    //     numberMcOptions = 4;
    // } else if (gameDifficulty === "Medium") {
    // numberMcOptions = 5;
    // } else {
    //     numberMcOptions = 6;
    // }
   

    // Get main div
    let mainDiv = document.getElementById("main-div");

    // Create game area div
    let gameAreaDiv = document.createElement("div");
    gameAreaDiv.id = "game-area-div-id";
    mainDiv.appendChild(gameAreaDiv);

    // Create top div
    let gameAreaTop = document.createElement("div");
    gameAreaTop.id = "game-area-top";
    gameAreaDiv.appendChild(gameAreaTop);

    // Create left div
    let gameAreaLeft = document.createElement("div");
    gameAreaLeft.id = "game-area-left";
    gameAreaDiv.appendChild(gameAreaLeft);

    // Create right div
    let gameAreaRight = document.createElement("div");
    gameAreaRight.id = "game-area-right";
    gameAreaDiv.appendChild(gameAreaRight);

    // Create column divs within right div for score tallies
    let gameAreaRight1 = document.createElement("div");
    gameAreaRight1.classList.add("game-area-right-divs");
    gameAreaRight.appendChild(gameAreaRight1);

    let gameAreaRight2 = document.createElement("div");
    gameAreaRight2.classList.add("game-area-right-divs");
    gameAreaRight.appendChild(gameAreaRight2);

    let gameAreaRight3 = document.createElement("div");
    gameAreaRight3.classList.add("game-area-right-divs");
    gameAreaRight.appendChild(gameAreaRight3);

    let gameAreaRight4 = document.createElement("div");
    gameAreaRight4.classList.add("game-area-right-divs");
    gameAreaRight.appendChild(gameAreaRight4);

    // // Create Submit button
    
    // let submitAnswerButton = document.createElement("button");
    // gameAreaDiv.appendChild(submitAnswerButton);
    // submitAnswerButton.innerHTML = "Next question";
    // submitAnswerButton.id = "next-question-button"
    // submitAnswerButton.addEventListener("click",checkAnswer);

    // // Create Skip button
    // let skipQuestionButton = document.createElement("button");
    // skipQuestionButton.innerHTML = "Skip";
    // skipQuestionButton.id = "skip-question-button";
    // gameAreaDiv.appendChild(skipQuestionButton);
    // skipQuestionButton.addEventListener("click",skipQuestion);

    //Create progress tally

    let questionsAnswered = document.createElement("p");
    questionsAnswered.innerHTML = 0;
    questionsAnswered.id = "questionsAnsweredTally";

    let progressTally = document.createElement("p");
    progressTally.id = "progress-tally";
    progressTally.classList.add("tally-numbers");
    progressTally.innerHTML = (`${questionsAnswered.innerText} / ${gameLength}`);

    let progressTallyLabel = document.createElement("p");
    progressTally.classList.add("tally-labels");
    progressTallyLabel.id = "progress-tally-label";
    progressTallyLabel.innerHTML = "Progress";

    // Create skip tally
    let skipTally = document.createElement("p");
    skipTally.innerHTML = 0;
    skipTally.classList.add("tally-numbers");
    skipTally.id = "skipTally";

    let skipTallyLabel = document.createElement("p");
    skipTallyLabel.id = "skip-tally-label";
    skipTallyLabel.classList.add("tally-labels");
    skipTallyLabel.innerHTML = "Skipped";

    // Create correct tally
    let correctTally = document.createElement("p");
    correctTally.innerHTML = 0;
    correctTally.classList.add("tally-numbers");
    correctTally.id = "correctTally";

    let correctTallyLabel = document.createElement("p");
    correctTallyLabel.id = "correct-tally-label";
    correctTallyLabel.classList.add("tally-labels");
    correctTallyLabel.innerHTML = "Correct";

    // Create incorrect tally
    let incorrectTally = document.createElement("p");
    incorrectTally.innerHTML = 0;
    incorrectTally.classList.add("tally-numbers");
    incorrectTally.id = "incorrectTally";

    let incorrectTallyLabel = document.createElement("p");
    incorrectTallyLabel.id = "incorrect-tally-label";
    incorrectTallyLabel.classList.add("tally-labels");
    incorrectTallyLabel.innerHTML = "Incorrect";

    // Remove game options screen
    document.getElementById("game-options-div-id").remove();

    // Add all tallies and labels to game area
    gameAreaRight1.appendChild(progressTally);
    gameAreaRight1.appendChild(progressTallyLabel);
    gameAreaRight2.appendChild(skipTally);
    gameAreaRight2.appendChild(skipTallyLabel);
    gameAreaRight3.appendChild(correctTally);
    gameAreaRight3.appendChild(correctTallyLabel);
    gameAreaRight4.appendChild(incorrectTally);
    gameAreaRight4.appendChild(incorrectTallyLabel);
    gameAreaRight.appendChild(questionsAnswered);

    generateQuestion();

}

function generateQuestion () {

    // Creates the random numbers - if time, add 6 for hard difficulty
    let num1 = Math.floor(Math.random() * easyFrench.length);
    let num2 = Math.floor(Math.random() * easyFrench.length);
    let num3 = Math.floor(Math.random() * easyFrench.length);
    let num4 = Math.floor(Math.random() * easyFrench.length);

    // Put random numbers into an array
    let mcRandNumbers = [num1, num2, num3, num4];
    // console.log(`Random numbers are ${mcRandNumbers}`);

    // Index each number to a French/English word
    let mc1 = easyFrench[num1];
    let mc2 = easyFrench[num2];
    let mc3 = easyFrench[num3];
    let mc4 = easyFrench[num4];

    let mcAns1 = easyEnglish[num1];
    let mcAns2 = easyEnglish[num2];
    let mcAns3 = easyEnglish[num3];
    let mcAns4 = easyEnglish[num4];

    // Put these into an array
    let mcRandWords = [mc1, mc2, mc3, mc4];
    // console.log(`The answers Fr are ${mcRandWords}`);
    let mcAnsWords = [mcAns1, mcAns2, mcAns3, mcAns4];
    // console.log(`The answers Eng are ${mcAnsWords}`);

    // Pick a value between 1 and 4
    let num0 = Math.floor(Math.random() * 4);
    // console.log(`Random choice num between 1 and 4 is ${num0}`);

    // Index the answer in French
    let mcAnswer = mcAnsWords[num0];
    let answerFr = document.createElement("p");
    answerFr.innerHTML = (`${mcAnswer}`);
    answerFr.id = "mcAnswerFrId";
    // console.log(`The question Eng is ${mcAnswer}`);

    // Index the answer in English
    let mcQuestion = mcRandWords[num0];
    let answerEn = document.createElement("p");
    answerEn.innerHTML = (`${mcQuestion}`);
    answerEn.id = "mcAnswerEnId";
    // console.log(`The question Fr is ${mcQuestion}`);

    // Create the question
    let gameAreaTop = document.getElementById("game-area-top");
    let questionh2 = document.createElement("h2");
    questionh2.id = "question-h2"
    questionh2.innerHTML = (`What is ${mcAnswer} in French?`);
    gameAreaTop.appendChild(questionh2);

    // gameAreaDiv.appendChild(answerFr);
    // mainDiv.appendChild(answerEn);

    // Create form for multiple choice radio buttons
    let gameAreaLeft = document.getElementById("game-area-left");
    let multipleChoiceForm = document.createElement("form");
    multipleChoiceForm.id = "answer-multiple-choice";
    gameAreaLeft.appendChild(multipleChoiceForm);

    // Create radio buttons
    for (let i = 0; i < mcRandWords.length; i++) {
        var radio1 = document.createElement("input");
        var label1 = document.createElement("label");
        radio1.type = "radio";
        radio1.required = true;
        radio1.name = "multipleChoiceRadios";
        radio1.classList.add("multiple-choice-radios");
        radio1.id = (`userAnswer ${mcRandWords[i]}`);
        label1.innerHTML = mcRandWords[i];
        multipleChoiceForm.appendChild(radio1);
        multipleChoiceForm.appendChild(label1);  
    }

}

// /**
//  * This function checks the user answer against the true answer.  It is called by the "Next" arrow,
//  * when user has selected the answer from multiple choice list, and returns 
//  * audible feedback from the 'ping', increments the answer tally whether correct or incorrect,
//  * and increments the progress tally
//  */
//  function checkAnswer(mcAnswer) {


//     let trueAnswerFr = document.getElementById("mcAnswerFrId").innerText;
//     // console.log(`True answer Fr = ${trueAnswerFr}`);

//     let trueAnswerEn = document.getElementById("mcAnswerEnId").innerText;
//     // console.log(`True answer En = ${trueAnswerEn}`);

//     let userAnswers = document.getElementsByTagName("input");
//     // console.log(userAnswers);

//     let userAnswer1 = document.getElementsByTagName("input")[0].checked;
//     let userAnswer2 = document.getElementsByTagName("input")[1].checked;
//     let userAnswer3 = document.getElementsByTagName("input")[2].checked;
//     let userAnswer4 = document.getElementsByTagName("input")[3].checked;

//     let userLabel1 = document.getElementsByTagName("label")[0];
//     let userLabel2 = document.getElementsByTagName("label")[1];
//     let userLabel3 = document.getElementsByTagName("label")[2];
//     let userLabel4 = document.getElementsByTagName("label")[3];

//     let pickedAnswer = "";
//     for(i = 0; i < 4 ; i++) {
//         if (document.getElementsByTagName("input")[i].checked){
//             pickedAnswer = document.getElementsByTagName("label")[i].innerText;
//             // console.log(`Picked answer is ${pickedAnswer}`);
//         } 
//     }


//     let oldCorrectTally = parseInt((document.getElementById("correctTally").innerText));
//     let oldIncorrectTally = parseInt((document.getElementById("incorrectTally").innerText));
//     let oldQuestionsAnswered = parseInt((document.getElementById("questionsAnsweredTally").innerText));
//     let oldProgressTally2 = parseInt((document.getElementById("progressTally").innerText));


//     console.log(pickedAnswer);
//     console.log(trueAnswerEn);

//     if (pickedAnswer === trueAnswerEn) {
//         newCorrectTally = oldCorrectTally += 1;
//         correctTally.innerHTML = newCorrectTally;
//     } else {
//         newincorrectTally = oldIncorrectTally += 1;
//         incorrectTally.innerHTML = newincorrectTally;
//     }


//     newQuestionsAnswered = oldQuestionsAnswered += 1;
//     questionsAnsweredTally.innerHTML =  newQuestionsAnswered;

//    progressTally.innerHTML = (`${newQuestionsAnswered} / ${gameLength}`);

//    console.log(gameLength);
//    console.log(newQuestionsAnswered);

//     endGameScore = newQuestionsAnswered -=1;

//    if (endGameScore === gameLength){
//        endGame();
//    } 



//    // if radio button picked textContent === answer
//     document.getElementsByTagName("h2")[0].remove();
//     document.getElementsByTagName("form")[0].remove();
//     mcAnswerEnId.remove();
//     mcAnswerFrId.remove();



//     generateQuestion();

// }


// /**
//  * This functions is called by the Skip Question button on the game area page
//  * It allows users to pass to the next question if they don't know the answer
//  * And it tallies up the Pass score
//  * It just re-generates new multiple choice questions
//  */
// function skipQuestion() {

//     document.getElementsByTagName("h2")[0].remove();
//     document.getElementsByTagName("form")[0].remove();

//     generateQuestion();

//     let oldSkipTally = parseInt((document.getElementById("skipTally").innerText));
//     let newSkipTally = oldSkipTally += 1;
//     skipTally.innerHTML = newSkipTally;

//     let oldQuestionsAnswered = parseInt((document.getElementById("questionsAnsweredTally").innerText));
//     let oldProgressTally2 = parseInt((document.getElementById("progressTally").innerText));
//     newQuestionsAnswered = oldQuestionsAnswered += 1;
//     questionsAnsweredTally.innerHTML =  newQuestionsAnswered;

//     progressTally.innerHTML = (`${newQuestionsAnswered} / ${gameLength}`);

//     document.getElementById("mcAnswerFrId").remove();
//     document.getElementById("mcAnswerEnId").remove();

// }


// /**
//  * This function will call up the end game screen, displaying the answers summary and 
//  * feedback.  Called by "See score" button.
//  */
// function endGame() {
//     //  Congratulations message, score, buttons to return to home screen
//     alert("END GAME");
// }


// /**
//  * This function will be called by a button named "Back to Home Screen" or "Reset Game",
//  * will display a warning message about resetting, then reload the introSection function 
//  * and all other answer tallies etc
//  */
// function resetGame() {
//     // call function introSection to restart the game

// }