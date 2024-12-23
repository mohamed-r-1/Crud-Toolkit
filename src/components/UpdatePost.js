import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from '../redux/postsSlice';

function UpdatePost({ post, setIsEdit, setId, setUpdatedTitle, setUpdatedDescription, setError }) {
  const dispatch = useDispatch();

  const handleUpdatePost = () => {
    const updatedTitle = document.getElementById('updatedTitle').value;
    const updatedDescription = document.getElementById('updatedDescription').value;

    if (updatedTitle.trim() && updatedDescription.trim()) {
      dispatch(updatePost({ id: post.id, title: updatedTitle, description: updatedDescription }));
      setIsEdit(false);
      setId(null);
      setUpdatedTitle('');
      setUpdatedDescription('');
      setError(null); 
    } else {
      setError(
        <p className='alert alert-danger'>
          Please fill in both fields before updating.
        </p>
      );
    }
  };

  return (
    <div>
      <input
        id="updatedTitle"
        type='text'
        defaultValue={post.title}
        placeholder='Updated Title'
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <input
        id="updatedDescription"
        type='text'
        defaultValue={post.description}
        placeholder='Updated Description'
        onChange={(e) => setUpdatedDescription(e.target.value)}
      />
      <button onClick={handleUpdatePost}>Update</button>
    </div>
  );
}

export default UpdatePost;
