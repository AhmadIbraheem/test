import React from 'react'
import Topbar from '../../topbar/Topbar'
import Ads from '../Ads/Ads'
import DownloadApp from '../DownloadApp/DownloadApp'
import Intro from '../Intro/Intro'
import WhyLB from '../WhyLB/WhyLB'

export default function HomeMain() {
    return (
        <div>
            <Topbar />
            <Intro />
            <WhyLB />
            <Ads />
            <DownloadApp />
        </div>
    )
}
