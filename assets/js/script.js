let easyFrench = ["ranger", "baisser", "ecouter", "manger", "boire", "saluer", "remuer", "venir", "aller", "mélanger", "danser", "jouer", "nager"];
let easyEnglish = ["tidy", "kiss", "listen", "eat", "drink", "wave", "stir", "come", "go", "mix", "danse", "play", "swim"];

/**
 * This function creates the first intro screen, with a short welcome message
 * and test input for the name.  It starts when the browser has loaded, and 
 * resets to this if the Reset/Home/Start Again button is pressed in other screens
 */
function introSection() {

    let helloHeader = document.createElement("h1");
    helloHeader.innerHTML = "Welcome to Un Petit Jeu Francais!";

    let helloIntro = document.createElement("p")
    helloIntro.innerHTML = "First let's start with your name:";

    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name-entry";

    let firstSubmitButton = document.createElement("button");
    firstSubmitButton.type = "submit";
    firstSubmitButton.id = "name-button";
    firstSubmitButton.innerHTML = "Ok";
    firstSubmitButton.onclick = "chooseGameOptions()";

    firstSubmitButton.addEventListener("click", chooseGameOptions);

    // firstSubmitButton.addEventListener("click",function(){
    //     alert("HELLO");
    //     chooseGameOptions();
    // }); 

    let mainDiv = document.getElementById("main-div");

    mainDiv.appendChild(helloHeader);
    mainDiv.appendChild(helloIntro);
    mainDiv.appendChild(nameInput);
    mainDiv.appendChild(firstSubmitButton);
}


/**
 * This function changes the first intro screen into the game options screen,
 * whereby it displays the user's name, the user can choose a game difficulty
 * and length.  The "Play!" button then loads runGame.
 */

