import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const NavBar = () => {
  return (
    <header className="bg-red-600 ">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4  text-white hover:text-white text-5xl cursive tracking-widest"
          >
            Yakub's Photo
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white"
            activeClassName="text-white bg-red-700"
          >
            About Me
          </NavLink>
        </nav>
        <div className="socials__container">
          <div className="socials__icon">
            <a href="https://facebook.com" className="socials__a" target="_blank">
              <AiFillFacebook />
            </a>
          </div>
          <a href="https://twitter.com" className="socials__a" target="_blank">
            <div className="socials__icon">
              <AiFillTwitterSquare />
            </div>
          </a>
          <a href="https://linkedin.com" className="socials__a" target="_blank">
            <div className="socials__icon">
            <AiFillLinkedin />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
