"use client"

import { createSlice } from "@reduxjs/toolkit"



export const githubAccountsSlice = createSlice({
    name: 'githubAccounts',
    initialState : {
        githubAccounts: [],
    },
    reducers: {
      addGithubAccounts: (state, action) => {
        state.githubAccounts = action.payload;
      },
    }
    
  });

export const {addGithubAccounts} = githubAccountsSlice.actions;

export default githubAccountsSlice.reducer