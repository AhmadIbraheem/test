import React, { useState } from 'react'
import LevelInfo from '../Levels/levelInfo/LevelInfo';
import './home.css'
function Home() {
    const courseslist = [
        {
            name: "level one",
            src: "assets/lesson_airplane.png",
        },
        {
            name: "level two",
            src: "assets/lesson_baby.png",
        },
        {
            name: "level three",
            src: "assets/lesson_bag.png",
        },
        {
            name: "level four",
            src: "assets/lesson_egg.png",
        },
        {
            name: "level fifth",
            src: "assets/placeholder.svg",
        },
    ];

    // state fore hiovering level info
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return (
        <div className="home">
            {/* {isHovering && <LevelInfo />} */}
            <div className="container">
                <div className="left">
                   
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
                <div className="right">
                    <h1>المستويات</h1>
                    <div className="levels">

                        <div className="level first"
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            <img src="assets/lesson_airplane.png"
                                alt="" />
                            المستوى الأول
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
                    <div className="levels">
                        <div className="level">
                            <img src="assets/lesson_bike.png"
                                alt="" />
                            المستوى الخامس
                        </div>
                        <div className="level">
                            <img src="assets/lesson_hamburger.png"
                                alt="" />
                            المستوى السادس
                        </div>
                    </div>



                    {/*
                    show by list
                     {courseslist.map((level) => (
                        <div className="levels">
                            <img src={level.src}
                                alt=""
                            />
                        </div>
                    ))} */}

                </div>

                <div className="left">


                    <div class="first_space">
                        <img src="assets/placeholder.svg" alt="" />
                        <h3>فتح قوائم المتصدرين!</h3>
                        <h5>‏ مساحة خاصة بعرض محتوى للموقع من قاعدة البيانات</h5>                    </div>
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




            </div>
        </div>
    )
}

export default Home;
