import React from 'react';
import './App.css';
import Header from "./components/header/Header"
import Balance from "./components/balance/Balance"
import TransactionHistory from "./components/transactionHistory/TransactionHistory"
import History from "./components/history/History"
import AddTransaction from "./components/addTransaction/AddTransaction"
import {GlobalProvider} from "./components/context/GlobalState"



function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <Header/>
        <Balance/>
        <TransactionHistory/>
        <History/>
        <AddTransaction/>
      </GlobalProvider>

    </div>
  );
}

export default App;
