import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <div>
      <button onClick={props.onNewPost}>Load post</button>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onNewPost: PropTypes.func.isRequired,
};

