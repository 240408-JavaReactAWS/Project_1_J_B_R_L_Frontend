
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

    let login = async(e: React.FormEvent) => {
        e.preventDefault();

        let res = await axios.post('http://localhost:8080/users/login', {
            username: username, 
            password: password
        })
        .then((response) => {
            localStorage.setItem("username", response.data.username);
            setUsername('');
            setPassword('');
            return response.data;
        })
        .catch((error) => {
            localStorage.removeItem("username");
            console.error(error);
        });

       
        setCurrentUser(res)
    }
    
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card">
                <h1 className="card-header">Login</h1>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input onChange={updateUsername} type="text" name="username" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input onChange={updatePassword} type="password" name="password" className="form-control" />
                        </div>
                        <button type="submit" onClick={login} className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default LoginForm;