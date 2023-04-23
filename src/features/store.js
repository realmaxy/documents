import { configureStore} from "@reduxjs/toolkit";
import popUpSlice from "./popUpSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        popUp: popUpSlice,
        userSlice: userSlice,
    },
})

