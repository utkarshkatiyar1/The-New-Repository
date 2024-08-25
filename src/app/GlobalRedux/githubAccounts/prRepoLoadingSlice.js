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
      clearPrsRepoLoadingFromStore: (state, action) => {
        state.prRepoLoading = "rest";
      },
    }
    
  });

export const {gettingPrsRepoLoading, clearPrsRepoLoadingFromStore} = prRepoLoadingSlice.actions;

export default prRepoLoadingSlice.reducer