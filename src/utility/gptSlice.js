import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptToggleSwitch : false
    },
    reducers:{
        toggleSearch:(state)=>{
            state.gptToggleSwitch = !state.gptToggleSwitch;
        }
    }
})

export default gptSlice.reducer;
export const{toggleSearch} = gptSlice.actions;