import {createContext, useReducer} from 'react'

export const ExpenseContext = createContext()

export const habitReducer = (state, action) =>{
    switch(action.type){
        case 'SET_EXPENSES':
            return{
                expenses: action.payload
            }
        case 'CREATE_EXPENSE':
            return{
                expenses: [action.payload, ...state.expenses]
            }
        default:
            return state
    }
}

export const ExpenseContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(habitReducer, {
        expenses: []
    })

    return (
        <ExpenseContext.Provider value={{...state, dispatch}}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContextProvider;