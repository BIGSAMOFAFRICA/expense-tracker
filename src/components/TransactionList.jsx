import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TransactionList = ({ transactions }) => {
  return (
    <ListGroup className="mb-4">
      {transactions.map((transaction) => (
        <ListGroup.Item key={transaction.id}>
          {transaction.date} - {transaction.category}: ${transaction.amount} ({transaction.type})
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TransactionList;