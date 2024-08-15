'use client'

import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default localStorage

import githubAccountReducer from './githubAccounts/githubAccountSlice'
import repoReducer from './githubAccounts/repoSlice'
import groupReducer from './githubAccounts/groupSlice'
import prRepoReducer from './githubAccounts/prRepoSlice'
import prReducer from './githubAccounts/prSlice'
import prRepoLoadingSlice from './githubAccounts/prRepoLoadingSlice';

// Persist config
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  githubAccountsData: githubAccountReducer, //it should match with slice name field
    reposData: repoReducer,
    groupData: groupReducer,
    prRepoData: prRepoReducer,
    prData: prReducer,
    prRepoLoadingData: prRepoLoadingSlice,
  // add other reducers here
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);
export default store;