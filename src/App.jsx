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
    <main className="px-6 py-5">
      <section className="header mx-5 my-3 text-center mb-10">
          <h1 className="text-xl font-medium">Budget Tracker</h1>
          <p className="text-sm font-light">Track your budget and save more!</p>
      </section>

      <Budget setBudget={setBudget} breakdown={breakdown}/>
      <Forms />
      <Expenses expenses={expenses} breakdown={breakdown}/>
    </main>
  )
}

export default App
