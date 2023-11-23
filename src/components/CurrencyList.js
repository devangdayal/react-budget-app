import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {

    const { currency, dispatch } = useContext(AppContext);

    const currencies = ['$', '£', '€', '₹'];
    const currencyNames = ['Dollar', 'Pound', 'Euro', 'Rupee'];

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    return (

        // <select value={currency} onChange={handleCurrencyChange} class="custom-dropdown form-select form-select-lg mb-8 dropup">
        //         {currencies.map((cur, index) => (
        //             <option key={cur} value={cur}>Currency : {cur} {currencyNames[index]} </option>
        //         ))}
        // </select>


        
            <select value={currency} onChange={handleCurrencyChange}>
                {currencies.map((cur, index) => (
                    <option key={cur} value={cur}>Currency : {cur} {currencyNames[index]} </option>
                ))}
        </select>


    )
}

export default CurrencyList;