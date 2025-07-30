import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Login from '../components/login/Login'
import Esas from '../components/esas/Esas'

const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />

            <Route path='' element={<MainLayout />}>

                <Route path='yaradici' element={<Esas />} />

            </Route>
        </Routes>
    )
}

export default MyRouter