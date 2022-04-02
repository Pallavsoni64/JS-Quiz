const quizDB = [
    {
        question: "Q1: What is JavaScript?",
        a: "JavaScript is a scripting language used to make the website interactive",
        b: "JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the mentioned",
        ans: "ans1"

    },
    {
        question: "Q2:  Which of the following is correct about JavaScript?",
        a: "JavaScript is an Object-Based language",
        b: "JavaScript is Assembly-language",
        c: "JavaScript is an Object-Oriented language",
        d: "JavaScript is a High-level language",
        ans: "ans1"

    },
    {
        question: "Q3: . Among the given statements, which statement defines closures in JavaScript?",
        a: "JavaScript is a function that is enclosed with references to its inner function scope",
        b: " JavaScript is a function that is enclosed with references to its lexical environment"
        ,
        c: "JavaScript is a function that is enclosed with the object to its inner function scope",
        d: "None of the mentioned",
        ans: "ans2"

    },
    {
        question: "Q4: Arrays in JavaScript are defined by which of the following statements?",
        a: "It is an ordered list of values",
        b: "It is an ordered list of objects",
        c: "It is an ordered list of string",
        d: "It is an ordered list of functions",
        ans: "ans1",

    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const uncheckAnswer = () => 
    answers.forEach((curAnselem) =>curAnselem.checked = false);



const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnselem) => {
        if (curAnselem.checked) {
            answer = curAnselem.id;
        }

    })
    return answer;
};


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;
    uncheckAnswer();
    if (questionCount < quizDB.length) {
        loadQuestion();
    }else{
      showScore.innerHTML = `<h3> You Scored ${score} out of ${quizDB.length} ✌<?h3>
      <button class = "btn" onclick = "location.reload()"> Play again <?button>
      `;
      showScore.classList.remove('scoreArea');
      
    }
})