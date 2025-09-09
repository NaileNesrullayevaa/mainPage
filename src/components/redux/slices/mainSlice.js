import { createSlice } from "@reduxjs/toolkit";
import getAllPage from "../getAllPage"
import getAllCategory from "../getAllCategory";
import getAllDepartment from "../getAllDepartment";
import getAddDepartment from "../getAddDepartment";
import removeDepartment from "../removeDepartment";
import getById from "../getById";
import editDepartment from "../editDepartment";
import getCertificate from "../getCertificate";

const initialState = {
    data: [],
    total: {},
    category: [],
    selectedCategoryIds: [],
    department: [],
    totalDepartments: null,
    // addDepartment: {},
    // removeId:null,
    getById: null,
    departmentRender: false,
    getCertificate:null
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setAllPage(state, { payload }) {
            state.data = payload
        },

        setTotal(state, { payload }) {
            state.total = payload
        },
        setCategory(state, { payload }) {
            state.category = payload
        },
        setSelectedCategoryIds(state, { payload }) {
            state.selectedCategoryIds = payload
        },
        setDepartment(state, { payload }) {
            state.department = payload
        },
        setTotalDepartments(state, { payload }) {
            state.totalDepartments = payload
        },
        // setAddDepartment(state, { payload }) {
        //     state.addDepartment = payload
        // },
        // setRemoveId(state,{payload}){
        //     state.removeId=payload
        // },

        setGetById(state, { payload }) {
            state.getById = payload
        },
        setDepartmentRender(state, { payload }) {
            state.departmentRender = payload
        },
        setGetCertificate(state,{payload}){
            state.getCertificate=payload
        }
    }

})

export const getAllPageAsync = (payload) => async (dispatch) => {
    try {
        const res = await getAllPage(payload);
        dispatch(setAllPage(res.data.data.objects))
        dispatch(setTotal(res.data.data.totals))
    } catch (error) {
        console.log(error)
    }
}
export const getAllCategoryAsync = (params) => async (dispatch) => {
    try {
        const res = await getAllCategory(params);
        console.log(res.data.data)
        dispatch(setCategory(res.data.data))


    } catch (error) {
        console.log(error)
    }
}

export const getAllDepartmentAsync = (params) => async (dispatch) => {
    try {
        const res = await getAllDepartment(params);
        console.log(res.data.data.departments)
        dispatch(
            setDepartment({
                data: res.data.data.departments.map((item, index) => {
                    return { ...item, key: index + 1 };
                })
            })
        );


        console.log(setDepartment())

        // dispatch(setDepartment(res.data.data.departments))
        dispatch(setTotalDepartments(res.data.data.totalDepartments))
        console.log(res.data.data.totalDepartments)
    } catch (error) {
        console.log(error)

    }
}

export const getAddDepartmentAsync = (params) => async (dispatch) => {
    const res = await getAddDepartment(params)
    console.log(res)
    dispatch(setDepartmentRender(prev => !prev))

}

export const removeDepartmentAsync = (params) => async (dispatch) => {
    const res = await removeDepartment(params)
    console.log(res)
    dispatch(setDepartmentRender(prev => !prev))

}

export const getByIdAsync = (params) => async (dispatch) => {
    const res = await getById(params)
    console.log(res.data)
    dispatch(setGetById(res.data))
}
export const editDepartmentAsync = (params) => async (dispatch) => {
    const res = await editDepartment(params)
    console.log(res)
    dispatch(setDepartmentRender(prev => !prev))

}

export const getCertificateAsync=()=>async()=>{
    const res=await getCertificate()
    console.log(res.userInfo)
    dispatch(setGetCertificate(res))
}

export const { setAllPage, setTotal, setCategory, setSelectedCategoryIds, setDepartment, setTotalDepartments, setGetById, setDepartmentRender, setGetCertificate } = mainSlice.actions
export default mainSlice.reducer