function chooseGameOptions() {
    
    // Print name in welcome message
    let userName = document.getElementById("name-entry").value;
    let welcomeMessage = document.getElementsByTagName("h1")[0];
    welcomeMessage.innerHTML = (`Welcome ${userName}!`);

    // Add some text to direct users to choose some game options
    let chooseGameOptions = document.getElementsByTagName("p")[0];
    chooseGameOptions.innerHTML = "Now choose some game options:";

    // Remove the intro screen elements
    document.getElementById("name-entry").remove();
    document.getElementById("name-button").remove();

    // Get the main div as the parent
    let mainDiv = document.getElementById("main-div");

    // Game difficulty text
    let difficultyh2 = document.createElement("h2");
    difficultyh2.innerHTML = (`Please choose a game difficulty`);
    mainDiv.appendChild(difficultyh2);

    // Create difficulty radio buttons
    let difficultyRadioOptions = ["Easy", "Medium", "Hard"];
    let radioform = document.createElement("form");
    radioform.classList.add("radioformclass");
    mainDiv.appendChild(radioform);

    radioformDiff = [];
    for (let i = 0; i < difficultyRadioOptions.length; i++) {
        var radio = document.createElement("input");
        var label = document.createElement("label");
        radio.type = "radio";
        radio.name = "radioname";
        radio.required = true;
        radio.id = (`${difficultyRadioOptions[i]}`);
        radio.checked = false;
        label.classList.add("radiobuttonsclass");
        label.innerHTML = difficultyRadioOptions[i];
        radioform.appendChild(radio);
        radioform.appendChild(label);
        radioformDiff.push(radio.id);
    }

    // Set default game difficulty to Easy
    Easy.checked = true;

    // Game length text
    let gamelengthh2 = document.createElement("h2");
    gamelengthh2.innerHTML = (`Now choose how many questions you'd like to answer`);
    mainDiv.appendChild(gamelengthh2);

    // Create game length options
    let testLengthOptions = ["10", "20", "30", "40", "50"];
    let testLengthform = document.createElement("form");
    testLengthform.classList.add("radioformLengthclass");
    mainDiv.appendChild(testLengthform);
    
    for (let i = 0; i < testLengthOptions.length; i++) {
      var radiolength = document.createElement("input");
      var label = document.createElement("label");
      radiolength.type = "radio";
      radiolength.required = true;
      radiolength.name = "radiolengthname";
      radiolength.id = (`gameLength${testLengthOptions[i]}`);
      label.classList.add("radiobuttonsclass");
      label.innerHTML = testLengthOptions[i];
      testLengthform.appendChild(radiolength);
      testLengthform.appendChild(label);
      console.log(radiolength.id);
    }

    // Set default game length to 10 questions
    gameLength10.checked = true;

    // Create button to display "Play!" - link to function runGame
    let playButton = document.createElement("button");
    playButton.innerHTML = "Play!";
    mainDiv.appendChild(playButton);
    playButton.addEventListener("click",function() {
        if (Easy.checked) {   
            gameDifficulty = "Easy";
        } else if (Medium.checked) {
            gameDifficulty = "Medium";
        } else {
            gameDifficulty = "Hard";
        };

        console.log(gameDifficulty);

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

        console.log(gameLength);
        
        welcomeMessage.remove();
        chooseGameOptions.remove();
        difficultyh2.remove();
        gamelengthh2.remove();
        testLengthform.remove();
        radioform.remove()
        openGameArea();
       });
    
    // Create button to return to homepage, goes back to intro screen with name input etc
    let homeButton = document.createElement("button");
    homeButton.innerHTML = "Return to Home";
    mainDiv.appendChild(homeButton);

    // Link button to return to intro screen
    homeButton.addEventListener("click", function () {
        introSection();
        welcomeMessage.remove();
        chooseGameOptions.remove();
        difficultyh2.remove();
        gamelengthh2.remove();
        testLengthform.remove();
        radioform.remove()
        homeButton.remove();
        playButton.remove();
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

    
    generateQuestion();

    // Create Submit button
    let mainDiv = document.getElementById("main-div");
    let submitAnswerButton = document.createElement("button");
    mainDiv.appendChild(submitAnswerButton);
    submitAnswerButton.innerHTML = "Next question";
    submitAnswerButton.addEventListener("click",checkAnswer);

    // Create Skip button
    let skipQuestionButton = document.createElement("button");
    skipQuestionButton.innerHTML = "Skip";
    mainDiv.appendChild(skipQuestionButton);
    skipQuestionButton.addEventListener("click",skipQuestion);

    // console.log(`The answer in French is ${mcAnswer}`);
    // console.log(`The answer in French is ${mcQuestion}`);

    // Create skip tally
    let skipTally = document.createElement("p");
    skipTally.innerHTML = 0;
    skipTally.id = "skipTally";

    // Create correct tally
    let correctTally = document.createElement("p");
    correctTally.innerHTML = 0;
    correctTally.id = "correctTally";

    // Create incorrect tally
    let incorrectTally = document.createElement("p");
    incorrectTally.innerHTML = 0;
    incorrectTally.id = "incorrectTally";

    mainDiv.appendChild(skipTally);
    mainDiv.appendChild(correctTally);
    mainDiv.appendChild(incorrectTally);
   
}

function generateQuestion () {
 
    // Creates the random numbers - if time, add 6 for hard difficulty
    let num1 = Math.floor(Math.random() * easyFrench.length) + 1;
    let num2 = Math.floor(Math.random() * easyFrench.length) + 1;
    let num3 = Math.floor(Math.random() * easyFrench.length) + 1;
    let num4 = Math.floor(Math.random() * easyFrench.length) + 1;

    // Put random numbers into an array
    let mcRandNumbers = [num1, num2, num3, num4];

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
    let mcAnsWords = [mcAns1, mcAns2, mcAns3, mcAns4];

    // Pick a value between 1 and 4
    let num0 = Math.floor(Math.random() * 4) + 1;

    // Index the answer in French
    let mcAnswer = mcAnsWords[num0];

    // Index the answer in English
    let mcQuestion = mcRandWords[num0];

    // Create the question
    let mainDiv = document.getElementById("main-div");
    let questionh2 = document.createElement("h2");
    questionh2.innerHTML = (`What is ${mcAnswer} in French?`);
    mainDiv.appendChild(questionh2);

    // Create form for multiple choice radio buttons
    let multipleChoiceForm = document.createElement("form");
    mainDiv.appendChild(multipleChoiceForm);

    // Create radio buttons
    for (let i = 0; i < mcRandWords.length; i++) {
        var radio1 = document.createElement("input");
        var label1 = document.createElement("label");
        radio1.type = "radio";
        radio1.required = true;
        radio1.name = "multipleChoiceRadios";
        label1.innerHTML = mcRandWords[i];
        multipleChoiceForm.appendChild(radio1);
        multipleChoiceForm.appendChild(label1);  
    }
}

/**
 * This function checks the user answer against the true answer.  It is called by the "Next" arrow,
 * when user has selected the answer from multiple choice list, and returns 
 * audible feedback from the 'ping', increments the answer tally whether correct or incorrect,
 * and increments the progress tally
 */
 function checkAnswer() {
    // if radio button picked textContent === answer
    // 
}


/**
 * This functions is called by the Skip Question button on the game area page
 * It allows users to pass to the next question if they don't know the answer
 * And it tallies up the Pass score
 * It just re-generates new multiple choice questions
 */
function skipQuestion() {

    document.getElementsByTagName("h2")[0].remove();
    document.getElementsByTagName("form")[0].remove();
    
    generateQuestion();

    let oldSkipTally = parseInt((document.getElementById("skipTally").innerText));
    let newSkipTally = oldSkipTally += 1;
    skipTally.innerHTML = newSkipTally;
}




/**
 * This function increments the correct answer tally
 */
function incrementCorrectAnswer() {
    // increments correct tally
}


/**
 * This function increments the incorrect answer tally
 */
function incrementIncorrectAnswer() {
    // increments incorrect tally
}


/**
 * This function increments the progress tally
 */
function incrementProgress() {
    // increments progress bar 
    // no. questions answer / test length
    // ie 12/20

}

/**
 * This functions gives feedback to user during the game
 * Eg if 3 answers correct in a row, "Amazing - 3 in a row" or the like
 */
function answerFeedback() {

}

/**
 * This function will call up the end game screen, displaying the answers summary and 
 * feedback.  Called by "See score" button.
 */
function endGame() {
    //  Congratulations message, score, buttons to return to home screen
}


/**
 * This function will be called by a button named "Back to Home Screen" or "Reset Game",
 * will display a warning message about resetting, then reload the introSection function 
 * and all other answer tallies etc
 */
function resetGame() {
    // call function introSection to restart the game

}