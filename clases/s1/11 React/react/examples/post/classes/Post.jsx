import React, { Component } from 'react';
import PropTypes from 'prop-types';
import postService from '../../services/posts';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      post: null,
    };

    this.fetchNewPost = this.fetchNewPost.bind(this);
  }

  componentDidMount() {
    this.fetchNewPost();
  }

  async fetchNewPost() {
    this.setState({ loading: true });
    const newPost = await postService.getRandomPost();
    this.setState({ post: newPost, loading: false });
  }

  render() {
    const { loading } = this.state;
    if (loading) return <p>Loading...</p>;

    const { post } = this.state;
    const { name } = this.props;
    return (
      <div>
        <p>{name}</p>
        <button type="button" onClick={this.fetchNewPost}>Load post</button>
        { post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        )}
      </div>
    );
  }
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
};
