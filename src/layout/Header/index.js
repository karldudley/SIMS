import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <ul className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/housepoint">Add House Point</NavLink>
      <NavLink to="/behaviour">Add Behaviour Point</NavLink>
    </ul>
  );
}

export default Header;
