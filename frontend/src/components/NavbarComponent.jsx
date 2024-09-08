import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-brand">🍕 Home</button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {token ? (
              <>
                <li className="nav-item">
                  <button className="nav-link">🔓 Profile</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="nav-link">🔐 Login</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">🔐 Register</button>
                </li>
              </>
            )}
            <li className="nav-item">
              <button className="nav-link">🛒 Total: {total.toLocaleString()}</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
