import React from 'react'
import './Login.css'
import Intro from '../../home/Intro/Intro'
export default function Login(props) {

    return (
        <div className="login">
            <div className="popup-box">
                <div class="grid align__item">

                    <div class="register">
                        <img className="close"
                            onClick={props.handleClose}
                            src="assets/close2.png" alt="" />
                        <img className="logo"
                            src="assets/logolb.jpeg" alt="" />

                        <h1>‏أنشئ حسابًا</h1>

                        <form action="" method="post" class="form">

                            <div class="form__field">
                                <input type="email" placeholder="info@mailaddress.com" />
                            </div>

                            <div class="form__field">
                                <input type="password" placeholder="كلمة المرور" />
                            </div>
                            <div class="form__field">
                                <input type="password" placeholder="تأكيد كلمة المرور" />
                            </div>

                            <div class="form__field">
                                <input type="submit" value="إنشاء حساب" />
                            </div>

                        </form>
                        <div className="down">
                            <p> هل لديك حساب مسبقاً ؟<a href="#">تسجيل الدخول</a></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
