import {FaTrash} from 'react-icons/fa6'

const ExpenseCard = ({name, cost, handleDelete}) => {
    const handleClick = () =>{
        handleDelete(name)
    }

    return ( 
        <div className="card px-3 py-3 bg-gray-100 mb-3 hover:bg-gray-50">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-xs font-light mb-1">{name}</p>
                    <p className="font-medium">P {cost}</p>
                </div>
                <FaTrash 
                    className='text-red-600 cursor-pointer hover:text-red-500' 
                    onClick={handleClick}
                />
            </div>
        </div>
     );
}
 
export default ExpenseCard;