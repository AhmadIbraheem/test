import React from 'react';
import './Question1.css';
export default function Question1(props) {
    const handleAnswer = (value) => {
        // console.log(props.answer);


        if (value == props.answer) {
            props.setScore(props.score + 1);
            props.setIsTrue("true");
        } else
            props.setIsFalse("true");
      //  alert("score: " + props.score)
    }
    return (
        <div className="question1">
            <div className="questionText">
                <h1>السؤال عن الإجابة من خلال الصور ؟</h1>
            </div>
            <div className="gridContainer">
                <div className="gridItem"
                    onClick={() => handleAnswer("a")}>
                    <img src="assets/aaa.jpg" alt="" />
                </div>
                <div className="gridItem"
                    onClick={() => handleAnswer("a")}>
                    <img src="assets/aaa.jpg" alt="" />
                </div>
                <div className="gridItem"
                    onClick={() => handleAnswer("a")}>
                    <img src="assets/aaa.jpg" alt="" />
                </div>
                <div className="gridItem"
                    onClick={() => handleAnswer("a")}>
                    <img src="assets/aaa.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
