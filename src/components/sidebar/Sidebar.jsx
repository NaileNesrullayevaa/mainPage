import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import side1 from '../../assets/svgs/side1.svg'
import side2 from '../../assets/svgs/side2.svg'
import side3 from '../../assets/svgs/side3.svg'
import side4 from '../../assets/svgs/side4.svg'
import bing from '../../assets/svgs/bing.svg'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useSelector } from 'react-redux'
const Sidebar = () => {
    const [dataType, setDataType] = useState('home')
    const [sidebar, setSidebar] = useState(true)
    const userInfo = useSelector(state=>state.main.getCertificate)
    console.log("USER-INFO",userInfo);
        return (
            <div className={`sidebar ${sidebar == false ? "close" : ""}`}>
                <ul>
                    <li onClick={() => setDataType('home')} className={`${dataType == "home" ? "active" : ""}`}><img src={side1} alt="" /><Link to="yaradici/home">Əsas səhife</Link></li>
                    <li onClick={() => setDataType('user')} className={`${dataType == "user" ? "active" : ""}`}><img src={side2} alt="" /><Link to="yaradici/user">İstifadəçiler</Link></li>
                    <li onClick={() => setDataType('question')} className={`${dataType == "question" ? "active" : ""}`}><img src={side3} alt="" /><Link to='yaradici/question'>Soraqçalar</Link></li>
                    <li onClick={() => setDataType('adjustment')} className={`${dataType == "adjustment" ? "active" : ""}`}><img src={side4} alt="" /><Link to='yaradici/adjustment'>Tənzimləmələr</Link></li>
                    <li onClick={() => setDataType('notified')} className={`${dataType == "notified" ? "active" : ""}`}><img src={bing} alt="" /><Link to="yaradici/notified">Bildirişlər</Link></li>
                </ul>
                <div className="icons">

                    {
                        sidebar && (
                            <div onClick={() => setSidebar(false)} className='icon'><MdKeyboardDoubleArrowLeft /> </div>
                        )
                    }
                    {
                        !sidebar && (
                            <div onClick={() => setSidebar(true)} className="icon"><MdKeyboardDoubleArrowRight /></div>
                        )
                    }

                </div>

            </div>
        )
    }

    export default Sidebar