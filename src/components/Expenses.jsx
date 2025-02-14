import ExpenseBreakdown from "./ExpenseBreakdown";

const Expenses = ({expenses, breakdown}) => {
    const needs = expenses.filter((expense) => expense.category === 'needs')
    const wants = expenses.filter((expense) => expense.category === 'wants')


    return ( 
        <section>
            <h2 className="text-sm font-semibold text-gray-900 mt-5 mb-3">List of Expenses</h2>
            <div className="card bg-gray-50 px-3 py-4">
                <div className="mb-5">
                    <ExpenseBreakdown 
                        expenseCategory={'Needs'} 
                        expenses={needs}
                        reserved={breakdown.needs}
                    />
                </div>
                <div>
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