import React from 'react'
import './bannerTitle.css'

const BannerTitle = ({title}) => {
  return (
    <div className="banner-title">
        <h3>{title}</h3>
    </div>
  )
}

export default BannerTitle