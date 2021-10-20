import React from 'react'
import './Profile.css'
export default function Profile() {
    return (
        <div className="profile">
            <div className="side"
                id="oneSide">
                <div class="space">
                    <img src="assets/placeholder.svg" alt="" />
                    <h3> مساحات إعلانية</h3>
                </div>
                <div class="space">
                    <div id="banner-ad">

                    </div>
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>

                <div class="space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>
                <div class="space">
                    <h3> مساحة لعرض معلومات خاصة بالموقع</h3>
                </div>
            </div>
            <div className="middle">
                <div className="space header">
                    <div className="profilePicture">
                        <img src="assets/download.png" alt="" />
                    </div>
                    <div className="profileTitle">
                        أحمد إبراهيم
                    </div>
                </div>

                <div class="space tries">

                    <h3>عدد المحاولات : 5</h3>

                    <img src="assets/heart.png" alt="" />

                </div>


                <div class="space achievementsIcons">
                    <h3>المستويات المكتملة</h3>
                    <div className="levels">
                        <div className="level">
                            <img src="assets/lesson_egg.png"
                                alt="" />
                            المستوى الثاني
                        </div>
                        <div className="level">
                            <img src="assets/lesson_baby.png"
                                alt="" />
                            المستوى الرابع
                        </div>
                    </div>
                    <div className="levels">
                        <div className="level">
                            <img src="assets/lesson_egg.png"
                                alt="" />
                            المستوى الثاني
                        </div>
                        <div className="level">
                            <img src="assets/lesson_baby.png"
                                alt="" />
                            المستوى الرابع
                        </div>
                    </div>
                </div>

            </div>
            <div className="side">
                <div class="space">
                    <img src="assets/placeholder.svg" alt="" />
                    <h3> مساحات إعلانية</h3>
                </div>
                <div class="space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>

                <div class="space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>
                <div class="space">
                    <h3> مساحة لعرض معلومات خاصة بالموقع</h3>
                </div>
            </div>

        </div>
    )
}
