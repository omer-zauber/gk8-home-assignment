import React, { Component } from 'react'

export default class QueryAddress extends Component {
  state = {
    queryStringInput: ''
  }
  
  handleChange = (event) => {
    this.setState({queryStringInput: event.target.value});

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitQueryAddress(this.state.queryStringInput)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="query-form">
        <label>
          Query Address:
          <input type="text" value={this.state.queryStringInput} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Query" />
      </form>
    )
  }
}
