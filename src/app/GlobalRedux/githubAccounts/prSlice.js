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
    }
    
  });

export const {addPrs} = prsSlice.actions;

export default prsSlice.reducer