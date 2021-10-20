import React, { Component } from 'react'

export default function GoogleAds() {
    return (
        componentDidMount(){
        (window.adsbygoogle = window.adsbygoogle || []).push({});

    }
    <div className="googleAds">
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client='xxxx'
            data-ad-slot='xxxxx'
            data-ad-format='auto'
        />

    </div>
  )
}
