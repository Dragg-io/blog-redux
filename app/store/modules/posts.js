import { combineReducers } from '@reduxjs/toolkit';
import createAsyncSlice from '../helper/createAsyncSlice';

const posts = createAsyncSlice({
  name: 'posts',
  fetchConfig: () => ({
    url: `https://www.wp.grimoria.com.br/wp-json/wp/v2/posts/`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});

const post = createAsyncSlice({
  name: 'post',
  fetchConfig: (id) => ({
    url: `https://www.wp.grimoria.com.br/wp-json/wp/v2/posts/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});

export const fetchPosts = posts.asyncAction;

export const fetchPost = post.asyncAction;

const reducer = combineReducers({
  posts: posts.reducer,
  post: post.reducer,
});

export default reducer;
