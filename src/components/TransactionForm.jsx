import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TransactionForm = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: Date.now(),
      amount: +amount,
      category,
      type,
      date: new Date().toLocaleDateString(),
    };
    addTransaction(transaction);
    setAmount('');
    setCategory('');
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title text-center mb-3">Add Transaction</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Add Transaction
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default TransactionForm;
