import React, { Component } from 'react';
import TodoList from './TodoList';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: '',
      items: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ currentItem: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      currentItem: '',
      items: [...this.state.items, this.state.currentItem],
    });
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input value={this.state.currentItem} onChange={this.onChange} />
            <button>Submit</button>
          </form>
        </div>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}
