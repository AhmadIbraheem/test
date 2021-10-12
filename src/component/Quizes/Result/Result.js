import React from 'react';
import './Result.css';
export default function Result(props) {
    const re = () => {
        alert(props.ahmad);
        console.log(props.maxProgress);
    }

    return (
        <div className="resultComp">
            <div className="popup-box">
                <p>Your Result is: {props.score}/{props.maxProgress}
                </p>
            </div>
        </div>
    )
}
