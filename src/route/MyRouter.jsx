import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Login from '../components/login/Login'
import Esas from '../components/esas/Esas'
import Passport from '../components/passport/Passport'
import List from '../components/list/List'

const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />

            <Route path='' element={<MainLayout />}>

                <Route path='yaradici' element={<Esas />} />
                {/* <Route path='passport' element={<Passport />} /> */}



            </Route>
        </Routes>
    )
}

export default MyRouter