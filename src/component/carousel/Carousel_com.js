import React from 'react'
import './Carousel_com.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Carousel_com() {
    return (
        <div className="carousel_com" dir="ltr">
            <div class="slider">

                <a href="#slide-1">1</a>
                <a href="#slide-2">2</a>
                <a href="#slide-3">3</a>
                <a href="#slide-4">4</a>
                <a href="#slide-5">5</a>

                <div class="slides">
                    <div id="slide-1">
                        1
                    </div>
                    <div id="slide-2">
                        2
                    </div>
                    <div id="slide-3">
                        3
                    </div>
                    <div id="slide-4">
                        4
                    </div>
                    <div id="slide-5">
                        5
                    </div>
                </div>
            </div>


        </div>
    )
}


//infiniteLoop useKeyboardArrows autoPlay 