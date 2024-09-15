import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">🍕 Home</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {token ? (
              <>
                <li className="nav-item">
                  <button className="nav-link">🔓 Profile</button>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="nav-link">🔒 Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">🔐 Login</Link>
                </li>
                <li className="nav-item">
                  <Link to='/register' className="nav-link">🔐 Register</Link >
                </li>
                <li className="nav-item">
                  <Link to='/pizza/p001' className="nav-link">🍕 Pizza #1</Link >
                </li>
                <li className="nav-item">
                  <Link to='/profile' className="nav-link"> Tu perfil </Link>
                </li>
                <li className="nav-item">
                  <Link to='/404' className="nav-link"> *No encontrado </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link to='/cart' className="nav-link">🛒 Total: {total.toLocaleString()}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
