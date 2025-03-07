import React from 'react';

const Balance = ({ transactions }) => {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title text-center mb-3">Balance: ${balance}</h3>
        <p className="text-muted text-center">Total Income: ${totalIncome}</p>
        <p className="text-muted text-center">Total Expenses: ${totalExpenses}</p>
      </div>
    </div>
  );
};

export default Balance;
