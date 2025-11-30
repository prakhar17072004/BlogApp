import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/BlogForm.css";


function BlogForm() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    category: "",
    title: "",
    blogger_name: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "Entertainment",
    "Technology",
    "Sports",
    "Business",
    "Health",
    "Science",
  ];

  const validate = () => {
    let temp = {};
    temp.title = form.title.length < 3 ? "Minimum 3 characters" : "";
    temp.blogger_name = form.blogger_name.length < 3 ? "Minimum 3 characters" : "";
    temp.image = form.image.trim().length < 5 ? "Image URL required" : "";
    temp.description = form.description.length < 3 ? "Minimum 3 characters" : "";
    temp.category = form.category === "" ? "Select category" : "";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    await axios.post("http://localhost:5000/blogs", form);
    alert("Blog Added Successfully");
    nav("/blogs");
  };

  return (
    <div className="container">
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        
        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <p style={{color:'red'}}>{errors.category}</p>

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <p style={{color:'red'}}>{errors.title}</p>

        <input
          placeholder="Blogger Name"
          value={form.blogger_name}
          onChange={(e) => setForm({ ...form, blogger_name: e.target.value })}
        />
        <p style={{color:'red'}}>{errors.blogger_name}</p>

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <p style={{color:'red'}}>{errors.image}</p>

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>
        <p style={{color:'red'}}>{errors.description}</p>

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}

export default BlogForm;
