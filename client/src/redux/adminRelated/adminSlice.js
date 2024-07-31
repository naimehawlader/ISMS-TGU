import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adminsList: [],
    loading: false,
    error: null,
    response: null,
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        getSuccess: (state, action) => {
            state.adminsList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed: (state, action) => {
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        getError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    getError
} = adminSlice.actions;

export const adminReducer = adminSlice.reducer;