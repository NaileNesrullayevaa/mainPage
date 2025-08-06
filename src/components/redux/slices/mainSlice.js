import { createSlice } from "@reduxjs/toolkit";
import getAllPage from "../getAllPage"
import getAllCategory from "../getAllCategory";

const initialState = {
    data: [],
    total: {},
    category: []
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
export const { setAllPage, setTotal, setCategory } = mainSlice.actions
export default mainSlice.reducer