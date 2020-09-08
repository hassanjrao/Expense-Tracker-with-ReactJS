import React, { useContext } from 'react'
import "./history.css"
import Transaction from "./Transaction"

import {GlobalContext} from "../../context/GlobalState"

export default function History() {

    const { transactions } = useContext(GlobalContext)
    return (
        <div className="history">
            <h4>History</h4>

            {
                transactions.map(tranasaction => (
                    <Transaction tranasaction={tranasaction} key={tranasaction.id}/>
                ))
            }
        </div>
    )
}
