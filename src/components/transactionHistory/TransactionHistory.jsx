import React, { useContext } from 'react'
import "./transactionHistory.css"
import { GlobalContext } from "../context/GlobalState";

export default function TransactionHistory() {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((total, num) => (total + num), 0);

    const expense = amounts.filter(item => item < 0).reduce((total, num) => (total + num), 0);

    return (
        <div className="income-expense">
            <div className="income">
                <h4>INCOME</h4>
                <h3>${income}</h3>
            </div>
            <div className="expense">
                <h4>EXPENSE</h4>
                <h3>${expense}</h3>
            </div>
        </div>
    )
}
