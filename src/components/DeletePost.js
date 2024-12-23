import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/postsSlice';

function DeletePost({ postId }) {
  const dispatch = useDispatch();

  const handleDeletePost = () => {
    dispatch(deletePost(postId));
  };

  return (
    <button onClick={handleDeletePost}>Delete</button>
  );
}

export default DeletePost;
