import React from "react";

export default class WeightTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert('A weight was inputted: ' + this.state.value);
    //event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="int" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="calculate" value="Calculate" />
      </form>
    );
  }
}