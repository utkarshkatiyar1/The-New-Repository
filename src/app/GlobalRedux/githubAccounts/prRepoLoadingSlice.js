"use client"

import { createSlice } from "@reduxjs/toolkit"



export const prRepoLoadingSlice = createSlice({
    name: 'prRepoLoading',
    initialState : {
        prRepoLoading: "rest"
    },
    reducers: {
      gettingPrsRepoLoading: (state, action) => {
        state.prRepoLoading = action.payload;
      },
    }
    
  });

export const {gettingPrsRepoLoading} = prRepoLoadingSlice.actions;

export default prRepoLoadingSlice.reducer