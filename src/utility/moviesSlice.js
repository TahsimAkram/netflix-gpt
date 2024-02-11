import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState :{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        trailerId:null
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addTrailerVideoId: (state,action)=>{
            state.trailerId = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addTrailerVideoId} = moviesSlice.actions;