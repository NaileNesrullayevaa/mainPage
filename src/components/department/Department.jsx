import React, { useEffect, useState } from 'react'
import './department.scss'
import { Link } from 'react-router-dom'

const Department = () => {
    const [dataType,setDataType]=useState('bolme')
    const handleClick=(type)=>{
        setDataType(type)
    }

    return (
        <div className='department'>
            <div className="box">
                <h1>Soraqçalar</h1>
                <ul>
                    <li onClick={()=>handleClick('bolme')} className={`${dataType=="bolme" ? "active" : ""}`}><Link to="department">Bölmələr</Link></li>
                    <li onClick={()=>handleClick('isdifadeci')} className={`${dataType=="isdifadeci" ? "active" : ""}`}><Link>İstifadəçiler</Link></li>
                    <li onClick={()=>handleClick('kategoriya')} className={`${dataType=="kategoriya" ? "active" : ""}`}><Link>Kateqoriyalar</Link></li>
                    <li onClick={()=>handleClick('obyekt')} className={`${dataType=="obyekt" ? "active" : ""}`}><Link>Obyektlər</Link></li>
                    <li onClick={()=>handleClick('secim')} className={`${dataType=="secim" ? "active" : ""}`}><Link to="parametrs-choose">Parametr seçimləri</Link></li>
                    <li onClick={()=>handleClick('parametr')} className={`${dataType=="parametr" ? "active" : ""}`}><Link>Parametrlər</Link></li>
                    <li onClick={()=>handleClick('rayon')} className={`${dataType=="rayon" ? "active" : ""}`}><Link>Rayonlar</Link></li>
                    <li onClick={()=>handleClick('region')} className={`${dataType=="region" ? "active" : ""}`}><Link>Regionlar</Link></li>
                    <li onClick={()=>handleClick('tip')} className={`${dataType=="tip" ? "active" : ""}`}><Link to="type">Tip</Link></li>

                </ul>
            </div>

        </div>
    )
}

export default Department