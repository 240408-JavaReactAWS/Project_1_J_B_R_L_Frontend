import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'

export interface IRegisterProps {
  username: string,
  password: string,
  name: string,
  email: string,
  isAdmin: boolean
}

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [error, setError] = useState('')

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleIsAdminChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(e.target.checked)
  }

  const handleRegister = async () => {
    const newUser: IRegisterProps = {
      username: username,
      password: password,
      name: name,
      email: email,
      isAdmin: isAdmin
    }
    console.log(newUser)
    let response = await axios.post('http://localhost:8080/users/register', newUser)
      .then((response) => {
        localStorage.setItem('user', response.data.username)
        console.log(response.status)
        return response
      })
      .catch((error) => {
        localStorage.removeItem('user')
        return error.response
      })
    if (response.status === 201) {
      console.log('User Registered')
      setError('User Registered')

    } else {
      setError(response.data)
      console.log(response.data)
    }
  }

  return (
    <div className='registerForm'>
      <div>
        <div className='form-group'>
        <h1>Register</h1>
          <label htmlFor='usernameInput'>Username:</label>
          <input id='usernameInput' type='text' onChange={handleUsernameChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='passwordInput'>Password:</label>
          <input id='passwordInput' type='password' onChange={handlePasswordChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='nameInput'>Name:</label>
          <input id='nameInput' type='text' onChange={handleNameChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='emailInput'>Email:</label>
          <input id='emailInput' type='text' onChange={handleEmailChange} />
        </div>
        <div className='form-group'>
          <label htmlFor='isAdminInput'>Is Admin:</label>
          <input id='isAdminInput' type='checkbox' onChange={handleIsAdminChange} />
        </div>
        <button onClick={handleRegister}>Register!</button>
      </div>
      <div>
        <span>{error}</span>
      </div>
    </div>
  )
}

export default Register
