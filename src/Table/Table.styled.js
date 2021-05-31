import styled from 'styled-components'

const Row = styled.div`
display: flex;
color: ${props => props.title ? 'white' : 'darkGrey'};
font-weight: ${props => props.title ? 'bold' : 'regular'};
font-size: ${props => props.title ? '16px' : '12px'};
background-color: ${props => props.oddRow ? '#1F1B24' : '#121212'};
width: 100%
`;

const Cell = styled.div`
line-break: anywhere;
text-align: left;
min-width: 200px;
border: 1px solid #1F1B24;
padding-left: 5px;
`;

const Timestamp = styled(Cell)`
width: 13%;
min-width: 100px;
`;

const FromAddress = styled(Cell)`
width: 20%;`;

const ToAddress = styled(Cell)`
width: 20%;`;

const ValueOfTransaction = styled(Cell)`
width: 13%;`;

const Confirmations = styled(Cell)`
width: 13%;
min-width: 100px;
`;

const Hash = styled(Cell)`
width: 20%;`;

export {
  Row,
  Timestamp,
  FromAddress,
  ToAddress,
  ValueOfTransaction,
  Confirmations,
  Hash
}