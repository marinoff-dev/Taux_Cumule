import { createSlice } from "@reduxjs/toolkit"

const initialState: tarifswState = {
    sheetState: false,
    tarifswList: []
}

const tarifswSlice = createSlice({
    initialState,
    name: "tarifsw",
    reducers: {
        setTarifsw: (state, action) => {
            state.tarifswList = action.payload
        },
        addTarifsw: (state, action) => {
            state.tarifswList.push(action.payload);
        },
        toogleSheet: (state) => {
            state.sheetState = !state.sheetState;
        }
    }
})

export const {setTarifsw, addTarifsw, toogleSheet} = tarifswSlice.actions;
export default tarifswSlice