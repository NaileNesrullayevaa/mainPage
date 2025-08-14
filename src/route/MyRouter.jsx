import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Login from '../pages/login/Login'
import Esas from '../pages/esas/Home'
import Question from '../pages/question/Question'

const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />

            <Route path='' element={<MainLayout />}>

                <Route path='yaradici/home' element={<Esas />} />

                <Route path='yaradici/question' element={<Question/>} />


            </Route>
        </Routes>
    )
}

export default MyRouter