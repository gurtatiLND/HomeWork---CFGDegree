import { createSlice } from '@reduxjs/toolkit';

//implementing redux
export const userSlice = createSlice({
    name: "user",
    initialState: {
        user:null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload; //user will be updated by the payload that will be passed in
        },
        logout: (state) => {
            state.user = null;
        }
    },
});

export const {login, logout} = userSlice.actions;

//will use this hook to grab this data from redux
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;