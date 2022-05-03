import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

export default function () {
  return (
    <div className="links">
      <Link to="/">somos</Link>
      <Link to="/Ruts2">ayuda</Link>
      <Link to="/Ruts3">mas opciones</Link>
    </div>
  );
}
