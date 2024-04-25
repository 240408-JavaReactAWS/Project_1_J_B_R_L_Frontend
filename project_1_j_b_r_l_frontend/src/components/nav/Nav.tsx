import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Add Movie</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/movies">Movie List</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
