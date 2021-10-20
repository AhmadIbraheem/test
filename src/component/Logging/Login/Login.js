import React from 'react'
import './Login.css'
import Intro from '../../home/Intro/Intro'
export default function Login(props) {
    const handleClick = () => {
        props.handleClose();
        props.setIsSignupOpen("true");
    }

    return (
        <div className="login">
            <div className="popup-box">
                <div class="grid align__item">

                    <div class="register">
                        <img className="close"
                            onClick={props.handleClose}
                            src="assets/close2.png" alt="" />
                        <img className="logo"
                            src="assets/websiteImage.png" alt="" />

                        <h1>تسجيل الدخول</h1>


                        <form action="" method="post" class="form">

                            <div class="form__field">
                                <input type="email" placeholder="البريد الإلكتروني" />
                            </div>

                            <div class="form__field">
                                <input type="password" placeholder="كلمة المرور" />
                            </div>
                            <div class="form__field">
                                <input type="submit" value="تسجيل الدخول" />
                            </div>

                        </form>
                        <div className="down">
                            <p> ليس لديك حساب؟<a href="#"
                                onClick={handleClick}
                            >أنشئ حسابًا</a></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
