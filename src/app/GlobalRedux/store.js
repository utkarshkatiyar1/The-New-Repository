'use client'

import { configureStore } from '@reduxjs/toolkit'

import githubAccountReducer from './githubAccounts/githubAccountSlice'

export const store = configureStore({
  reducer: {
    githubAccountsData: githubAccountReducer //it should match with slice name field
  },
})