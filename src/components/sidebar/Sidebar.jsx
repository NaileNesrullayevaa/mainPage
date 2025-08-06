import React from 'react'
import './sidebar.scss'
import side1 from '../../assets/svgs/side1.svg'
import side2 from '../../assets/svgs/side2.svg'
import side3 from '../../assets/svgs/side3.svg'
import side4 from '../../assets/svgs/side4.svg'
import bing from '../../assets/svgs/bing.svg'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li><img src={side1} alt="" /><span>Əsas səhife</span></li>
                <li><img src={side2} alt="" /><span>İstifadəçiler</span></li>
                <li><img src={side3} alt="" /><span>Soraqçalar</span></li>
                <li><img src={side4} alt="" /><span>Tənzimləmələr</span></li>
                <li><img src={bing} alt="" /><span>Bildirişlər</span></li>

            </ul>
        </div>
    )
}

export default Sidebar