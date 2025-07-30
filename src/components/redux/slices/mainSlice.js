import { createSlice } from "@reduxjs/toolkit";
import getAllPage from "../getAllPage"

const initialState = {
    getAllPage: {}
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setAllPage(state, { payload }) {
            state.getAllPage = payload
        }
    }

})

export const getAllPageAsync = () => async (dispatch) => {
    try {
        const res = await getAllPage();
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}
export const { setAllPage } = mainSlice.actions
export default mainSlice.reducer