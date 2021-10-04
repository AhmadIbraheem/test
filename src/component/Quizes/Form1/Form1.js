import React, { useState } from 'react'
import Intro from '../../home/Intro/Intro';
import WhyLB from '../../home/WhyLB/WhyLB';
import Progress from '../progress/Progress';
import QuestionAudio from '../questions/questioAudio/QuestionAudio';
import Question1 from '../questions/question1/Question1';
import QuizFooter from '../quizeFooter/QuizFooter';
import QuizeQuestion from '../quizeQuestion/QuizeQuestion';
import LevelDemo from '../../Levels/LevelDemo/LevelDemo';
import './Form1.css'
import CorrectAnswer from '../correctAnswer/CorrectAnswer';
import WrongAnswer from '../wrongAnswer/WrongAnswer';
import Result from '../Result/Result';
export default function Form1() {

  const [IsTrue, setIsTrue] = useState("");
  const [IsFalse, setIsFalse] = useState("");
  const [questionToRender, setQuestionToRender] = useState(0);
  const [score, setScore] = useState(0);


  const hanldePass = () => {
    const num = questionToRender + 1;
    setQuestionToRender(num);
    console.log(questionToRender);
    // setIsTrue(true);

  }
  const handleCheck = () => {
    // setIsFalse(true);
  }


  // const [questionToRender, setQuestionToRender] = useState(0);

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

  const handleRender = (value, index) => {
    console.log(index + "dfhsd");
    switch (value) {
      case 'audio': return <QuestionAudio
        questionText={questions[index].questionsText}
        answer={questions[index].answer}
        choices={questions[index].choices}
      />;
      case 'text': return <QuizeQuestion
        questionText={questions[index].questionsText}
        answer={questions[index].answer}
        choices={questions[index].choices}
      />;
      case 'images': return <Question1 />;
      default: return <Result score={score} />

    }
  }

  return (
    <div className="form1" id="form1">

      <Progress width="30%" />

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
      {questionToRender}
      <div className="footer">
        {/* <QuizFooter
          msg="aaa"
          questionToRender={questionToRender}
          setQuestionToRender={setQuestionToRender} /> */}
        <div className="quizFooter">
          <div className="btns">
            <div className="pass"
              onClick={hanldePass}>
              !!تخط
            </div>
            <div className="check"
              onClick={handleCheck}>
              تحقق
            </div>
          </div>
          <div className="result">
            <div className="popup-box">
              {IsTrue && <CorrectAnswer />}
              {IsFalse && <WrongAnswer />}
              <h1>{questionToRender}</h1>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
