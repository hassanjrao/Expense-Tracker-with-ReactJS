import React, {useContext} from 'react'
import {GlobalContext} from "../../context/GlobalState"

export default function Balance() {

  const {transactions}=useContext(GlobalContext)

 
  const amounts = transactions.map(transaction => transaction.amount);

  const income= amounts.filter(item=>item>0).reduce((total,num)=>(total+num),0);

  const expense=amounts.filter(item=>item<0).reduce((total,num)=>(total+num),0);


  const balance=income+expense;
 
  return (
    <div className="balance">
      <h5>YOUR BALANCE</h5>
      <h2>${balance}</h2>
    </div>
  )
}
