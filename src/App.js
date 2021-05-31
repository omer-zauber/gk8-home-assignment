import './App.css';
import { Component } from 'react';
import Results from './Results/Results';
import QueryAddress from './QueryAddress/QueryAddress'

export default class App extends Component {
  state = {
    queriedAddress: ''
  }

  submitQueryAddress = (queryStringInput) => {
    this.setState({queriedAddress: queryStringInput})
  }
  render() {
    return (
    <div className="App">
      <QueryAddress submitQueryAddress={this.submitQueryAddress} />
      <Results queriedAddress={this.state.queriedAddress}/>
    </div>
  );
}
};

