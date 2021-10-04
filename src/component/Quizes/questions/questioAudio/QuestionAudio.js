import React, { useState } from 'react';
import CorrectAnswer from '../../correctAnswer/CorrectAnswer';
import WrongAnswer from '../../wrongAnswer/WrongAnswer';
import './QuestionAudio.css';
export default function QuestionAudio(props) {

    const [IsTrue, setIsTrue] = useState("");
    const [IsFalse, setIsFalse] = useState("");
    const handleTrueAnswer = () => {
        setIsTrue("true");
    }
    const handleFalseAnswer = () => {
        setIsFalse("true");
    }
    return (
        <div className="questionAudio">
            <div className="cont">
                <div className="formContainer">
                    <div className="right">


                        <h1>{props.questionText}</h1>
                        {
                            props.choices.map(
                                (value) => (
                                    <div className="box" onClick={handleFalseAnswer}>
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

            <div className="result">
                <div className="popup-box">
                    {IsTrue && <CorrectAnswer />}
                    {IsFalse && <WrongAnswer />}
                </div>
            </div>

        </div>
    )
}
