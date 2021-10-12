import React, { useEffect, useRef, useState } from 'react'
import { init } from 'ityped';
import './intro.css'
import Login from '../../Logging/Login/Login';
import Signup from '../../Logging/Signup/Signup';
export default function Intro() {

    // declare stats
    // state to handlde login and sighnup
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const toggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
    }
    const toggleSignup = () => {
        setIsSignupOpen(!isSignupOpen);
    }
    const textRef = useRef();
    useEffect(
        () => {
            init(textRef.current, {
                showCursor: false,
                backDelay: 700,
                strings: ['Lorem', 'ipsoum', 'ahmad']
            })
        }, []
    )

    return (
        <div className="intro" dir="ltr">

            <img className="intro_img"
                src="assets/nerd-animate.svg" alt="" />
            <div className="right">
                <div className="wrapper">
                    <h2>Lorem ipsum </h2>
                    <h1>Languague <span>Best</span> </h1>
                    <h3>text <span ref={textRef} className="ityped-cursor"></span></h3>
                    <div className="btn">
                        <div className="intro_button start"
                            onClick={toggleSignup}
                        >هيا نبدأ</div>
                        <div className="intro_button"
                            onClick={toggleLogin}
                        >لدي حساب مسبقا</div>
                    </div>
                </div>
                <a href="#whyLb"
                    id="arrow">
                    <img src="assets/icons8-expand-arrow-50.png" alt="" />
                </a>
            </div>
            {isLoginOpen && <Login handleClose={toggleLogin} 
                setIsLoginOpen={setIsLoginOpen}
                setIsSignupOpen={setIsSignupOpen}
            />}
            {isSignupOpen && <Signup handleClose={toggleSignup}
            setIsLoginOpen={setIsLoginOpen}
                setIsSignupOpen={setIsSignupOpen} />}

        </div>
    )
}
