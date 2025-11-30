import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import SingleBlog from "./components/SingleBlog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />          //  BLOGCARDS HERE
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/add-blog" element={<BlogForm />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
