import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const moviesSlice = createSlice({
    name:"movies",
    initialState :{
        nowPlayingMovies:null,
        trailerId:null
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideoId: (state,action)=>{
            state.trailerId = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const {addNowPlayingMovies,addTrailerVideoId} = moviesSlice.actions;