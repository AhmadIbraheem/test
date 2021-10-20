import React from 'react';
import { Link } from 'react-router-dom';
import './Result.css';
export default function Result(props) {
    const re = () => {
        alert(props.ahmad);
        console.log(props.maxProgress);
    }

    return (
        <div className="resultComp">

            <div className="popup-box box-shadow-3d">
                <div className="content">
                    <div className="resultTop">
                        <img src="assets/websiteImage.png" alt="" />
                    </div>
                    <div className="resultDown">
                        <div className="scoreContent">
                            <p>نتيجتك هي :
                                <span> {props.score}/{props.maxProgress}</span>
                            </p>
                        </div>
                    </div>
                    <div className="btns">
                        <Link to="levels" style={{ textDecoration: 'none' }}>
                            <div className="continue box-shadow-btn"
                            > المتابعة</div>
                        </Link>
                        <Link to="levels" style={{ textDecoration: 'none' }} >
                            <div className="retry box-shadow-btn"> إعادة المحاولة</div>
                        </Link>
                    </div>
                    {/* <div className="imgContent">
                        <img src="assets/resultGif.gif" alt="" />
                    </div>
                    <div className="scoreContent">
                        <p>نتيجتك هي :
                            <span> {props.score}/{props.maxProgress}</span>
                          
                        </p>

                    </div>
                    <div className="breaker">

                    </div>
                    <div className="btns">
                        <Link to="levels" style={{ textDecoration: 'none' }}>
                            <div className="continue box-shadow-btn"
                            > المتابعة</div>
                        </Link>
                        <Link to="levels" style={{ textDecoration: 'none' }} >
                            <div className="retry box-shadow-btn"> إعادة المحاولة</div>
                        </Link>
                    </div>
 */}


                    {/* <p>Your Result is: {props.score}/{props.maxProgress}
                    </p> */}
                </div>
            </div>
        </div>
    )
}
