import { createSlice } from "@reduxjs/toolkit";

const popUp = createSlice({
    name: 'openPopUp',
    initialState: {
        isOpen: false,
    },
    reducers: {
        openPopUp(state) {
          (state.isOpen)?state.isOpen = false:state.isOpen = true
        },
    },
})

export const {openPopUp} = popUp.actions

export default popUp.reducer