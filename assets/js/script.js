

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

    let firstSubmitButton = document.createElement("button");
    firstSubmitButton.type = "submit";
    firstSubmitButton.innerHTML = "Ok";
    firstSubmitButton.onclick = "chooseGameOptions()";

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
    // Change the h1 to Hello _ name
    // change p to "now choose some game options"
    // add difficulties list
    // add quiz length
    // add button to open game area

    let userName = document.getElementById("name-entry").value;

    let welcomeMessage = document.getElementsByTagName("h1")[0];
    welcomeMessage.innerHTML = (`Welcome ${userName}!`);

    let chooseGameOptions = document.getElementsByTagName("p")[0];
    chooseGameOptions.innerHTML = "Now choose some game options:";

    document.getElementById("name-entry").remove();
    document.getElementById("name-button").remove();

    let mainDiv = document.getElementById("main-div");
    
    var gender = ['Easy', 'Moderate','Difficult'];
    gender.forEach((genderValue, i) => {
       var labelValue = document.createElement('label');
       labelValue.innerHTML = genderValue;
       var inputValue = document.createElement('input');
       inputValue.type = "radio";
       inputValue.name = genderValue;
       inputValue.genderValue = i;
       mainDiv.appendChild(labelValue);
       mainDiv.appendChild(inputValue);
    }); 

    var numQuestions = ['10', '20','30','40','50','60'];
    numQuestions.forEach((questionValue, i) => {
       var labelValue2 = document.createElement('label');
       labelValue2.innerHTML = questionValue;
       var inputValue2 = document.createElement('input');
       inputValue2.type = "radio";
       inputValue2.name = questionValue;
       inputValue2.questionValue = i;
       mainDiv.appendChild(labelValue2);
       mainDiv.appendChild(inputValue2);
    }); 

    let playButton = document.createElement("button");
    playButton.innerHTML = "Play!";



}


/**
 * This function changes the first intro screen into the game area with question, 
 * multiple choice, answer tally etc.  It sets up the HTML.  It is called by the "Play"
 * button on the game options screen.  
 */
// function openGameArea() {

//     let mainHeading = document.getElementById("mainh1");
//     mainHeading.innerHTML = "Good luck!";

//     let question = document.getElementsByTagName("h2")[0];
//     question.innerHTML = "What is ___ in French?";

//     let removeH2 = document.getElementsByTagName("h2")[1];
//     removeH2.remove();

//     let numQuestions = document.getElementsByName("numquestions");
//     let numQuestionsChoice = "";

//     let mcLists = document.getElementsByTagName("ul");

//     for (let i of numQuestions) {
//         if (i.checked) {
//             numQuestionsChoice = i.value;
//         }
//     }

//     console.log(numQuestionsChoice);

//     let difficulties = document.getElementsByName("difficulty");
//     let difficultyChoice = "";

//     for (let i of difficulties) {
//         if (i.checked) {
//             difficultyChoice = i.id;
//         }
//     }

//     console.log(difficultyChoice);
// }

// function runGame(gameType) {

//     // Creates the random numbers - if time, add 6 for hard difficulty
//     let num1 = Math.floor(Math.random() * easyFrench.length) + 1;
//     let num2 = Math.floor(Math.random() * easyFrench.length) + 1;
//     let num3 = Math.floor(Math.random() * easyFrench.length) + 1;
//     let num4 = Math.floor(Math.random() * easyFrench.length) + 1;

//     console.log(`Num1 = ${num1}`);
//     console.log(`Num2 = ${num2}`);
//     console.log(`Num3 = ${num3}`);
//     console.log(`Num4 = ${num4}`);

//     // Put random numbers into an array
//     let mcRandNumbers = [num1, num2, num3, num4];

//     // Check there are two same answers
//     // var occurrences = {};
//     // for (var i = 0, j = mcRandNumbers.length; i < j; i++) {
//     // occurrences[mcRandNumbers[i]] = (occurrences[mcRandNumbers[i]] || 0) + 1;
//     // }
  
//     // console.log(occurrences[num1]);
//     // console.log(occurrences[num2]);
//     // console.log(occurrences[num3]);
//     // console.log(occurrences[num4]);

//     // Index each number to a French/English word
//     let mc1 = easyFrench[num1];
//     let mc2 = easyFrench[num2];
//     let mc3 = easyFrench[num3];
//     let mc4 = easyFrench[num4];

//     let mcAns1 = easyEnglish[num1];
//     let mcAns2 = easyEnglish[num2];
//     let mcAns3 = easyEnglish[num3];
//     let mcAns4 = easyEnglish[num4];

//     // Put these into an array
//     let mcRandWords = [mc1, mc2, mc3, mc4];
//     let mcAnsWords = [mcAns1, mcAns2, mcAns3, mcAns4];

//     // Pick a value between 1 and 4
//     let num0 = Math.floor(Math.random() * 4) + 1;

//     // Index the answer in French
//     let mcAnswer = mcAnsWords[num0];

//     // Index the answer in English
//     let mcQuestion = mcRandWords[num0];

//     // console.log(mc1);
//     // console.log(mc2);
//     // console.log(mc3);
//     // console.log(mc4);

//     console.log(`The answer in French is ${mcAnswer}`);
//     console.log(`The answer in French is ${mcQuestion}`);

// }


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
 * This function increments the correct answer tally
 */
function incrementCorrectAnswer () {
    // increments correct tally
}


/**
 * This function increments the incorrect answer tally
 */
function incrementIncorrectAnswer () {
    // increments incorrect tally
}


/**
 * This function increments the progress tally
 */
function incrementProgress () {
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
function endGame () {
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






