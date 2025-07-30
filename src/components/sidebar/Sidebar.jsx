import React from 'react'
import './sidebar.scss'
import home from '../../assets/imgs/home.png'
import profile2 from '../../assets/imgs/profile-2user.png'
import category from '../../assets/imgs/category.png'
import setting from '../../assets/imgs/setting.png'
import bell from '../../assets/imgs/bell.png'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li><img src={home} alt="" /><span>Esas sehife</span></li>
                <li><img src={profile2} alt="" /><span>Istifadeciler</span></li>
                <li><img src={category} alt="" /><span>Soraqcalar</span></li>
                <li><img src={setting} alt="" /><span>Tenzimlemeler</span></li>
                <li><img src={bell} alt="" /><span>Bildirisler</span></li>

            </ul>
        </div>
    )
}


export default Sidebar