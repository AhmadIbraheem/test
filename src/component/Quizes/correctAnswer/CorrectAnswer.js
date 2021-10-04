import React from 'react';
import './CorrectAnswer.css';
export default function CorrectAnswer() {
    return (

        <div className="correctAnswer">
            <div className="img">
                <img src="assets/panda-correct.svg" alt="" />
            </div>
            <div className="answer">
                <h1>أحسنت !!</h1>
                <p>هيا بنا نتعلم المزيد</p>
            </div>
            <div className="continue">
                المتابعة
            </div>
        </div>

    )
}
