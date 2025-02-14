import { useExpenseContext } from "../hooks/useExpenseContext";
import ExpenseBreakdown from "./ExpenseBreakdown";

const Expenses = ({expenses, breakdown}) => {
    const {dispatch} = useExpenseContext()
    const needs = expenses.filter((expense) => expense.category === 'needs')
    const wants = expenses.filter((expense) => expense.category === 'wants')

    const handleClick = () =>{
        dispatch({type: 'SET_EXPENSES', payload: []})
        needs = []
        wants = []
    }

    return ( 
        <section>
            <div className="flex justify-between mt-5 mb-3 items-baseline">
                <h2 className="text-sm font-semibold text-gray-900">List of Expenses</h2>
                <p
                    className="text-xs text-yellow-500 underline underline-offset-2 cursor-pointer"
                    onClick={handleClick}
                >
                    Reset
                </p>
            </div>
            <div className="card bg-gray-50 lg:bg-gray-100 px-3 py-4 md:grid md:grid-cols-4 md:gap-6">
                <div className="md:col-span-2 md:mb-0 mb-5">
                    <ExpenseBreakdown 
                        expenseCategory={'Needs'} 
                        expenses={needs}
                        reserved={breakdown.needs}
                    />
                </div>
                <div className="md:col-span-2">
                    <ExpenseBreakdown 
                        expenseCategory={'Wants'} 
                        expenses={wants} 
                        reserved={breakdown.wants}
                    />
                </div>
            </div>
      </section>
     );
}
 
export default Expenses;