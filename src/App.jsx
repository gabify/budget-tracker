import Forms from "./components/Forms"
import { useExpenseContext } from "./hooks/useExpenseContext"
import Budget from "./components/Budget"
import Expenses from "./components/Expenses"
import { useEffect, useState } from "react"

function App() {
  const {expenses} = useExpenseContext()
  const [budget, setBudget] = useState(0)
    const [breakdown, setBreakdown] = useState({
        needs: 0,
        wants: 0,
        savings: 0
    })

    useEffect(() =>{
        const breakdown = {
            needs: budget * 0.5,
            wants: budget * 0.3,
            savings: budget * 0.2
        }

        setBreakdown(breakdown)

    }, [budget])

  console.log(expenses)

  return (
    <main className="px-6 py-5 max-w-4xl mx-auto lg:bg-gray-50 lg:my-10 lg:rounded-lg lg:shadow-md">
      <section className="header mx-5 my-3 text-center mb-10">
          <h1 className="text-xl font-medium">Budget Tracker</h1>
          <p className="text-sm font-light">Track your budget and save more!</p>
      </section>

      <div className="md:grid md:grid-cols-2 gap-6">
        <div>
          <Budget 
                setBudget={setBudget} 
                breakdown={breakdown}
            />
        </div>
        <div>
          <Forms />
        </div>
      </div>
      <Expenses 
        expenses={expenses} 
        breakdown={breakdown}
      />

      <div className="my-3 text-center">
        <span className="text-xs font-semibold me-1">
          Designed and developed by
        </span>
        <span>
          <a 
            href="https://github.com/gabify"
            target="_blank"
            className="text-yellow-400 text-sm font-semibold underline underline-offset-3"
          >
            Gabify
          </a>
        </span>
      </div>
    </main>
  )
}

export default App
