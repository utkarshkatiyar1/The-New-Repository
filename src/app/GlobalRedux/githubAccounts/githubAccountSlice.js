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
      clearGithubAccountsFromStore: (state, action) => {
        state.githubAccounts = [];
      },
      removeGithubAccount: (state, action) => {
        state.githubAccounts = state.githubAccounts.filter(githubAccount => githubAccount.username !== action.payload);
      },
    }
    
  });

export const {addGithubAccounts, clearGithubAccountsFromStore, removeGithubAccount} = githubAccountsSlice.actions;

export default githubAccountsSlice.reducer