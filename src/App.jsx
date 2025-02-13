import { useState } from "react"
import Forms from "./components/Forms"
import ExpenseCard from "./components/ExpenseCard"
import { useExpenseContext } from "./hooks/useExpenseContext"

function App() {
  const {expenses} = useExpenseContext()
  const [budget, setBudget] = useState('')

  console.log(expenses)

  return (
    <main className="px-6 py-5">
      <section className="header mx-5 my-3 text-center mb-10">
          <h1 className="text-xl font-medium">Budget Tracker</h1>
          <p className="text-sm font-light">Track your budget and save more!</p>
      </section>
      
      <Forms budget={budget} setBudget={setBudget} />

      <section className="card bg-gray-50 px-3 py-4 mt-3">
        <h2 className="text-sm font-medium mb-3">List of Expenses</h2>
        
        <div>
          {expenses && expenses.map((expense) =>
            <ExpenseCard 
              key={expense.name}
              name={expense.name} 
              cost={expense.cost} 
            />
          )}
        </div>
      </section>
    </main>
  )
}

export default App
