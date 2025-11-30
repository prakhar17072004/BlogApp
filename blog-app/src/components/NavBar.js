import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">MyBlog</Link>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blog List</Link>
        </li>
        <li>
          <Link to="/add-blog" onClick={() => setMenuOpen(false)}>Add Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
