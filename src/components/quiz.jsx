import React from "react";
import ReactDOM from 'react-dom'
//render raw HTML from question data 
const RawHTML = (props) => <span dangerouslySetInnerHTML={{ __html: props.html }}></span>;

class QuestionImage extends React.Component {
  constructor(props) {
    super(props);

    this.imgRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.imgRef.current && prevProps.img.src !== this.props.img.src) {
      this.imgRef.current.classList.add('fade-in');

      let timer = setTimeout(() => {
        this.imgRef.current.classList.remove('fade-in');
        clearTimeout(timer);
      }, 1000)
    }
  }

  render() {
    return (
      <img ref={this.imgRef} className="img-fluid" src={this.props.img.src} alt={this.props.img.alt} />
    );
  }
}

const QuizProgress = (props) => {
  return (
    <div className="progress">
      <p className="counter">
        <span>Question {props.currentQuestion + 1} of {props.questionLength}</span>
      </p>
      <div className="progress-bar" style={{ 'width': ((props.currentQuestion + 1) / props.questionLength) * 100 + '%' }}></div>
    </div>
  );
}

const Results = (props) => {
  return (
    <div className="results fade-in">
      <h1>Your score: {((props.correct / props.questionLength) * 100).toFixed()}%</h1>
      <button type="button" onClick={props.startOver}>Try again <i className="fas fa-redo"></i></button>
    </div>
  );
}

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.updateAnswer = this.updateAnswer.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.getResults = this.getResults.bind(this);
    this.startOver = this.startOver.bind(this);

    this.state = {
      currentQuestion: 0,
      correct: 0,
      inProgress: true,
      questions: [{
        question: "<em>Our vision is to be earth's most customer-centric company; to build a place where people can come to find and discover anything they might want to buy.",
        options: [{
          option: "Amazon",
          correct: true
        }, {
          option: "Walmart",
          correct: false
        }, {
          option: "Target, obviously",
          correct: false
        }],
        img: {
          src: '',
          alt: ''
        },
        feedback: "",
        moreUrl: ''
      }, {
        question: "_______  mission is to give people the power to build community and bring the world closer together.?",
        options: [{
          option: "Twitter",
          correct: false
        }, {
          option: "Facebook",
          correct: true
        }, {
          option: "Apple",
          correct: false
        }],
        img: {
          src: '',
          alt: ''
        },
        feedback: "",
        moreUrl: ''
      }, {
        question: "To refresh the world in mind, body and spirit. To inspire moments of optimism and happiness through our brands and actions.?",
        options: [{
          option: "Pepsico",
          correct: false
        }, {
          option: "Coca Cola",
          correct: true
        }, {
          option: "Unilever",
          correct: false
        }],
        img: {
          src: '',
          alt: ''
        },
        feedback: "",
        moreUrl: ''
      }]
    }
  }


  updateAnswer(e) {
    //record whether the question was answered correctly
    let answerValue = e.target.value;

    this.setState((prevState, props) => {
      let stateToUpdate = prevState.questions;
      //convert boolean string to boolean with JSON.parse()
      stateToUpdate[prevState.currentQuestion].answerCorrect = JSON.parse(answerValue);

      return { questions: stateToUpdate };
    });
  }

  checkAnswer(e) {
    //display to the user whether their answer is correct
    this.setState((prevState, props) => {
      let stateToUpdate = prevState.questions;
      stateToUpdate[prevState.currentQuestion].checked = true;

      return { questions: stateToUpdate };
    });
  }

  nextQuestion(e) {
    //advance to the next question
    this.setState((prevState, props) => {
      let stateToUpdate = prevState.currentQuestion;

      return { currentQuestion: stateToUpdate + 1 };
    }, () => {
      this.radioRef.current.reset();
    });
  }

  getResults() {
    //loop through questions and calculate the number right
    let correct = this.state.correct;

    this.state.questions.forEach((item, index) => {
      if (item.answerCorrect) {
        ++correct;
      }

      if (index === (this.state.questions.length - 1)) {
        this.setState({
          correct: correct,
          inProgress: false
        });
      }
    });
  }

  startOver() {
    //reset form and state back to its original value
    this.setState((prevState, props) => {
      let questionsToUpdate = prevState.questions;

      questionsToUpdate.forEach(item => {
        //clear answers from previous state
        delete item.answerCorrect;
        delete item.checked;
      });

      return {
        inProgress: true,
        correct: 0,
        currentQuestion: 0,
        questions: questionsToUpdate
      }
    });
  }

  componentDidMount() {
    //since we're re-using the same form across questions,
    //create a ref to it so we can clear its state after a question is answered
    this.radioRef = React.createRef();
  }

  render() {
    if (!this.state.inProgress) {
      return (
        <section className="quiz">
          <Results correct={this.state.correct} questionLength={this.state.questions.length} startOver={this.startOver} />
        </section>
      );
    }

    return (
      <section className="quiz fade-in" aria-live="polite">
        <QuizProgress currentQuestion={this.state.currentQuestion} questionLength={this.state.questions.length} />
        <div className="question-container">
          {this.state.questions[this.state.currentQuestion].img.src &&
            <QuestionImage img={this.state.questions[this.state.currentQuestion].img} />
          }
          <p className="question"><RawHTML html={this.state.questions[this.state.currentQuestion].question} /></p>

          <form ref={this.radioRef}>
            {this.state.questions[this.state.currentQuestion].options.map((item, index) => {
              return <div key={index}
                className={"option" + (this.state.questions[this.state.currentQuestion].checked && !item.correct ? ' dim' : '') + (this.state.questions[this.state.currentQuestion].checked && item.correct ? ' correct' : '')}>
                <input id={"radio-" + index} onClick={this.updateAnswer} type="radio" name="option" value={item.correct}
                  disabled={this.state.questions[this.state.currentQuestion].checked} />
                <label htmlFor={"radio-" + index}><RawHTML html={item.option} /></label>
              </div>
            })}
          </form>

          <div className="bottom">
            {this.state.questions[this.state.currentQuestion].feedback && this.state.questions[this.state.currentQuestion].checked
              && <div className="fade-in">
                <p>
                  <RawHTML html={this.state.questions[this.state.currentQuestion].feedback} />
                  {this.state.questions[this.state.currentQuestion].moreUrl &&
                    <React.Fragment>
                      &nbsp;<a target="_blank" href={this.state.questions[this.state.currentQuestion].moreUrl}>Learn more</a>.
                    </React.Fragment>
                  }
                </p>
              </div>
            }

            {!this.state.questions[this.state.currentQuestion].checked &&
              <button type="button" onClick={this.checkAnswer}
                disabled={!('answerCorrect' in this.state.questions[this.state.currentQuestion])}>Check answer</button>
            }

            {(this.state.currentQuestion + 1) < this.state.questions.length && this.state.questions[this.state.currentQuestion].checked &&
              <button className="fade-in next" type="button" onClick={this.nextQuestion}>Next <i className="fa fa-arrow-right"></i></button>
            }
          </div>

          {(this.state.currentQuestion + 1) === this.state.questions.length && this.state.questions[this.state.currentQuestion].checked &&
            <button type="button" className="get-results pulse" onClick={this.getResults}>Get Results</button>
          }
        </div>
      </section>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Quiz />, document.getElementById('quiz--mission'));
})
