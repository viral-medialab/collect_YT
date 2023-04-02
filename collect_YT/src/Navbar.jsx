import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <span role="img" aria-label="Water drop">
          💧
        </span>
        <span>Liquid Learning</span>
      </div>
      {/* Add your other navbar content here */}
    </nav>
  );
}

export default Navbar;
