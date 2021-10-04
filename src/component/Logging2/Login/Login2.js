import React from 'react'
import './Login2.css'

export default function Login2() {
  return (
    <div className="login2">

      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h2>تسجيل الدخول</h2>
          <input type="email" placeholder="البريد الإلكتروني" />
          <input type="password" placeholder="كلمة المرور" />
          <input type="submit" value="تسجيل دخول" />

          <p> ليس لديك حساب؟<a href="#">أنشئ حسابًا</a></p>    </div>
      </div>
    </div>
  )
}
