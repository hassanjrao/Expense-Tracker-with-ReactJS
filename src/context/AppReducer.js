export const AppReducer = (state, action) => {

    switch (action.type) {
        case "DEL_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter((tranasaction => tranasaction.id !== action.payload))
            }

        case "ADD_TRANSACTION":
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }


        default:
            return state;
    }

}