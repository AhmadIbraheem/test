import React from 'react'
import Slider from "react-slick";
import './Slick_comp.css'
export default function Slick_comp() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    return (
        <div className="slick_comp">
            <Slider {...settings}
            className="items">
                <div className="item">
                    hello ads
                </div>
                <div className="item">
                hello ads
                    {/* <img src="assets/aaa.jpg" alt="" /> */}
                </div>
                <div className="item">
                hello ads
                    {/* <img src="assets/aaa.jpg" alt="" /> */}
                </div>
                <div className="item">
                hello ads
                    {/* <img src="assets/aaa.jpg" alt="" /> */}
                </div>
                <div className="item">
                hello ads
                    {/* <img src="assets/aaa.jpg" alt="" /> */}
                </div>
                <div className="item">
                hello ads
                    {/* <img src="assets/aaa.jpg" alt="" /> */}
                </div>
            </Slider>
        </div>
    )
}
