import React, { useContext } from 'react'
import "./history.css"

import {GlobalContext} from "../../context/GlobalState"



export default function Transaction({ tranasaction }) {

    const { delTransaction } = useContext(GlobalContext);


    return (


        <div className="history-card" >
            <div className="card-text">
                <p>{tranasaction.text}</p>
                <p>{tranasaction.amount}</p>
            </div>

            <button onClick={() => delTransaction(tranasaction.id)} className="del-btn">X</button>
        </div>



    )
}
