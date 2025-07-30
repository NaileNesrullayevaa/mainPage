import React from 'react'
import './header.scss'
import header from '../../assets/imgs/header1.png'
import search from '../../assets/imgs/search.png'
import bell from '../../assets/imgs/bell.png'
import profile from '../../assets/imgs/profile.png'
const Header = () => {
  return (
    <header>
        <div className="top-boxes">
            <div className="left-box">
                <img src={header} alt="" />
            </div>
            <div className="right-box">
                <div className="boxess">
                    <img src={search} alt="" />
                    <img src={bell} alt="" />
                    <img src={profile} alt="" />
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header