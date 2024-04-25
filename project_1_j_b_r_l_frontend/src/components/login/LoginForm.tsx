import React, { SyntheticEvent, useState } from "react";
import { IUser } from "../../models/IUser";
import axios from "axios";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState<IUser>();

    let updateUsername= (e: SyntheticEvent) => {
        setUsername((e.target as HTMLInputElement).value)
    }

    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value)
    }

    let login = async() => {
        let res = await axios.post('http://localhost:8080/users/login', {username, password})
                        .then((response) => {
                            localStorage.setItem("username", response.data.username)
                            return response.data}
                        )
                        .catch( (error) => {
                            localStorage.removeItem("username")
                            console.error(error)
                        });

       
        setCurrentUser(res)
    }
    
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Username</label>
                <input onChange={updateUsername} type="text" name="username" />
                <label>Password</label>
                <input onChange={updatePassword} type="password" name="password" />
                <button onClick={login}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;