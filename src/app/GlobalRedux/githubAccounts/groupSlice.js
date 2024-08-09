"use client"

import { createSlice } from "@reduxjs/toolkit"



export const groupSlice = createSlice({
    name: 'group',
    initialState : {
        group: {}
    },
    reducers: {
      addGroup: (state, action) => {
        state.group = action.payload;
      },
    }
    
  });

export const {addGroup} = groupSlice.actions;

export default groupSlice.reducer