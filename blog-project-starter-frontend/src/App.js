import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Navbar from "./components/common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="px-10  bg-white border rounded-md">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} /> {/* 👈 Signup on root path */}
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
