import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TransactionList = ({ transactions }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title text-center mb-3">Transaction List</h3>
        <ListGroup>
          {transactions.map((transaction) => (
            <ListGroup.Item key={transaction.id}>
              {transaction.date} - {transaction.category}: ${transaction.amount} ({transaction.type})
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default TransactionList;
