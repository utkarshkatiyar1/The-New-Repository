"use client"

import { createSlice } from "@reduxjs/toolkit"



export const repoSlice = createSlice({
    name: 'repos',
    initialState : {
        repos: [],
    },
    reducers: {
      addRepos: (state, action) => {
        state.repos = action.payload;
      },
    }
    
  });

export const {addRepos} = repoSlice.actions;

export default repoSlice.reducer