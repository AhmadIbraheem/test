import React from 'react'
import NavigationBar from '../../NavigationBar/NavigationBar'
import Topbar from '../../topbar/Topbar'
import Ads from '../Ads/Ads'
import DownloadApp from '../DownloadApp/DownloadApp'
import Intro from '../Intro/Intro'
import WhyLB from '../WhyLB/WhyLB'

export default function HomeMain() {
    return (
        <div>
            {/* <Topbar /> */}
            <NavigationBar />
            <Intro />
            <WhyLB />
            {/* <Ads /> */}
            <DownloadApp />
        </div>
    )
}
