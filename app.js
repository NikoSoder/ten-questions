// TODO: add .catch // add animation  // change buttons to divs
const questions_div = document.querySelector('.questions');  // all newDivs goes here
const loadingAnimation = document.querySelector('.loading');
const showAnswerButton = document.getElementById('btn');
const API_URL = 'https://opentdb.com/api.php?amount=10&type=boolean';
let AllAnswer_p = [];  // all answer_p elements 

async function getData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    
    } catch (error) {
        alert('Failed to get the data. Refresh the page');
    }
}

function useData(data) {
    // loop trought all questions and answers
    
    for(let i = 0; i < data.results.length; i++) {  
        const newDiv = document.createElement('div');  // question_p and answerButton goes here
        const question_p = document.createElement('p');
        const answer_p = document.createElement('p');
        
        newDiv.appendChild(question_p);   // append elements to elements
        newDiv.appendChild(answer_p);
        questions_div.appendChild(newDiv);
        
        question_p.innerHTML = data.results[i].question;
        answer_p.innerHTML = data.results[i].correct_answer;
        
        newDiv.classList.add('question');     // add classes to elements
        answer_p.classList.add('answer');
        answer_p.classList.add('hidden');
        newDiv.classList.add('question');
        
        AllAnswer_p.push(answer_p);  // push answers to the list
    }
    
    loadingAnimation.classList.add('hidden');  // hide loading animation when data is displayed
}

// when user click show answer button remove 'hidden' class from answers 
showAnswerButton.addEventListener('click', () => {
    AllAnswer_p.forEach(function(btn) {
        btn.classList.remove('hidden');
    })
});

// main
const triviaData = getData();
triviaData.then(function(triviaData) {
    useData(triviaData);
});






