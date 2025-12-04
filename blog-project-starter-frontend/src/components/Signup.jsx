import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) navigate("/Home");
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        auth.signOut().then(() => {
          navigate("/login");
        });
      })
      .catch(() => {
        setError("Registration failed. Try again later.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Sign Up
        </h2>

        <div className="mb-4">
          <label className="block text-black">Email</label>
          <input
            type="email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-black rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black">Password</label>
          <input
            type="password"
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-black rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-black">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            autoComplete="off"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-black rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <p
          onClick={() => navigate("/login")}
          className="text-indigo-500 text-sm mb-4 cursor-pointer hover:underline"
        >
          Already have an account? Login here
        </p>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;
