import React from 'react';

class NumberList extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];

    const numberItems = [];
    for (let i = 0; i < numbers.length; i++) {
      numberItems.push(<li key={i}>{numbers[i]}</li>);
    }

    return (
      <div>
        <h2>Number List</h2>
        <ul>{numberItems}</ul>
      </div>
    );
  }
}

export default NumberList;
