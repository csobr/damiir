const quizContainer = documnet.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit--quiz')

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results 

submitButton.addEventListener('click', showResults)

const myQuestions = [
    {
        questions: "",
        answers: {
            a: "",
            b:"",
            c:""

        },
        correctAnswer: ""
    },
]