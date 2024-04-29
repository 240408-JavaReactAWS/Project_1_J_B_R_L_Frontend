import axios from 'axios';
import React, { useState } from 'react';

function MoneyButton(){
    const [amount, setAmount] = useState(0);
    
    const handleButtonClick = async () => {
        setAmount(Number((document.getElementById('amount') as HTMLInputElement).value));

        try {
        const response = await axios.patch('http://localhost:8080/users/addMoney', String(amount),
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
        <div>
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" />
            <button onClick={handleButtonClick}>
                Add Money
            </button>
        </div>
    );
};

export default MoneyButton;