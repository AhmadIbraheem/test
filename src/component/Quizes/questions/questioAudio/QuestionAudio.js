import React, { useState } from 'react';
import CorrectAnswer from '../../correctAnswer/CorrectAnswer';
import WrongAnswer from '../../wrongAnswer/WrongAnswer';
import './QuestionAudio.css';
export default function QuestionAudio(props) {

    // const [IsTrue, setIsTrue] = useState("");
    // const [IsFalse, setIsFalse] = useState("");

    //functions 
    // function to hgandle answer 
    const handleAnswer = (value) => {
        // console.log(props.answer);
        if (value == props.answer) {
            props.setScore(props.score + 1);

            props.setIsTrue("true");
        } else
            props.setIsFalse("true");
    }




    // const handleTrueAnswer = () => {
    //     setIsTrue("true");
    // }
    // const handleFalseAnswer = () => {
    //     setIsFalse("true");
    // }
    return (
        <div className="questionAudio">
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
                        {/* <h1> اضغط على الصورة و اختر ما تسمع</h1>

                        <div className="box" onClick={handleFalseAnswer}>
                            aaaa
                        </div>
                        <div className="box" onClick={handleFalseAnswer}>
                            aaaa
                        </div>
                        <div className="box" onClick={handleFalseAnswer}>
                            aaaa
                        </div>
                        <div className="box" onClick={handleTrueAnswer}>
                            aaaa
                        </div> */}

                    </div>
                    <div className="left">
                        <img
                            src="assets/Headphone-orange.svg" alt="" />
                    </div>
                </div> {/* end of formcontainer */}
            </div>
        </div>
    )
}
