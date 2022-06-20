const questions_div = document.querySelector('.questions');  // all newDivs goes here
const loadingAnimation = document.querySelector('.loading');
const showAnswerButton = document.getElementById('btn');
let allAnswerButtons = [];

async function getData() {
    const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean');
    const data = await response.json();
    return data;
}

function useData(data) {
    // loop trought all questions and answers
    
    for(let i = 0; i < data.results.length; i++) {  
        const newDiv = document.createElement('div');  // question_p and answerButton goes here
        const question_p = document.createElement('p');
        const answerButton = document.createElement('button');
        
        newDiv.appendChild(question_p);   // append elements to elements
        newDiv.appendChild(answerButton);
        questions_div.appendChild(newDiv);
        
        question_p.innerHTML = data.results[i].question;
        answerButton.innerHTML = data.results[i].correct_answer;
        
        newDiv.classList.add('question');     // add classes to elements
        answerButton.classList.add('answer');
        answerButton.classList.add('hidden');
        newDiv.classList.add('question');
        
        allAnswerButtons.push(answerButton);  // push answers to the list
    }
    
    loadingAnimation.classList.add('hidden');  // hide loading animation when data is displayed
}

// when user click show answer button remove 'hidden' class from answers 
showAnswerButton.addEventListener('click', () => {
    allAnswerButtons.forEach(function(btn) {
        btn.classList.remove('hidden');
    })
});

// main
const triviaData = getData();
triviaData.then(function(triviaData) {
    useData(triviaData);
});






