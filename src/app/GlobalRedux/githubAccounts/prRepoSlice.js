"use client"

import { createSlice } from "@reduxjs/toolkit"



export const prReposSlice = createSlice({
    name: 'prs',
    initialState : {
        prs: [],
    },
    reducers: {
      addRepoPrs: (state, action) => {
        state.prs = action.payload;
      },
      gettingPrsRepoLoading: (state, action) => {
        state.prs = action.payload;
      },
    }
    
  });

export const {addRepoPrs} = prReposSlice.actions;

export default prReposSlice.reducer