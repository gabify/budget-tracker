const ExpenseCard = ({name, cost}) => {
    return ( 
        <div className="card px-2 py-3 bg-gray-100 mb-3">
            <p className="text-xs font-light mb-1">{name}</p>
            <p className="font-medium">P {cost}</p>
        </div>
     );
}
 
export default ExpenseCard;