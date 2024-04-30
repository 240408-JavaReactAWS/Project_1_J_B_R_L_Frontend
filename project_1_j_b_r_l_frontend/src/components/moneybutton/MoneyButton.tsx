import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';

function MoneyButton(){
    const [amount, setAmount] = useState(0);

    let updateAmount = (e: SyntheticEvent) => {
        setAmount(parseFloat((e.target as HTMLInputElement).value))
    }  
    
    const handleButtonClick = async () => {
        // setAmount(Number((document.getElementById('amount') as HTMLInputElement).value));

        try {
        const response = await axios.patch('http://localhost:8080/users/addMoney', {balance: amount},
            {withCredentials: true});

                if (response.status === 200) {
                    // Handle successful response
                    console.log('PATCH request sent successfully');
                } else {
                    // Handle error response
                    console.error('Failed to send PATCH request');
                    console.log(response.status);
                }
        } catch (error) {
            // Handle network error
            console.error('Network error occurred', error);
        }
};

    return (
        <div className='movie-form'>
            <label htmlFor="amount" className ="movie-label">Amount:</label>
            <input onChange={updateAmount} type="number" id="amount" name="amount" />
            <button onClick={handleButtonClick}>
                Add Money
            </button>
        </div>
    );
};

export default MoneyButton;