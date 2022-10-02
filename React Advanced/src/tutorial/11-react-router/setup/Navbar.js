import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li style={{ margin: "0.5rem" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ margin: "0.5rem" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ margin: "0.5rem" }}>
          <Link to="/people">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
