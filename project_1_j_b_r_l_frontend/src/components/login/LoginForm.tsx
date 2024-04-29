import React, { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
        }, {withCredentials: true})
        .then((response) => {
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("admin", response.data.admin);
            setUsername('');
            setPassword('');
            navigate("/movies");
        })
        .catch((error) => {
            localStorage.removeItem("username");
            localStorage.removeItem("admin");
            console.error(error);
        });
    }

    let checkAdmin = () => {
        if(localStorage.getItem("admin") === "false") {
            navigate("/")
        }
    }

    useEffect(checkAdmin, [])
    
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Username</label>
                <input onChange={updateUsername} type="text" name="username" />
                <label>Password</label>
                <input onChange={updatePassword} type="password" name="password" />
                <button type="submit" onClick={login}>Login</button>
            </form>
            <p>
                <Link className="link-secondary" to="/users/forgot-password">
                    Forgot password?
                </Link>
            </p>
        </div>
    )
}

export default LoginForm;