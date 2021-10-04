import React, { useState } from 'react'
import CorrectAnswer from '../correctAnswer/CorrectAnswer';
import WrongAnswer from '../wrongAnswer/WrongAnswer';
import './QuizFooter.css'
export default function QuizFooter(props) {
    const [IsTrue, setIsTrue] = useState("");
    const [IsFalse, setIsFalse] = useState("");
    const [questionToRender, setQuestionToRender] = useState(props.questionToRender);


    const hanldePass = () => {
        const num = questionToRender + 1;
        props.setQuestionToRender(num);
        console.log(props.questionToRender);
        // setIsTrue(true);

    }
    const handleCheck = () => {
        // setIsFalse(true);
    }
    return (
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
    )
}
