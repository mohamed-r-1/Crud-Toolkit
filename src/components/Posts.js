import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddPost from './AddPost';
import UpdatePost from './UpdatePost';
import DeletePost from './DeletePost';

function Posts() {
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [error, setError] = useState(null);

  const posts = useSelector(state => state.posts.items);

  return (
    <div>
      <AddPost setError={setError} />
      {error}

      <div className='posts'>
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className='post'>
              <h2>{post.title}</h2>
              <p>{post.description}</p>

              {!isEdit || id !== post.id ? (
                <>
                  <button
                    onClick={() => {
                      setIsEdit(true);
                      setId(post.id);
                      setUpdatedTitle(post.title);
                      setUpdatedDescription(post.description);
                    }}
                  >
                    Edit
                  </button>
                  <DeletePost postId={post.id} />
                </>
              ) : null}

              {isEdit && id === post.id && (
                <UpdatePost
                  post={post}
                  setIsEdit={setIsEdit}
                  setId={setId}
                  setUpdatedTitle={setUpdatedTitle}
                  setUpdatedDescription={setUpdatedDescription}
                  setError={setError}
                />
              )}
            </div>
          ))
        ) : (
          <p className='alert alert-danger'>There are no Posts.</p>
        )}
      </div>
    </div>
  );
}

export default Posts;
