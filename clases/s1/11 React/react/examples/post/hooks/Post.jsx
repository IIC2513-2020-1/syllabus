import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import postService from '../../services/posts';

export default function Post({ name }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState();
  const fetchNewPost = useCallback(async () => {
    setLoading(true);
    const newPost = await postService.getRandomPost();
    setPost(newPost);
    setLoading(false);
  });

  useEffect(() => { fetchNewPost(); });

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={fetchNewPost}>Load post</button>
      { post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
};
