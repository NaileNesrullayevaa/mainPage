import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../login/Login'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Category from '../category/Category'
import Esas from '../esas/Esas'

const MainLayout = () => {
  return (
    <>
      
       <div className='top'>
            <Header />
            <div className="boxes">
                <Sidebar />
                <Category/>
                
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default MainLayout