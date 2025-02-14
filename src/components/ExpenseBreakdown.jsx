import ExpenseCard from "./ExpenseCard";
import {useExpenseContext} from "../hooks/useExpenseContext"

const ExpenseBreakdown = ({expenseCategory, expenses, reserved}) => {
    const {dispatch} = useExpenseContext()
    const needs = expenses

    const handleDelete = (name) =>{
        expenses = expenses.filter((e) => e.name !== name)
        dispatch({type: 'DELETE_EXPENSE', payload: name})
    }

    const total = expenses.reduce((acc, expense) => {
        return acc += parseFloat(expense.cost)
    }, 0)

    return ( 
        <>
            <h3 className="text-sm font-medium text-gray-800 mb-1">{expenseCategory}</h3>
            <div className="mb-5">
                {expenses.length !== 0 ? (expenses.map((expense) =>
                <ExpenseCard 
                key={expense.name}
                name={expense.name} 
                cost={expense.cost} 
                handleDelete={handleDelete}
                />
            )) : (
                <small className="font-light text-xs">No expenses yet. Add your {expenseCategory}</small>
            )}
            </div>

            <div className={`${expenses.length === 0 && 'hidden'}`}>
                <div className="mb-0.5 flex justify-between text-xs">
                    <span className="me-1 font-light">Total cost: </span>
                    <span className={`font-medium ${reserved < total && 'text-red-600'}`}>{`₱ ${total}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="me-1 font-light">Remaining: </span>
                    <span className={`font-medium ${reserved >= total ? 'text-green-700' : 'text-red-600'}`}>{`₱ ${reserved - total}`}</span>
                </div>
            </div>
        </>
     );
}
 
export default ExpenseBreakdown;