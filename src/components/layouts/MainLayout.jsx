import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../login/Login'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

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