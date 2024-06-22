import { createSlice } from "@reduxjs/toolkit";

const initCountState = { counter: 0 , showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initCountState,
    reducers: {
        increament(state){
            state.counter++;
        },
        decreament(state){
            state.counter--;
        },
        increaseByAmount(state, action){
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        },
    },
});

export const counterAction = counterSlice.actions;

export default counterSlice.reducer;

