import { Link } from "react-router-dom";
import "../style/BlogCard.css";

function BlogCard({ blog, onDelete }) {
  return (
    <div className="card">
      <img src={blog.image} width="200" alt={blog.title} />
      
      <h3>{blog.title}</h3>
      <p><b>By:</b> {blog.blogger_name}</p>
      <p>{blog.description.substring(0, 50)}...</p>

      <div className="card-actions">
        <Link className="read-btn" to={`/blog/${blog.id}`}>Read More</Link>

        <button 
          className="delete-btn" 
          onClick={() => onDelete(blog.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
