import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-6 mb-12 border-b">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          {/* buttons */}
          <div className="flex items-center gap-6">
            <Link className="hover" to="">
              Log In
            </Link>
            <Link
              className="bg-violet-700  hover:bg-violet-800
           text-white px-4 py-3 rounded-lg transition"
              to=""
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
