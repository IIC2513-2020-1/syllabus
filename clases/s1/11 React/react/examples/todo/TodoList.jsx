import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

export default function TodoList(props) {
  return (
    <ul>
      { props.items.map(item => <li key={`${faker.random.uuid()}`}>{item}</li>) }
    </ul>
  );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
