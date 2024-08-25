"use client"

import { createSlice } from "@reduxjs/toolkit"



export const repoSlice = createSlice({
    name: 'repos',
    initialState : {
        repos: [],
    },
    reducers: {
      addRepos: (state, action) => {
        state.repos = action.payload;
      },
      deleteRepo: (state, action) => {
        state.repos = state.repos.filter(repo => repo._id !== action.payload);
      },
      
      clearReposFromStore: (state, action) => {
        state.repos = [];
      },

      deleteReposByGroupAndUsername: (state, action) => {
        state.repos = [];
      },
    }
    
  });

export const {addRepos, clearReposFromStore, deleteRepo, deleteReposByGroupAndUsername} = repoSlice.actions;

export default repoSlice.reducer