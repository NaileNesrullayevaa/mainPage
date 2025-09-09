import { configureStore } from "@reduxjs/toolkit";
import mainSlice from './slices/mainSlice'
import typeSlice from './slices/typeSlice'
import categoryParameterChoiceSlice from './slices/categoryParameterChoiceSlice'
const store=configureStore({
    reducer:{
        main:mainSlice,
        type:typeSlice,
        categoryParameterChoice:categoryParameterChoiceSlice

    }
})

export default store