import React, { useState, useContext } from 'react'
import "./addTransaction.css"
import {GlobalContext} from "../../context/GlobalState"



export default function AddTransaction() {

    const {addTransaction}=useContext(GlobalContext);

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");


    const addTrans = (e) => {
        e.preventDefault();
      

        let transaction={
            id: Math.floor(Math.random()*100000000),
            text: text,
            amount: +amount
        }

        addTransaction(transaction);

    }



    return (
        <div className="transaction">
            <h4>Add new transaction</h4>

            <form>
                <label htmlFor="trans-text">Text</label><br />
                <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} className="inputs" placeholder="Enter text" /><br /><br />

                <label htmlFor="amount">Amount</label><br />
                <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} className="inputs" placeholder="Enter amount" /><br /><br />

                <button onClick={addTrans} className="btn">Add Transaction <span>👍</span></button>
            </form>
        </div>
    )
}
