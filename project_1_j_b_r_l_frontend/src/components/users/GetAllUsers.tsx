import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IUser } from '../../models/IUser';
import axios from 'axios';

function GetAllUsers() {
    const [users, setUsers] = useState<IUser[]>([]);
    const navigate = useNavigate();

    let getUsers = async () => {

        let response = await axios.get('http://localhost:8080/users', 
        {withCredentials: true}
        ).then((response) => {
            setUsers(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

    let checkAdmin = () => {
        if(localStorage.getItem("admin") === "false") {
            navigate("/")
        }
        getUsers();
    }

    useEffect(checkAdmin, [])

    return (
        <div>
            <h1>All Users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.userId}>
                                <td>{user.userId}</td>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>${user.balance}</td>
                                <td>{user.admin ? "true" : "false"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
} export default GetAllUsers;