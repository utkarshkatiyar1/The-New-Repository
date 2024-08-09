'use client'

import { configureStore } from '@reduxjs/toolkit'

import githubAccountReducer from './githubAccounts/githubAccountSlice'
import repoReducer from './githubAccounts/repoSlice'
import groupReducer from './githubAccounts/groupSlice'

export const store = configureStore({
  reducer: {
    githubAccountsData: githubAccountReducer, //it should match with slice name field
    reposData: repoReducer,
    groupData: groupReducer
  },
})