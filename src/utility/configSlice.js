import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"english",
        isGpt : "Ask GPT"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang = action.payload
        },
        browseGpt:(state,action)=>{
            state.isGpt = action.payload;
        },
        resetconfig:(state)=>{
            state.isGpt = "Ask GPT"
        }

    }
})

export default configSlice.reducer;
export const{changeLanguage,browseGpt,resetconfig} = configSlice.actions;