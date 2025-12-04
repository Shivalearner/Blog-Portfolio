import React from "react";
import Navbar from "./common/Navbar";
import BlogProfileImage from "../assets/Blog Website Design.jpg";
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import BlogImage from "../assets/blogImage.png";
import { useNavigate } from "react-router-dom";
import Footer from "./common/Footer";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-full sm:w-1/2 flex-col justify-center">
          <h2 className="text-3xl md:text-6xl font-bold pb-2">Hey! I Am</h2>
          <h2 className="text-4xl md:text-7xl font-bold text-orange-400 py-2">
            Sivabalan N
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            MERN Stack Developer | React & Tailwind CSS Enthusiast
          </p>

          <img
            src={BlogProfileImage}
            className="w-60 block sm:hidden"
            alt="Blog Profile Image"
          />
          <p className="text-lg text-gray-600 font-medium">
            Crafting modern web experiences with the MERN stack.
          </p>
          <button
            className="button-style mt-2"
            onClick={() => navigate("/blogs")}
          >
            Read My Blogs
          </button>
        </div>
        <div className="justify-center hidden sm:block">
          <img
            src={BlogProfileImage}
            className="w-60 md:w-96 "
            alt="Blog Profile Image"
          />
        </div>
      </div>

      <div className="flex justify-evenly py-6">
        <img src={HTML} style={{ width: "50px" }} />
        <img src={CSS} style={{ width: "50px" }} />
        <img src={JS} style={{ width: "50px" }} />
        <img src={REACTICON} style={{ width: "50px" }} />
        <img src={DB} style={{ width: "50px" }} />
        <img src={NODE} style={{ width: "50px" }} />
      </div>

      <div className="flex flex-col mt-10 items-center justify-around sm:flex-row">
        <div className="flex-col">
          <div className="mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center">
            <div className="rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600">
              6
            </div>
            <p className="text-center font-medium">Projects Completed</p>
          </div>
          <div className="mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center">
            <div className="rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600">
              6
            </div>

            <p className="text-center font-medium">Months of Experience</p>
          </div>
        </div>

        <div className="ml-4 mt-4 sm:mt-0">
          <h2 className="text-3xl sm:text-7xl font-bold">My Awesome</h2>
          <h2 className="text-3xl sm:text-7xl font-bold text-orange-400">
            Services
          </h2>
          <p className="my-2">
            I have attached my Resume here for your reference.
          </p>
          <a
            href="/Sivabalan_N_Resume..pdf"
            download
            className="button-style mt-2 inline-block"
          >
            Download CV
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-center text-5xl my-14 font-bold">
          Checkout My Live <span className="text-orange-400">Projects</span>{" "}
          Here
        </h2>
        <div className="flex justify-around my-5 flex-col sm:flex-row">
          <img
            src={P1}
            className="w-64 border rounded-md cursor-pointer"
            alt=""
          />

          <img
            src={P2}
            className="w-64 border rounded-md cursor-pointer"
            alt=""
          />

          <img
            src={P3}
            className="w-64 border rounded-md cursor-pointer"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
