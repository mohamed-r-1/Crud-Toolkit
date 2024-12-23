import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice';

function AddPost({ setError }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddPost = () => {
    if (title.trim() && description.trim()) {
      dispatch(addPost({ id: Date.now(), title, description }));
      setTitle('');
      setDescription('');
      setError(null); 
    } else {
      setError(
        <p className='alert alert-danger'>
          Please fill in both fields before adding a post.
        </p>
      );
    }
  };

  return (
    <div className='form'>
      <input
        type='text'
        value={title}
        placeholder='Enter Post Title'
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        value={description}
        placeholder='Enter Post Description'
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
}

export default AddPost;
