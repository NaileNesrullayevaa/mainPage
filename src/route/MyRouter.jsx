import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Login from '../pages/login/Login'
import Esas from '../pages/esas/Home'
import Question from '../pages/question/Question'
import DigitalLogin from '../pages/digitalLogin/DigitalLogin'
import Type from '../pages/type/Type'
import ParametrChoose from '../pages/parametrChoose/ParametrChoose'

const MyRouter = () => {
    return (
        <Routes>

            <Route path='/asan' element={<Login />} />

            <Route path='/' element={<DigitalLogin />} />


            <Route path='/asan/' element={<MainLayout />}>

                <Route path='yaradici/home' element={<Esas />} />

                <Route path="yaradici/question" element={<Question />} />
                <Route path="yaradici/question/type" element={<Type />} />

                <Route path="yaradici/question/parametrs-choose" element={<ParametrChoose/>}/>

            </Route>
        </Routes>
    )
}

export default MyRouter