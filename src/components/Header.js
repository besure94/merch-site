import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="app-header">
      <h1>Band Merch Site</h1>
      <NavLink className="app-link" to="/items">Items</NavLink>
      <NavLink className="app-link" to="/sign-up">Sign Up</NavLink>
    </div>
  );
}

export default Header;