"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./headerStyle.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <div className="logo">
        <h1>EdTech</h1>
      </div>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`headerMenuItemWrapper ${menuOpen ? "show" : ""}`}>
        <li className="headerMenuItem" onClick={() => setMenuOpen(false)}>
          <Link href="/">Home</Link>
        </li>

        <li className="headerMenuItem" onClick={() => setMenuOpen(false)}>
          <Link href="/products">Product</Link>
        </li>

        <li className="headerMenuItem" onClick={() => setMenuOpen(false)}>
          <Link href="/about">About Us</Link>
        </li>

        <li className="headerMenuItem" onClick={() => setMenuOpen(false)}>
          <Link href="/contact">Contact</Link>
        </li>

        <li
          className="headerMenuItem signInSignUp"
          onClick={() => setMenuOpen(false)}
        >
          <Link href="/">Sign In</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
