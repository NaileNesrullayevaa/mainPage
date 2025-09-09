import { createSlice } from "@reduxjs/toolkit";
import getAllByPage from "../categoryParameterChoice/getAllByPageCategoryParameterChoice";
import getAll from "../categoryParametr/getAll";
import getAllCategory from "../category/getAllCategory";


const initialState = {
    data: [],
    totalCount:0,
    category:[],
    categoryParameter:[],


}

const categoryParameterChoiceSlice = createSlice({
    name: 'categoryParameterChoice',
    initialState,
    reducers: {
        setAllByPage(state, { payload }) {
            state.data = payload
        },
        setTotalCount(state, {payload}){
            state.totalCount=payload
        },
        setCategoryParameter(state, {payload}){
            state.categoryParameter=payload
        },
        setCategory(state,{payload}){
            state.category=payload
        }
    }

})

export const getAllByPageAsync = (params) => async (dispatch) => {
    try {
        const res = await getAllByPage(params);
        dispatch(setAllByPage(res.data.data.choices))
        dispatch(setTotalCount(res.data.data.totalCount))

    } catch (error) {
        console.log(error)
    }
}

export const getAllAsync=(payload)=>async(dispatch)=>{
    try{
        const res=await getAll(payload)
        dispatch(setCategoryParameter(res.data.data))
    }
    catch(error){
        console.log(error)
    }
}

export const getAllCategoryAsync=(payload)=>async(dispatch)=>{
    try{
        const res = await getAllCategory(payload)
        dispatch(setCategory(res))
    }
    catch(error){
        console.log(error)
    }
}




export const { setAllByPage, setCategoryParameter,setCategory} = categoryParameterChoiceSlice.actions
export default categoryParameterChoiceSlice.reducer