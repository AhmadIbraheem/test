import React from 'react'
import './Progress.css'
export default function Progress(props) {

    return (
        <div className="progressFather">
            <div className="cancel">
                <img src="assets/close2.png" alt="" />
            </div>
            <div className="progressTop" dir="ltr">

                <div className="progress"
                    style={{ width: props.width + "%" }}></div>
                {/* <div class="progress-bar">
                <span class="bar">
                    <span class="progress"></span>
                </span>
            </div> */}
            </div>
        </div>
    )
}
