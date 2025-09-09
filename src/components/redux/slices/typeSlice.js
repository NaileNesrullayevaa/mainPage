import { createSlice } from "@reduxjs/toolkit";

import getAllByPage from '../parametrType/getAllByPage'

import addParameterType from '../parametrType/addParameterType'
import getById from "../parametrType/getById";
import editParameterType from "../parametrType/editParameterType";
import removeParameterType from "../parametrType/removeParameterType";
const initialState = {
    data: [],
    totalParameterTypes: null,
    totalPages: null,
    getById:0,
    editParameterType:null,

}

const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        setAllByPage(state, { payload }) {
            state.data = payload
            state.totalPages = payload
        },
        setTotalParameterTypes(state, { payload }) {
            state.totalParameterTypes = payload
        },
        setGetById(state, { payload }){
            state.getById=payload
        },
        setEditParameterType(state,{payload}){
            state.editParameterType=payload
        },
       
    }

})

export const getAllByPageAsync = (params) => async (dispatch) => {
    try {
        const res = await getAllByPage(params)

        dispatch(setAllByPage(
            {
                data: res.data.data.parameterTypes,

                totalPages: res.data?.data?.totalPages
            }
        ))


        dispatch(setTotalParameterTypes(res.data.data.totalParameterTypes))
    }
    catch (error) {
        console.log(error);
    }
}

export const addParameterTypeAsync = (params) => async (dispatch) => {
    try {
        const res = await addParameterType(params)
    }
    catch (error) {
        console.log(error)
    }
}

export const getByIdAsync=(params)=>async(dispatch)=>{
    try{
        const res=await getById(params)
        dispatch(setGetById(res.data.data))
    }
    catch(error){
        console.log(error)
    }
}

export const editParameterTypeAsync=(params)=>async(dispatch)=>{
    const res=await editParameterType(params)
    console.log(res)
}

export const removeParameterTypeAsync=(params)=>async(dispatch)=>{
    const res= await removeParameterType(params)
}


export const { setAllByPage, setTotalParameterTypes, setGetById,setEditParameterType } = typeSlice.actions
export default typeSlice.reducer