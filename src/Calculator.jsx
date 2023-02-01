import React from "react";

/**
 * Function to calculate result of operation
 * @param {("add"|"subtract"|"multiply"|"divide")} operation type of calculation to perform
 * @param {Number} firstNumber value of first input field
 * @param {Number} secondNumber value of second input field
 * @returns {String} result of calculation as a string
 */
const calculate = (operation, firstNumber, secondNumber) => {
  let result = null;
  switch (operation) {
    case "add":
      result = firstNumber + secondNumber;
      return `Result of Addition:\n${firstNumber} + ${secondNumber} = ${result}`;
    case "subtract":
      result = firstNumber - secondNumber;
      return `Result of Subtraction:\n${firstNumber} - ${secondNumber} = ${result}`;
    case "multiply":
      result = firstNumber * secondNumber;
      return `Result of Multiplication:\n${firstNumber} X ${secondNumber} = ${result}`;
    case "divide":
      result = firstNumber / secondNumber;
      return `Result of Division:\n${firstNumber} ÷ ${secondNumber} = ${result}`;
    default:
      return "Unknown operation";
  }
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstNumber: 0, secondNumber: 0 };
  }

  updateFirstNumber = (event) => {
    this.setState({ firstNumber: Number(event.target.value) });
  };

  updateSecondNumber = (event) => {
    this.setState({ secondNumber: Number(event.target.value) });
  };

  add = () => {
    this.props.updateResult(
      calculate("add", this.state.firstNumber, this.state.secondNumber)
    );
  };

  subtract = () => {
    this.props.updateResult(
      calculate("subtract", this.state.firstNumber, this.state.secondNumber)
    );
  };

  multiply = () => {
    this.props.updateResult(
      calculate("multiply", this.state.firstNumber, this.state.secondNumber)
    );
  };

  divide = () => {
    this.props.updateResult(
      calculate("divide", this.state.firstNumber, this.state.secondNumber)
    );
  };

  render() {
    const rowStyles = {
      display: "flex",
      width: "30%",
      justifyContent: "space-around",
      margin: "0.5rem 0",
    };

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={rowStyles}>
          <label htmlFor="firstNumber">First Number:</label>
          <input
            type="number"
            id="firstNumber"
            onChange={this.updateFirstNumber}
          />
        </div>
        <div style={rowStyles}>
          <label htmlFor="secondNumber">Second Number:</label>
          <input
            type="number"
            id="secondNumber"
            onChange={this.updateSecondNumber}
          />
        </div>
        <div style={rowStyles}>
          <button onClick={this.add}>+</button>
          <button onClick={this.subtract}>-</button>
          <button onClick={this.multiply}>X</button>
          <button onClick={this.divide}>&divide;</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
