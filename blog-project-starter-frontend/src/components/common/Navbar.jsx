import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../config/firebase";
import { signOut } from "firebase/auth";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [log, setLog] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLog(!!user);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login"); // Redirect to login after logout
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  // Routes where Home and Blogs links should be hidden
  const hideHomeBlogLinks = ["/", "/login", "/signup"];
  const isSpecialRoute = hideHomeBlogLinks.includes(location.pathname);

  return (
    <nav className="py-5 px-6 md:px-16 flex justify-between items-center shadow-sm bg-white sticky top-0 z-50">
      {/* LOGO */}
      <h2 className="text-3xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          S
        </span>
        <span className="text-black text-xl ml-1">blogs</span>
      </h2>

      {/* NAV LINKS */}
      <div className="flex items-center space-x-6">
        {!isSpecialRoute && (
          <>
            <Link className="hover:text-orange-500 font-medium" to="/home">
              Home
            </Link>
            <Link className="hover:text-orange-500 font-medium" to="/blogs">
              Blogs
            </Link>
          </>
        )}

        {log ? (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded hidden md:block transition duration-200"
          >
            Logout
          </button>
        ) : (
          isSpecialRoute && (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded hidden md:block transition duration-200"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded hidden md:block transition duration-200"
              >
                Signup
              </button>
            </>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;
