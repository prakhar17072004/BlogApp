import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import "../style/Home.css";

function Home() {
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    let res = await axios.get("http://localhost:5000/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">Latest Blogs</h2>

      <div className="home-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Home;
