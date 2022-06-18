const questions_div = document.querySelector('.questions');  // all newDivs goes here
//const answerButton = document.createElement('button');
//const answerButtonShowAnswer = document.createElement('button');
//const allShowAnswerButtons = useData();
let allShowAnswerButtons;

async function getData() {
    const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean');
    const data = await response.json();
    useData(data);
}

function useData(data) {
    // loop trought all questions and answers

    for(let i = 0; i < data.results.length; i++) {  
        const newDiv = document.createElement('div');
        const question_p = document.createElement('p');
        const answerButton = document.createElement('button');
        const answerButtonShowAnswer = document.createElement('button');
        newDiv.appendChild(question_p);
        newDiv.appendChild(answerButton);
        questions_div.appendChild(newDiv);
        newDiv.appendChild(answerButtonShowAnswer);
        answerButtonShowAnswer.innerHTML = 'Show answer';
        answerButtonShowAnswer.classList.add('answer-show-answer');
        question_p.innerHTML = data.results[i].question;
        answerButton.innerHTML = data.results[i].correct_answer;
        //answerButton.innerHTML = 'Show answer';
        newDiv.classList.add('question');
        answerButton.classList.add('answer');
        answerButton.classList.add('hidden');
    }
    let allShowAnswerButtons = document.querySelectorAll('.answer-show-answer');
    //getButtons(allShowAnswerButtons);
    //console.log(allShowAnswerButtons);
    allShowAnswerButtons.forEach(function(btn) {
        btn.addEventListener('click', () => {
            console.log('clicked');
    })});
}

function getButtons(buttons) {
    return buttons;
}
/*
//allShowAnswerButtons = getButtons();
//console.log(allShowAnswerButtons);
allShowAnswerButtons.forEach(function(btn) {
    btn.addEventListener('click', () => {
        console.log('clicked');
})});
*/
/*
answerButtonShowAnswer.forEach(function(btn) {
    btn.addEventListener('click', () {
        console.log('clicked');
})});
*/


getData();








// practise 
/*
fetch('https://opentdb.com/api.php?amount=10')
    .then(function(response) {
        return(response.json());
    })
    .then(function(response) {
        console.log(response.results[0].question);
        console.log(response.results[0].correct_answer);
        question.innerHTML = response.results[0].question
    });
*/