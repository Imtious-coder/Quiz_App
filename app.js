// Quiz data...
const quizData = [{
    question: 'What are you Searching for ?',
    a: 'Angular Developer',
    b: 'Frontend Developer(React)',
    c: 'JavaScript Devloper',
    d: 'Fullstack Developer',
    correct: 'b'
}, {
    question: 'Experience required ?',
    a: '0-1 years',
    b: '1+ years',
    c: '2+ years',
    d: '3+ years',
    correct: 'b'
}, {
    question: 'Which skills do you need ?',
    a: 'JavaScript | React.js | HTML5 | CSS3 | Tailwind | Bootstrap | Ant Design | Material UI | REST API | React Router | Firebase & Git ',
    b: 'JavaScript | Angular.js | HTML5 | CSS3|  Tailwind | Bootstrap | Ant | Material UI | REST API, & Git',
    c: 'JavaScript | Vue.js | HTML5 | CSS3|  Bootstrap | Material UI | REST API, & Git',
    d: 'JavaScript | jQuery.js | HTML5 | CSS3|  Tailwind | Bootstrap | Material UI | REST API, & Git',
    correct: 'a'
}, {
    question: 'What is the job type',
    a: 'Full time',
    b: 'Part time',
    c: 'Full time (Remote) ',
    d: 'Contract',
    correct: 'c'
}, {
    question: 'Job level !',
    a: 'Entry level',
    b: 'Mid level',
    c: 'Senior level ',
    d: 'Legend level',
    correct: 'b'
}];

const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    DeselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

function DeselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;

    })
}

submitBtn.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();


    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> You matched   ${score}/${quizData.length} question with me. </br> <h4> Curious ? let me know what you think . . . <h4> </h2>`;
        }
    }

});