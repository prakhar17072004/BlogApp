import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../style/SingleBlog.css";

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const load = async () => {
    let res = await axios.get("http://localhost:5000/blogs/" + id);
    setBlog(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="single-blog-container">
      {blog && (
        <>
          <h2>{blog.title}</h2>

          <img src={blog.image} alt="Blog" />

          <div className="single-blog-info">
            <p><b>Author:</b> {blog.blogger_name}</p>
            <p><b>Category:</b> {blog.category}</p>
          </div>

          <div className="section-divider"></div>

          <p className="single-blog-description">{blog.description}</p>
        </>
      )}
    </div>
  );
}

export default SingleBlog;
