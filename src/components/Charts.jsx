import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Charts = ({ transactions }) => {
  const categories = [...new Set(transactions.map((t) => t.category))];
  const incomeData = categories.map((category) =>
    transactions.filter((t) => t.type === 'income' && t.category === category).reduce((sum, t) => sum + t.amount, 0)
  );
  const expenseData = categories.map((category) =>
    transactions.filter((t) => t.type === 'expense' && t.category === category).reduce((sum, t) => sum + t.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Expenses',
        data: expenseData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h3 className="card-title text-center mb-3">Income vs Expenses</h3>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default Charts;
