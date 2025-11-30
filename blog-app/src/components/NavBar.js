import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">MyBlog</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blog List</Link></li>
        <li><Link to="/add-blog">Add Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
