import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResetPasswordForm() {
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const navigateTo = useNavigate();

    useEffect(() => {
        let asyncCall = async() => {
            try {
                let validateSession = await axios.get(`http://localhost:8080/users/session`,  
                {withCredentials: true})
                if (validateSession.status === 401) {
                    navigateTo(`/users/forgot-password`);
                }
                console.log(validateSession);

            } catch (error) {
                console.error(error);
            }
        }
        asyncCall();
    }, []);

    let setPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    let setConfirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    let resetPassword = async(e: React.FormEvent) => {
        e.preventDefault();
        if(password === '') { 
            document.querySelector('.alert-container')!.innerHTML =`<div class="alert alert-danger" role="alert"><strong>Oh no! </strong>Please enter a password.</div>`
            return;
        }
        if(confirmPassword === '') { 
            document.querySelector('.alert-container')!.innerHTML =`<div class="alert alert-danger" role="alert"><strong>Oh no! </strong>Please confirm your password.</div>`
            return;
        }
        if(password !== confirmPassword) { 
            document.querySelector('.alert-container')!.innerHTML =`<div class="alert alert-danger" role="alert"><strong>Oh no! </strong>Passwords do not match.</div>`
            return;
        }
        let res = await axios.patch(`http://localhost:8080/users/reset-password`, {
            password: password
        }, {withCredentials: true})
        .then((response) => {
            console.log(response);
            document.querySelector('.alert-container')!.innerHTML =`<div class="alert alert-success" role="alert"><strong>Well done! </strong>${response.data}</div>`
            navigateTo(`/users/login`);
        })
        .catch((error) => {
            console.error(error);
            document.querySelector('.alert-container')!.innerHTML =`<div class="alert alert-danger" role="alert"><strong>Oh no! </strong>${error.response.data}</div>`
        });
    }

  return (
    <div className='form-outer-container'>
        <h1>Reset Password</h1>
        <div className='alert-container'></div>
        <form className='form-inner-container'>
            <label>Password</label>
            <input onChange={setPasswordHandler} type="password" name="password" />
            <label>Confirm Password</label>
            <input onChange={setConfirmPasswordHandler} type="password" name="confirm-password" />
            <button type="submit" onClick={resetPassword}>Reset Password</button>
        </form>
    </div>
  )
}

export default ResetPasswordForm