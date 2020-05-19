import React, { Component } from 'react';
import postsService from '../../services/posts';
import PostComponent from '../components/Post';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      title: '',
      body: '',
    };

    this.fetchNewPost = this.fetchNewPost.bind(this);
  }

  componentDidMount() {
    this.fetchNewPost();
  }

  async fetchNewPost() {
    this.setState({ loading: true });
    const newPost = await postsService.getRandomPost();
    this.setState({ title: newPost.title, body: newPost.body, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <p>Loading....</p>;
    }

    return (
      <PostComponent
        title={this.state.title}
        body={this.state.body}
        onNewPost={this.fetchNewPost}
      />
    );
  }
}
