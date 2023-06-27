import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">Brand Name</div>
      <button onClick={getUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
