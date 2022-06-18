const questions_div = document.querySelector('.questions');


async function getData() {
    const response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean');
    const data = await response.json();
    useData(data);
}

function useData(data) {
    for(let i = 0; i < data.results.length; i++) {
        //console.log(data.results[i].question);
        //console.log(data.results[i].correct_answer);
        //console.log('-----');
        const newDiv = document.createElement('div');
        const question_p = document.createElement('p');
        const answer_p = document.createElement('p');
        newDiv.appendChild(question_p);
        newDiv.appendChild(answer_p);
        questions_div.appendChild(newDiv);
        question_p.innerHTML = data.results[i].question;
        answer_p.innerHTML = data.results[i].correct_answer;
    }
}

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