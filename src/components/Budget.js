import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        // Compare the current budget with the sum of expenses
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        
        if (newBudget < totalExpenses) {
          alert("Warning: Your budget is less than your total expenses!");
        }
      }, [newBudget, expenses]);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    


    return (
        <div className='alert alert-info'>
            <span>Budget : {currency} </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;