const Budget = () => {
    return ( 
        <div>
            <div className='card p-5 bg-gray-50 my-3'>
                <div className=''>
                    <p className='text-sm text-gray-800'>Monthly Income</p>
                    <input type="number" value="20000"/>
                </div>
            </div>

            <div className='card p-5 bg-green-600 my-3'>
                <p className='text-md text-gray-50 mb-2'>Savings</p>
                <p className='text-gray-50 text-xl'>P 5, 000, 000.00</p>
            </div>
            
            <div className='card p-5 bg-amber-300 my-3'>
                <p className='text-md text-gray-800'>Needs</p>

                <div className='card bg-amber-200 my-3 p-3 flex justify-between items-center'>
                    <p>Electric Bill...</p>
                    <p>P 20,000.00</p>
                </div>

                <div className='card bg-amber-200 my-3 p-3 flex justify-between items-center'>
                    <p>Total Cost</p>
                    <p>P 20,000.00</p>
                </div>
            </div>

            <div className='card p-5 bg-rose-600 my-3'>
                <p className='text-md text-gray-50'>Wants</p>

                <div className='card bg-rose-400 text-gray-50 my-3 p-3 flex justify-between items-center'>
                    <p>Internet Bill...</p>
                    <p>P 5,000.00</p>
                </div>

                <div className='card bg-rose-400 text-gray-50 my-3 p-3 flex justify-between items-center'>
                    <p>Total Cost</p>
                    <p>P 5,000.00</p>
                </div>
            </div>                  
        </div>
     );
}
 
export default Budget;