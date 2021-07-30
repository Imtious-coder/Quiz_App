// Quiz data...
const quizData = [{
    question: 'How old is Alan',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
}, {
    question: 'What is the most used PL in 2021',
    a: 'Java',
    b: 'C',
    c: 'Golang',
    d: 'JavaScript',
    correct: 'd'
}, {
    question: 'Who is the president of US',
    a: 'Chonda',
    b: 'Mannan',
    c: 'Asma',
    d: 'Nasima',
    correct: 'a'
}, {
    question: 'What does HTML stands for',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Heli Tall Man Loves',
    correct: 'a'
}, {
    question: 'What year was JavaScript launched',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'None of the avobe',
    correct: 'd'
}];

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

submitBtn.addEventListener("click", () => {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        alert("You have finished! Get yourself an Orange juice")
    }

    loadQuiz();
});