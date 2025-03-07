import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import Charts from "./components/Charts";
import "./App.css"; 

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="app-container">
      <div className="content-box">
        <h1 className="text-center mb-4">Expense Tracker</h1>
        <Balance transactions={transactions} />
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
        <Charts transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
