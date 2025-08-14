import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../../pages/login/Login'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Category from '../category/Category'
import Esas from '../../pages/esas/Home'

const MainLayout = () => {
  return (
    <>
      
       <div className='top'>
            <Header />
            <div className="boxes">
                <Sidebar />
                
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default MainLayout