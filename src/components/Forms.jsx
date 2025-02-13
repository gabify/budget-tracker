import { useState } from "react";
import { useExpenseContext } from "../hooks/useExpenseContext";

const Forms = ({budget, setBudget}) => {
    const {dispatch} = useExpenseContext()
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [isNeed, setIsNeed] = useState(true)

    const handleSelect = () =>{
        if(isNeed){
            setIsNeed(false)
        }else{
            setIsNeed(true)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const expense = {
            name,
            cost,
            category: isNeed ? 'needs' : 'wants'
        }

        dispatch({type: 'CREATE_EXPENSE', payload: expense})
        setName('')
        setCost('')

        
    }
    
    return ( 
        <>
            <section className="card bg-gray-50 px-3 py-4">
                <div className="budget-form flex flex-col mb-5">
                    <label htmlFor="budget" className="form-label">Enter your budget</label>
                    <input 
                        type="text" 
                        className="input-text"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="expense-form">
                        <p className="text-sm font-semibold text-gray-900 mb-5">Add your expenses here</p>
                        <div className="flex flex-col mb-3">
                            <label htmlFor="expense-name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                className="input-text"
                                id="expense-name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mb-3">
                            <label htmlFor="expense-cost" className="form-label">Cost</label>
                            <input 
                                type="text" 
                                className="input-text"
                                id="expense-cost"
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <p className="form-label">Select category</p>
                            <div className="flex justify-evenly">
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        id="needs"
                                        checked={isNeed} 
                                        onChange={handleSelect}
                                    />
                                    <label htmlFor="needs" className="text-sm font-light ms-1">Needs</label>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        type="radio" 
                                        id="wants" 
                                        checked={!isNeed} 
                                        onChange={handleSelect}
                                    />
                                    <label htmlFor="wants" className="text-sm font-light ms-1">Wants</label>
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="bg-yellow-500 px-3 py-2 rounded-md text-sm font-medium block mx-auto"
                        >
                            Add Expense
                        </button>
                    </div>
                </form>
            </section>
        </>
     );
}
 
export default Forms;