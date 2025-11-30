import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import "../style/BlogList.css"

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState("All");

  const loadBlogs = async () => {
    let res = await axios.get("http://localhost:5000/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const filtered =
    category === "All"
      ? blogs
      : blogs.filter((b) => b.category === category);

      const deleteBlog = async (id) => {
  if (window.confirm("Are you sure you want to delete this blog?")) {
    await axios.delete(`http://localhost:5000/blogs/${id}`);
    loadBlogs(); // reload list after delete
  }
};

 return (
  <div className="blog-list-container">
    <h2 className="blog-list-title">Blog List</h2>

    <select
      className="blog-filter"
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Technology">Technology</option>
      <option value="Sports">Sports</option>
      <option value="Business">Business</option>
      <option value="Health">Health</option>
      <option value="Science">Science</option>
      <option value="Entertainment">Entertainment</option>
    </select>

   <div className="blog-grid">
  {filtered.map((b) => (
    <BlogCard key={b.id} blog={b} onDelete={deleteBlog} />
  ))}
</div>

  </div>
);

}

export default BlogList;
