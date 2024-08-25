"use client"

import { createSlice } from "@reduxjs/toolkit"



export const prsSlice = createSlice({
    name: 'prs',
    initialState : {
        prs: [],
    },
    reducers: {
      addPrs: (state, action) => {
        state.prs = action.payload;
      },
      clearPrsFromStore: (state, action) => {
        state.prs = [];
      },
    }
    
  });

export const {addPrs, clearPrsFromStore} = prsSlice.actions;

export default prsSlice.reducer