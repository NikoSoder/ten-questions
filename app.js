const questions_div = document.querySelector('.questions');  // all newDivs goes here
const loadingAnimation = document.querySelector('.loading');  


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
        newDiv.appendChild(question_p);
        newDiv.appendChild(answerButton);
        questions_div.appendChild(newDiv);
        question_p.innerHTML = data.results[i].question;
        answerButton.innerHTML = data.results[i].correct_answer;
        newDiv.classList.add('question');
        answerButton.classList.add('answer');
        newDiv.classList.add('question');
    }
    loadingAnimation.classList.add('hidden');  // hide loading animation when data is displayed
}

// main
const triviaData = getData();
triviaData.then(function(triviaData) {
    useData(triviaData);
});






