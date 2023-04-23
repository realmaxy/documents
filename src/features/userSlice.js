import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        userInfo: {
          name: null,
          description: null,
          email: null,
        }
    },
    reducers: {
        createUser(state, actions) {
          const user = actions.payload
          state.userInfo.name = user.name
          state.userInfo.description = user.description
          state.userInfo.email = user.email
          state.isLogin = true
        },
        logout(state) {
          state.isLogin = false
        },
        login(state, actions) {
          const user = actions.payload
          state.isLogin = true
          state.userInfo = {...user}
        }
    },
})

export const {createUser, logout, login} = userSlice.actions

export default userSlice.reducer