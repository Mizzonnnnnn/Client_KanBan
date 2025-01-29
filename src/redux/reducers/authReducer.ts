import { createSlice } from "@reduxjs/toolkit";

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
        }
    }
})

export const { addAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const authSelector = (state: any) => state.authReducer.data;