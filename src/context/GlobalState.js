import React, { createContext, useReducer }  from "react";
import {AppReducer} from "./AppReducer"

const intialState={
    transactions:[]
}

export const GlobalContext= createContext(intialState);

export const GlobalProvider=({children})=>{

    const [state, dispatch]=useReducer(AppReducer, intialState);

    const delTransaction=(id)=>{
        dispatch({
            type: "DEL_TRANSACTION",
            payload: id
        })
    }

    const addTransaction=(transaction)=>{
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            delTransaction,
            addTransaction
        }}>
        {children}
        </GlobalContext.Provider>
    )

}
