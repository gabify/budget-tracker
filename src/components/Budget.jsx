const Budget = ({setBudget, breakdown}) => {
    
    return ( 
        <section className="card bg-gray-50 px-3 py-4">
            <div className="flex flex-col mb-3">
                <label htmlFor="budget" className="form-label">Enter your budget</label>
                <input 
                    type="text" 
                    className="input-text"
                    onChange={(e) => setBudget(e.target.value)}
                />
            </div>
            <p className="text-sm font-semibold text-gray-900">Budget breakdown</p>
            <div className="mt-2 text-xs mb-1">
                <span className="font-light me-1">Needs (50%): </span>
                <span className="font-medium">P {breakdown.needs}</span>
            </div>
            <div className="text-xs mb-1">
                <span className="font-light me-1">Wants (30%): </span>
                <span className="font-medium">P {breakdown.wants}</span>
            </div>
            <div className="text-sm mb-1">
                <span className="font-light me-1">Savings: (20%): </span>
                <span className="font-medium">P {breakdown.savings}</span>
            </div>
      </section>
     );
}
 
export default Budget;