import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlus , FaMinus} from "react-icons/fa";


const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td ><button onClick={event=> increaseAllocation(props.name)}><FaPlus /> </button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)}><FaMinus /></button></td>
        </tr>
    );
};

export default ExpenseItem;