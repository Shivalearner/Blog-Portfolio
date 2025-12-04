import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Footer from "./common/Footer";
import auth from "../config/firebase";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if user login or not
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.uid === "rpW01bktrOcKtcHPclGxePJtnyW2") {
          setAdmin(true);
          console.log("User is Admin");
        }
      } else {
        setAdmin(false);
      }
    });

    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch(() => {
        console.log("Error fetching data");
      });

    return () => unsubscribe();
  }, []);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleLike = async (blog_id) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/blogs/like/${blog_id}`
      );

      if (response.status === 200) {
        axios
          .get("http://localhost:5000/api/blogs")
          .then((res) => {
            console.log(res.data);
            setBlogs(res.data);
          })
          .catch(() => {
            console.log("Error fetching data");
          });
      }
    } catch (error) {
      console.error("Error liking the blog post:", error);
    }
  };

  const handleNewBlogSubmit = (event) => {
    event.preventDefault();

    const today = new Date();
    const date = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const likes = 0;

    axios
      .post("http://localhost:5000/api/blogs", {
        newTitle,
        date,
        newContent,
        likes,
      })
      .then((res) => {
        console.log(res.data);

        axios
          .get("http://localhost:5000/api/blogs")
          .then((res) => {
            console.log(res.data);
            setBlogs(res.data);
          })
          .catch(() => {
            console.log("Error fetching data");
          });
      });

    setNewTitle("");
    setNewContent("");
  };

  return (
    <div className="blog-section py-14">
      <h2 className="text-center text-5xl font-bold mb-14">
        Latest <span className="text-orange-400">Blogs</span> 📚
      </h2>

      {/* Blog creation form */}
      {admin ? (
        <div
          className="blog-creation-form mb-8"
          style={{ width: "80%", margin: "auto" }}
        >
          <form onSubmit={handleNewBlogSubmit} className="flex mb-5 flex-col gap-4">
            <input
              type="text"
              placeholder="Blog Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="p-2 border border-gray-400 rounded"
              required
            />
            <textarea
              placeholder="Blog Content"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="p-2 border border-gray-400 rounded"
              rows="4"
              required
            />
            <button
              type="submit"
              className="bg-orange-400 text-white p-2 rounded hover:bg-orange-600"
            >
              Add Blog
            </button>
          </form>
        </div>
      ) : (
        ""
      )}

      <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto px-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="blog-post p-6 bg-white shadow-lg rounded-lg border border-gray-400"
          >
            <h3 className="blog-title font-semibold text-2xl text-gray-800 mb-3">
              {blog.newTitle}
            </h3>
            <p className="blog-date text-gray-400 text-sm mb-4">{blog.date}</p>
            <p className="blog-content text-gray-600 mb-4">{blog.newContent}</p>

            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => handleLike(blog._id)}
            >
              Like
            </span>
            <span className="ml-2">{blog.likes} Likes</span>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Blogs;
