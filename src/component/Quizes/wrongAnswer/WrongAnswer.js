import React from 'react';
import './WrongAnswer.css'

export default function WrongAnswer(props) {
    const handleNextQuestion = () => {

        const num = props.questionToRender + 1;
        props.setQuestionToRender(num);

        props.setIsFalse("");
    }
    return (
        <div className="wrongAnswer">
            <div className="img">
                <img src="assets/panda-wrong.svg" alt="" />
            </div>
            <div className="answer">
                <h1> إجابة خاطئة</h1>
                <h4>الجواب الصحيح:</h4>
                <p>هنا يظهر الجواب الصحيح</p>
            </div>
            <div className="continue"
                onClick={handleNextQuestion}>
                المتابعة
            </div>
        </div>
    )
}
