import React from 'react'
import './header.scss'
import svg1 from '../../assets/svgs/svg1.svg'
import search from '../../assets/svgs/search.svg'
import bing from '../../assets/svgs/bing.svg'
import boy from '../../assets/svgs/boy.svg'
const Header = () => {
    return (
        <header>
            <div className="top-boxes">
                <div className="left-box">
                    <img src={svg1} alt="" />
                </div>
                <div className="right-box">
                    <div className="boxess">
                        <img src={search} alt="" />
                        <img src={bing} alt="" />
                        <div className="profile">
                            <img src={boy} alt="" />
                            <div className="text">
                                <h4>Michael Smith</h4>
                                <a href="">michaelsmith12@gmail.com</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header