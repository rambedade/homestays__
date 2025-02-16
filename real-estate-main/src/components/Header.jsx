import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b bg-gradient-to-b from-gray-200 to-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="HomeLand" className="h-6 w-auto" />
        </Link>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link className="hover:text-violet-900 transition text-gray-700" to="">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition"
            to=""
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
