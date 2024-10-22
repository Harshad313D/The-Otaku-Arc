import React from "react";
// import logo from "../assets/Logo.png";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src="/Logo.png" alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
