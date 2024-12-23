import { createSlice } from "@reduxjs/toolkit";
import { bake_cookie, read_cookie } from 'sfcookies';

const savedPosts = read_cookie('posts');
let initialPosts;

try {
  initialPosts = savedPosts ? JSON.parse(savedPosts) : [];
} catch (error) {
  initialPosts = [];
  console.error("Failed to parse posts from cookies:", error);
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: initialPosts
  },
  reducers: {
    addPost: function(state, action) {
      state.items.push(action.payload);
      bake_cookie('posts', JSON.stringify(state.items));
    },
    deletePost: function(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      bake_cookie('posts', JSON.stringify(state.items));
    },
    updatePost: function(state, action) {
      state.items = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.title, description: action.payload.description }
          : item
      );
      bake_cookie('posts', JSON.stringify(state.items));
    }
  }
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;
