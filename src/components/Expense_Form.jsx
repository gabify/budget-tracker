const Expense_Form = () => {
    return ( 
        <div>
            <p className='text-md text-gray-800 mb-4'>New Expenditure</p>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label text-sm">Name</label>
                    <input 
                        type= 'text'
                        name="name" 
                        id="name" 
                        className="form-control form-control-default"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label text-sm">Description</label>
                    <input 
                        type= 'text'
                        name="name" 
                        id="name" 
                        className="form-control form-control-default"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label text-sm">Category</label>
                    <input 
                        type= 'text'
                        name="name" 
                        id="name" 
                        className="form-control form-control-default"
                    />
                </div>
                <div className="form-group mb-5">
                    <label htmlFor="name" className="form-label text-sm">Cost</label>
                    <input 
                        type= 'text'
                        name="name" 
                        id="name" 
                        className="form-control form-control-default"
                    />
                </div>
                <div className="flex flex-col justify-content-center">
                    <button 
                        type="submit" 
                        className='btn-lg text-md text-center btn'
                    >
                        Add Expenditure
                    </button>
                </div>
            </form>
        </div>
     );
}
 
export default Expense_Form;