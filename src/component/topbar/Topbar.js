import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom';
export default function Topbar() {
    return (
        <div className="topbar" dir="ltr">
            <div className="websiteName">
                <h1>Languague <span>Best</span></h1>
            </div>
            <div className="list">
                <div className="list_item">
                    <Link to="/levels">
                        <img src="assets/mblue-progress.png" alt="" />
                        <span id="prog">التقدم</span>
                    </Link></div>
                <div className="list_item">
                    <Link to="/profile">
                        <img src="assets/shop.svg" alt="" />
                        <span>حسابي</span>
                    </Link>
                </div>
                <div className="list_item">
                    <Link to="/">
                        <img src="assets/shop.svg" alt="" />
                        <span>الرئيسية</span>
                    </Link>
                </div>

            </div>

            {/* <ul>
                <li>
                    <a href="#intro">الرئيسية</a>
                </li>
                <li>
                    <a href="#intro">صفحة</a>
                </li>
                <li>
                    <a href="#intro">صفحة</a>
                </li>
                <li>
                    <a href="#intro">صفحة</a>
                </li>
                <li>
                    <a href="#intro">صفحة</a>
                </li>
            </ul> */}

        </div>
    )
}
