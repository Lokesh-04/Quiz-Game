
const quizData = [
    {
        question: "How many states does Nigeria have ?",
        a: "24",
        b: "30",
        c: "36",
        d: "37",
        correct: "c",
    },
    {
        question: "Los Angeles is also known as ?",
        a: "Angels City",
        b: "Shining city",
        c: "City of Angels",
        d: "Lost Angels",
        correct: "c",
    },

    {
        question: "What is the capital of Germany ?",
        a: "Georgia",
        b: "Missouri",
        c: "Oklahoma",
        d: "Berlin",
        correct: "d",
    },

    {
        question: "How many sides does an hexagon have ?",
        a: "Six",
        b: "Sevene",
        c: "Four",
        d: "Five",
        correct: "a",
    },

    {
        question: "How many planets are currently in the solar system ?",
        a: "Eleven",
        b: "Seven",
        c: "Nine",
        d: "Eight",
        correct: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>you answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})