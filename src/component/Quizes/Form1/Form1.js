import React, { useState } from 'react';
import Progress from '../progress/Progress';
import QuestionAudio from '../questions/questioAudio/QuestionAudio';
import Question1 from '../questions/question1/Question1';
import QuizeQuestion from '../quizeQuestion/QuizeQuestion';
import './Form1.css'
import CorrectAnswer from '../correctAnswer/CorrectAnswer';
import WrongAnswer from '../wrongAnswer/WrongAnswer';
import Result from '../Result/Result';
export default function Form1() {
  const ahmad = "ajhd";
  const questions = [
    {
      type: 'audio',
      questionsText: 'audio quest',
      answer: 'a',
      choices: ["aaaa", "aaa", "aa", "a"]
    },
    {
      type: 'text',
      questionsText: 'Text ques',
      answer: 'a',
      choices: ["aaaa", "aaa", "aa", "a"]
    },
    {
      type: 'images',
      questionsText: 'image quest',
      answer: 'a',
      choices: ["aaaa", "aaa", "aa", "a"]
    }]


  // to render true answer popup
  const [IsTrue, setIsTrue] = useState("");
  // to render False answer popup
  const [IsFalse, setIsFalse] = useState("");
  // question counter to detect which countert should we display
  const [questionToRender, setQuestionToRender] = useState(0);
  // user score counter
  const [score, setScore] = useState(0);
  // Progress counter
  const [progressValue, setProgressValue] = useState(0);
  // max score OR number of questions
  const [maxProgress, setMaxProgress] = useState(questions.length);
  // to display the result in the end
  const [displyResult, setDisplayResult] = useState("");


  // in case TRUE answer:
  // 1. increase score to calculate the final result
  // 2. increase question counter


  // in case PASS the question
  // 1. check if we reach end of quiz TO display the result 
  // 2. if we don not reach the end : display the next question  
  const hanldePass = () => {
    const nextQuestion = questionToRender + 1;
    if (nextQuestion >= maxProgress)
      setDisplayResult("true");
    else
      setQuestionToRender(nextQuestion);
  }

  const handleCheck = () => {
    setIsFalse(true);
  }

  //   const handleNextQuestion = () => {

  //     const nextQuestion = props.questionToRender + 1;
  //     props.setQuestionToRender(nextQuestion);
  // }

  // FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
  // function to handle which question to view
  const handleRender = (value, index) => {
    // console.log(index + "dfhsd");
    switch (value) {
      case 'audio': return <QuestionAudio
        setIsFalse={setIsFalse}
        setIsTrue={setIsTrue}
        questionToRender={questionToRender}
        setQuestionToRender={setQuestionToRender}
        questionText={questions[index].questionsText}
        answer={questions[index].answer}
        choices={questions[index].choices}
        setScore={setScore}
        score={score}

      />;
      case 'text': return <QuizeQuestion
        setIsFalse={setIsFalse}
        setIsTrue={setIsTrue}
        questionToRender={questionToRender}
        setQuestionToRender={setQuestionToRender}
        questionText={questions[index].questionsText}
        answer={questions[index].answer}
        choices={questions[index].choices}
        setScore={setScore}
        score={score}
      />;
      case 'images': return <Question1
        setIsFalse={setIsFalse}
        setIsTrue={setIsTrue}
        questionToRender={questionToRender}
        setQuestionToRender={setQuestionToRender}
        questionText={questions[index].questionsText}
        answer={questions[index].answer}
        choices={questions[index].choices}
        setScore={setScore}
        score={score}
      />;
      default: return <Result score={score} />

    }
  }

  return (
    <div className="form1" id="form1">
      <Progress width={progressValue} />

      <div className="question">
        {/* <Question1 /> */}
        {/* <QuizeQuestion /> */}
        {/* <QuestionAudio /> */}
        {/* {
          questions.map(
            (value, index) => (
              handleRender(value, index))
          )
        } */}
        {handleRender(questions[questionToRender].type, questionToRender)}
      </div>

      <div className="breaker"></div>
      <div className="footer">
        {/* <QuizFooter
          msg="aaa"
          questionToRender={questionToRender}
          setQuestionToRender={setQuestionToRender} /> */}
        <div className="quizFooter">
          <div className="btns">
            <div className="pass"
              onClick={hanldePass}>
              تخط  !!           </div>
            <div className="check"
              onClick={handleCheck}>
              تحقق
            </div>
          </div>
          <div className="result">
            <div className="popup-box">
              {IsTrue && <CorrectAnswer
                questionToRender={questionToRender}
                setQuestionToRender={setQuestionToRender}
                setIsTrue={setIsTrue}
                maxProgress={maxProgress}
                setProgressValue={setProgressValue}
                score={score}
                setDisplayResult={setDisplayResult}

              />}
              {IsFalse && <WrongAnswer
                questionToRender={questionToRender}
                setQuestionToRender={setQuestionToRender}
                setIsFalse={setIsFalse}
                maxProgress={maxProgress}

              />}

              {/* <h1>{questionToRender}</h1> */}
            </div>
          </div>

          {/* result section */}
          {displyResult && <Result
            score={score}
            maxProgress={maxProgress}
          />}


        </div>
      </div>


    </div>
  )
}
