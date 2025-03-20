import { createSlice } from "@reduxjs/toolkit";
import { localDataNames } from "../../constants/appInfos";

export interface AuthState {
    token: string,
    _id: string,
    name: string,
    rule: number
}
const initalState = {
    token: '',
    _id: '',
    name: '',
    rule: 0
}

const authSlice = createSlice({
    name: 'auth',
    initialState: { data: initalState },
    reducers: {
        addAuth: (state, action) => {
            state.data = action.payload
            syncLocal(action.payload)
        },
        removeAuth: (state, _action) => {
            state.data = initalState
            syncLocal({})
        }
    }
})

export const { addAuth, removeAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const authSelector = (state: any) => state.authReducer.data;

const syncLocal = (data: any) => {
    localStorage.setItem(localDataNames.authData, JSON.stringify(data))
}