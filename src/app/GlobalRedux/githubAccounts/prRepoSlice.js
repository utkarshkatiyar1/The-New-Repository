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
      clearRepoPrsFromStore: (state, action) => {
        state.prs = [];
      },
      
    }
    
  });

export const {addRepoPrs, clearRepoPrsFromStore} = prReposSlice.actions;

export default prReposSlice.reducer