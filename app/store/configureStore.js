import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import posts from './modules/posts';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ posts });

const store = configureStore({ reducer, middleware });

export default store;
