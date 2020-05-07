import React, { Component } from 'react';

export default class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 0,
    };

    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
  }

  incrementValue() {
    const { currentValue } = this.state;
    this.setState({ currentValue: currentValue + 1 });
  }

  decrementValue() {
    const { currentValue } = this.state;
    this.setState({ currentValue: currentValue - 1 });
  }

  render() {
    const { currentValue } = this.state;
    return (
      <div>
        <p>
          Current Value:
          {currentValue}
        </p>

        <button type="button" onClick={this.incrementValue}>+</button>
        <button type="button" onClick={this.decrementValue}>-</button>
      </div>
    );
  }
}
