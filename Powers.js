import React from 'react';

class PowersOfTen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      powers: []
    };
  }

  componentDidMount() {
    this.calculatePowers();
  }

  calculatePowers() {
    const powers = [];
    for (let i = 1; i <= 10; i++) {
      const power = Math.pow(10, i);
      powers.push(power);
    }
    this.setState({ powers });
  }

  render() {
    const { powers } = this.state;
    return (
      <div>
        <h2>Powers of 10</h2>
        <ul>
          {powers.map((power, index) => (
            <li key={index}>{power}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PowersOfTen;
