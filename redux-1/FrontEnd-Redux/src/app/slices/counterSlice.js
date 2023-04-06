import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increament(state,action){
            return state+1;
        },
        decreament(state,action){
            return state-1;
        }
    }
})

export const {increament,decreament } = counterSlice.actions

export default counterSlice.reducer

