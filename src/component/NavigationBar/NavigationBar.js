import React from 'react'
import './NavigationBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import HomeIcon from '@mui/icons-material/Home';
export default function NavigationBar() {
    return (
        <div className="navigationBar" dir="ltr">
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <MenuIcon />
                </label>
                <label className="logo">Languague <span>Best</span></label>
                <ul>
                    <li>
                        <a href="/">
                            <HomeIcon
                                fontSize="large"
                                style={{ position: "relative", top: "10px" }}
                            />
                            الرئيسية
                        </a>
                    </li>
                    <li>
                        <a href="/profile">
                            <AccountBoxIcon
                                fontSize="large"
                                style={{ position: "relative", top: "10px" }}
                            />
                            حسابي
                        </a>
                    </li>
                    <li>
                        <a href="/levels">
                            <AddRoadIcon
                                fontSize="large"
                                style={{ position: "relative", top: "10px" }}
                            />
                            التقدم
                        </a>
                    </li>
                    <li>
                        <a href="#vs">
                            <BookIcon
                                fontSize="large"
                                style={{ position: "relative", top: "10px" }}
                            />
                            مدونتي
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
