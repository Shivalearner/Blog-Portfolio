import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    auth.onAuthStateChanged((user) => {
      if (user) navigate("/Home");
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/home"))
      .catch(() => setErr("Error signing in. Please try again later."));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-100 to-indigo-200">
      <form
        onSubmit={handleLogin}
        className="p-10 bg-white rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-black text-center">
          Login
        </h2>

        <form onSubmit={handleLogin} autoComplete="off" className="...">
          <div className="mb-4">
            <label className="block text-black">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-black rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-black rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
        </form>

        {err && <p className="text-red-600 text-sm mb-2">{err}</p>}

        <p
          className="text-indigo-500 text-sm mb-4 cursor-pointer hover:underline"
          onClick={() => navigate("/signup")}
        >
          New user? Register here
        </p>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
