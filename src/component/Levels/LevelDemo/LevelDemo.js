import React from 'react';
import './LevelDemo.css';
import { Link } from 'react-router-dom'
export default function LevelDemo() {
    const navStyle = {
        textDecoration: 'none'
    };


    return (
        <div className="levelDemo" >

            <div className="side"
                id="oneSide">
                <div class="first_space">
                    <img src="assets/placeholder.svg" alt="" />
                    <h3>فتح قوائم المتصدرين!</h3>
                    <h5>‏ مساحة خاصة بعرض محتوى للموقع من قاعدة البيانات</h5>
                </div>
                <div class="first_space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>

                <div class="first_space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>
                <div class="first_space">
                    <h3> مساحة لعرض معلومات خاصة بالموقع</h3>
                </div>
            </div>


            {/* BEGIN of levels --> center part */}
            <div className="levels">
                <h1>المستويات</h1>
                <div className="level ">

                    <div className="header">
                        <Link to="form" style={{ navStyle }}>
                            <h3>المستوى</h3>
                            <h3> الأول</h3>
                        </Link>
                    </div>

                    <div className="subLevels">
                        <div className="subLevel ">
                            <Link to="form">
                                <img src="assets/level1.png" alt="" />
                            </Link>
                        </div>
                        <div className="line"></div>
                        <div className="subLevel " >
                            <Link to="form">
                                <img src="assets/lesson_egg.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="subLevels">
                        <div className="subLevel closed">
                            <img src="assets/level3.png" alt="" />
                        </div>
                        <div className="line"></div>
                        <div className="subLevel closed" >
                            <img src="assets/lesson_sock.png" alt="" /></div>
                    </div>
                </div>
                <div className="level ">
                    <div className="header closed">
                        <h3>المستوى</h3>
                        <h3> الثاني</h3>
                    </div>
                    <div className="subLevels">
                        <div className="subLevel closed ">
                            <img src="assets/level2.png" alt="" />
                        </div>
                        <div className="line"></div>
                        <div className="subLevel closed " >
                            <img src="assets/level4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End of levels --> center part */}

            <div className="side">
                <div class="first_space">
                    <img src="assets/placeholder.svg" alt="" />
                    <h3>فتح قوائم المتصدرين!</h3>
                    <h5>‏ مساحة خاصة بعرض محتوى للموقع من قاعدة البيانات</h5>
                </div>
                <div class="first_space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>

                <div class="first_space">
                    <h3> مساحة إعلانية</h3>
                    <h5>  مساحة إعلانية مساحة إعلانية </h5>
                </div>
                <div class="first_space">
                    <h3> مساحة لعرض معلومات خاصة بالموقع</h3>
                </div>
            </div>


            <div className="img-line">
                <img src="assets/car.png"

                    style={{ top: "" }}
                    alt="" />
            </div>
        </div>
    )
}
