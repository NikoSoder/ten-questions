const question = document.querySelector('h1');


async function getData() {
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const data = await response.json();
    question.innerHTML = data.results[0].question;
}

getData();







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