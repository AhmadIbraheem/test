import React, { useState } from 'react';
import QuizFooter from '../quizeFooter/QuizFooter';
import './QuizeQuestion.css';

export default function QuizeQuestion(props) {
    // const [chosedAnswer, setChosedAnswer] = useState("aaa");
    // const ahmad = chosedAnswer;
    // const questions = [
    //     {
    //         questionText: "ماهو معنى الكلمة التالية ؟",
    //         answer: "جواب 1",
    //         choices: ["جواب 1", "جواب 2", "جواب 3", "جواب 4"]
    //     },
    //     {
    //         questiontext: "ماهو الكلمة التالية ؟",
    //         answer: "",
    //         choices: ""
    //     },
    //     {
    //         questionText: "ماهو الكلمة التالية ؟",
    //         answer: "",
    //         choices: ""
    //     },
    //     {
    //         questionText: "ماهو الكلمة التالية ؟",
    //         answer: "",
    //         choices: ""
    //     }
    // ]
    // const checkanswer = () => {
    //     if (chosedAnswer == "aaa")
    //         console.log("correct");
    //     else
    //         console.log("worong");
    // }
    // function aaa(value) {
    //     console.log(value);
    // }
    // const handleAnswer = (value) => {
    //      if (value == props.answer){
    //     const num = props.questionToRender + 1;
    //     props.setQuestionToRender(num);
    //      }   
    // }

    const handleAnswer = (value) => {
        // console.log(props.answer);
        if (value == props.answer) {
            props.setScore(props.score + 1);
            //alert("score: " + props.score)
            props.setIsTrue("true");
        } else
            props.setIsFalse("true");
    }
    return (
        <div className="quizeQuestion">
            <div className="cont">
                <div className="formContainer">
                    <div className="right">
                        <h1>{props.questionText}</h1>
                        {
                            props.choices.map(
                                (value) => (
                                    <div className="box" onClick={() => handleAnswer(value)}>
                                        {value}
                                    </div>
                                )
                            )
                        }
                        {/* {questions.map((ques) => (
            <h1> {ques.questionText}</h1>

          ))
          } */}
                        {/* <h1>{props.questionText}</h1>
                        {questions[0].choices.map((ques) => (
                            <div className="box" onClick={
                                () => setChosedAnswer(ques)
                            }
                            >
                                {ques}
                            </div>
                        ))} */}
                    </div>
                    <div className="left">
                        <img
                            src="assets/Questions.svg" alt="" />

                    </div>
                </div> {/* end of formcontainer */}



            </div>


        </div>
    )
}
