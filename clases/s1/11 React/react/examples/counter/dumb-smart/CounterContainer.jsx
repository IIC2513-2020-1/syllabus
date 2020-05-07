import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from '../components/Counter';

export default class CounterContainer extends Component {
  constructor(props) {
    super(props);
    const counter = Number(props.serverData.initialValue);
    this.state = {
      counter,
    };

    this.addOneToCounter = this.addOneToCounter.bind(this);
    this.minusOneToCounter = this.minusOneToCounter.bind(this);
  }

  addOneToCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  minusOneToCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  }

  render() {
    const { counter } = this.state;
    return (
      <Counter
        counterValue={counter}
        decreaseCounter={this.minusOneToCounter}
        increaseCounter={this.addOneToCounter}
      />
    );
  }
}

CounterContainer.propTypes = {
  serverData: PropTypes.shape({
    initialValue: PropTypes.string.isRequired,
  }).isRequired,
};
