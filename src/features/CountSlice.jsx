import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count:0
}

const countSlice = createSlice({
    name:'countSlice',
    initialState,
    reducers:{
        plus:(state, action) => {
            state.count = action.payload
        },
        minus: (state, action) => {
            state.count = action.payload
        }
    },
})

export const {plus , minus} = countSlice.actions;
export const CountSlice = countSlice.reducer