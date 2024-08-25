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
      clearGroupFromStore: (state, action) => {
        state.group = {};
      },
      deleteGroupAndRepos: (state, action) => {
        state.group = {};
      },
    }
    
  });

export const {addGroup, clearGroupFromStore, deleteGroupAndRepos} = groupSlice.actions;

export default groupSlice.reducer