import React from 'react'
import './Signup.css'
export default function Signup() {
    return (
        <div className="signup">
            <div class="grid align__item">

                <div class="register">

                    <img src="assets/logolb.jpeg" alt="" />

                    <h2>تسجيل الدخول</h2>

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

                    <p> ليس لديك حساب؟<a href="#">أنشئ حسابًا</a></p>

                </div>

            </div>

        </div>
    )
}