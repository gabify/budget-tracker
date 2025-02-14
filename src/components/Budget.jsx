import { useState } from "react";

const Budget = ({setBudget, breakdown}) => {
    const [error, setError] = useState(null)

    const handleInput = (e) => {
        if(isNaN(e.target.value)){
            setError('Invalid input. Please provide a number')
        }else{
            setBudget(e.target.value)
            setError('')
        }
    }


    return ( 
        <>
            <h2 className="text-sm font-semibold text-gray-900 mt-5 mb-3">Add your budget here</h2>
            <div className="card bg-gray-50 lg:bg-gray-100 px-3 py-4">
                <div className="flex flex-col mb-3">
                    <label htmlFor="budget" className="form-label">Enter your budget</label>
                    <input 
                        type="text" 
                        className="input-text"
                        onChange={handleInput}
                    />
                    {error && (
                        <small className="text-red-600 font-semibold">{error}</small>
                    )}
                </div>
                <p className="text-sm font-semibold text-gray-900">Budget breakdown</p>
                <div className="mt-2 text-xs mb-1">
                    <span className="font-light me-1">Needs (50%): </span>
                    <span className="font-medium">{breakdown.needs === 0 ? '' : `₱ ${breakdown.needs.toFixed(2)}`}</span>
                </div>
                <div className="text-xs mb-1">
                    <span className="font-light me-1">Wants (30%): </span>
                    <span className="font-medium">{breakdown.wants === 0 ? '' : `₱ ${breakdown.wants.toFixed(2)}`}</span>
                </div>
                <div className="text-sm mb-1">
                    <span className="font-light me-1">Savings: (20%): </span>
                    <span className="font-medium">{breakdown.savings === 0 ? '' : `₱ ${breakdown.savings.toFixed(2)}`}</span>
                </div>

                <div className="py-2 text-xs font-light">
                    <p>
                        This app use the  <span className="font-medium">50/30/20 rule</span>. It divides your budget into three categories:
                    </p>
                    <ul className="list-disc ms-6 mt-0.5">
                        <li><span className="font-medium">50% Needs</span> – Essential expenses.</li>
                        <li><span className="font-medium">30% Wants</span> – Non-essential expenses.</li>
                        <li><span className="font-medium">20% Savings</span> – Savings and investments.</li>
                    </ul>
                </div>
            </div>
      </>
     );
}
 
export default Budget;