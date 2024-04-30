import axios from 'axios';
import "./MoneyButton.css";
import React, { SyntheticEvent, useState } from 'react';

function MoneyButton(){
    const [amount, setAmount] = useState(0);
    const [text, setText] = useState('');
    const [className, setClassName] = useState('');

    let updateAmount = (e: SyntheticEvent) => {
        setAmount(parseFloat((e.target as HTMLInputElement).value))
    }  
    
    const handleButtonClick = async (e: SyntheticEvent) => {
        // setAmount(Number((document.getElementById('amount') as HTMLInputElement).value));
        e.preventDefault();
        if (!amount) {
            setClassName('failure');
            setText('Please enter a valid amount');
            return;
        }

        try {
        const response = await axios.patch('http://localhost:8080/users/addMoney', {balance: amount},
            {withCredentials: true});

                if (response.status === 200) {
                    // Handle successful response
                    console.log('PATCH request sent successfully');
                    setClassName('success');
                    setText('$' + amount.toFixed(2) + ' added to your account');
                } else {
                    // Handle error response
                    console.error('Failed to send PATCH request');
                    console.log(response.status);
                    setClassName('failure');
                    setText('Failed to add money to your account');
                }
        } catch (error) {
            // Handle network error
            console.error('Network error occurred', error);
            setClassName('failure');
            setText('Failed to add money to your account');
        }
        setAmount(0);
};

    return (
        <div className='movie-form'>
            <label htmlFor="amount" className ="movie-label">Amount:</label>
            <input onChange={updateAmount} value={amount} type="number" id="amount" name="amount"/>
            <button onClick={handleButtonClick}>
                Add Money
            </button>
            <h2 className={className}>{text}</h2>
        </div>
    );
};

export default MoneyButton;