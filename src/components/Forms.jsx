import { useState } from "react";
import { useExpenseContext } from "../hooks/useExpenseContext";
import {FaCircleExclamation} from "react-icons/fa6"

const Forms = () => {
    const {dispatch} = useExpenseContext()
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [isNeed, setIsNeed] = useState(true)
    const [error, setError] = useState(null)

    const handleSelect = () =>{
        if(isNeed){
            setIsNeed(false)
        }else{
            setIsNeed(true)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setError(null)

        try{
            if(name === '' || cost === ''){
                throw Error('All fields are required!')
            }

            if(isNaN(cost)){
                throw Error('Invalid input. Please provide a number')
            }

            const expense = {
                name,
                cost,
                category: isNeed ? 'needs' : 'wants'
            }
    
            dispatch({type: 'CREATE_EXPENSE', payload: expense})
            setName('')
            setCost('')
        }catch(error){
            setError(error.message)
        }
    }
    
    return ( 
        <>
            <h2 className="text-sm font-semibold text-gray-900 mt-5 mb-3">Add your expenses here</h2>
            <form onSubmit={handleSubmit} className="card bg-gray-50 lg:bg-gray-100 px-3 py-4">
                <div className="expense-form">
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
                                    className="form-radio"
                                />
                                <label htmlFor="needs" className="text-sm font-light ms-1">Needs</label>
                            </div>
                            <div className="flex items-center">
                                <input 
                                    type="radio" 
                                    id="wants" 
                                    checked={!isNeed} 
                                    onChange={handleSelect}
                                    className="form-radio"
                                />
                                <label htmlFor="wants" className="text-sm font-light ms-1">Wants</label>
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="bg-yellow-500 px-3 py-2 rounded-md text-sm font-medium block mx-auto cursor-pointer hover:bg-yellow-400"
                    >
                        Add Expense
                    </button>
                </div>

                {error && (
                    <div className="font-semibold mt-4 text-red-700 bg-red-200 px-3 py-5 rounded-md flex justify-center items-center">
                        <FaCircleExclamation className="me-1 text-md" />
                        <p className="text-xs">{error}</p> 
                    </div>
                )}
            </form>
        </>
     );
}
 
export default Forms;