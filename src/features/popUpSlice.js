import { createSlice } from "@reduxjs/toolkit";

const popUp = createSlice({
    name: 'openPopUp',
    initialState: {
        isOpenRegister: false,
        isOpenLogin: false,
    },
    reducers: {
        openRegister(state) {
          (state.isOpenRegister)?state.isOpenRegister = false:state.isOpenRegister = true
        },
        openLogin(state) {
          (state.isOpenLogin)?state.isOpenLogin = false:state.isOpenLogin = true
        }
    },
})

export const {openRegister, openLogin} = popUp.actions

export default popUp.reducer