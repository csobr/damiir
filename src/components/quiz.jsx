
(function() {
  const quizContainer2 = document.querySelector("#quiz-container")
  const myQuestions = [
    {
      question: "Our vision is to be earth's most customer-centric company; to build a place where people can come to find and discover anything they might want to buy.",
      answers: {
        a: "Amazon",
        b: "Walmart",
        c: "Target, obviously"
      },
      correctAnswer: "a"
    },
    {
      question: "_______  mission is to give people the power to build community and bring the world closer together.?",
      answers: {
        a: "Twitter",
        b: "Amazon",
        c: "Facebook"
      },
      correctAnswer: "c"
    },
    {
      question: "To refresh the world in mind, body and spirit. To inspire moments of optimism and happiness through our brands and actions.?",
      answers: {
        a: "Pepsico",
        b: "Coca Cola ",
        c: "Unilever"
      },
      correctAnswer: "C"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer2.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();





// const quizContainer = documnet.getElementById('quiz')
// const resultsContainer = document.getElementById('results')
// const submitButton = document.getElementById('submit--quiz')

// function buildQuiz(){}

// function showResults(){}

// // display quiz right away
// buildQuiz();

// // on submit, show results 

// submitButton.addEventListener('click', showResults)

// const myQuestions = [
//     {
//         questions: "",
//         answers: {
//             a: "",
//             b:"",
//             c:""

//         },
//         correctAnswer: ""
//     },

// ]

// function buildQuiz(){
//     const output =[];
//     myQuestions.forEach(
//         (currentQuestions,questionsNumber) => {
//             // we'll want to store the list answers choices
//             const answers = [];
//              //and for each avalible answer
//              for(letter in currentQuestions.answers){
//                  //..and an html radio button

//                  answers.push(
//                      `<label>
//                      <input type = "radio" name "questions${questionsNumber}"
//                      ${letter} :
//                      ${currentQuestion.answers[letter]}</label>`

//                  );
//                 }
//                  // add this question and its answers to output
//         output.push(
//             `<div class= "questions">${currentQuestion.question}</div>
//             <divclass = "answers"> ${answers.join('')}</div>`
//         );


//         }
       
//     )
//     //finallt combine our output list into one stringof html and put it on the page 
//     quizContainer,innerHtml = output.join('');

// }
//  myQuestions.forEach((currentQuestion,questionNumber)=>{
//     //here goes the code we want to run for each question
//  });

//  function showResults(){
//      //gather answer containers from our quiz

//      const answerContainers = quizContainer.querySelectorAll('.answers');

//      //keep track of user's answers
//      let numCorrect = 0;

//      // for each question
//      myQuestions.forEach((currentQuestion,questionNumber)=> {
//          // find selected answer 
//          const answerContainer = answerContainers[questionNumber];
//          const selector = 'input[name = question'+ questionNumber+']:checked';
//          userAnswer = (answerContainer.querySelector(selector)) || {}.value;
//          // if answer is correct 
//           if(userAnswer===currentQuestion.correctAnswer){
//               //add to the nu,ber of correct answers
//               numCorrect++;

//               //color the answer green
//               answerContainer[questionNumber].style.color = 'lightgreen';

//           }
//           //if the answer is wrong or blank
//           else {
//               //colot the answer red
//               answerContainer[questionNumber].style.color = 'red';

//           }

//      });

//      //show number of correct answers out of total
//      resultsContainer.innerHTML = numCorrect + 'out of' + myQuestions.length;
//  }
//  //