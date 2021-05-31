import axios from 'axios';
import React, { Component } from 'react';
import {   
  Row,
  Timestamp,
  FromAddress,
  ToAddress,
  ValueOfTransaction,
  Confirmations,
  Hash 
} from '../Table/Table.styled';

export default class Results extends Component {
  state = {
    result: []
  }

  componentDidUpdate(prevProps) {
    if (prevProps.queriedAddress !== this.props.queriedAddress) this.getQueryResults(this.props.queriedAddress)
  }

  getQueryResults = (queriedAddress) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${queriedAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`)
      .then (response => {
        if ( Array.isArray(response.data.result)) return this.setState({result: response.data.result} )
      })
      .catch (e => console.log(e));
  }
    
  render() {
    const renderTable = this.state.result.length ?
     this.state.result.map(({ timeStamp, from, to, value, confirmations, hash }={}, index) =>  
      <Row key={index} oddRow={index%2}>
          <Timestamp> {timeStamp} </Timestamp>
          <FromAddress> {from} </FromAddress>
          <ToAddress> {to} </ToAddress>
          <ValueOfTransaction>{value} </ValueOfTransaction>
          <Confirmations>{confirmations} </Confirmations>
          <Hash> {hash} </Hash> 
        </Row>
        )
        : 
        <p>Please query a valid address. an example would be: 0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae </p>


    return (
      <div className='container table-container'>
        <Row title>
          <Timestamp>Time Stamp</Timestamp>
          <FromAddress>From</FromAddress>
          <ToAddress>To</ToAddress>
          <ValueOfTransaction> Value </ValueOfTransaction>
          <Confirmations>Confirmations </Confirmations>
          <Hash>Hash </Hash> 
        </Row>
        {renderTable}
      </div>
    )
  }
}
