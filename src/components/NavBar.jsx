import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2 as MenuIcon } from "react-icons/hi";
import { CgClose as CloseMenuIcon } from "react-icons/cg";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import sanityClient from "../client.js";
import "./css/NavBar.scss";
import LensLogo from "../assets/LensLogo";

export default function NavBar() {
  const [navData, setNav] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "gallery" && displayNav == true ] | order(_createdAt asc) {
          title,
          buttonText,
          slug{
            current
          }
        }`
      )
      .then((data) => setNav(data))
      .catch(console.error);
  }, []);

  function clickOpenClose() {
    var x = document.getElementsByClassName("nav__header")[0];
    var y = document.getElementById("nav__open");
    var z = document.getElementById("nav__close");
    if (x.style.transform === "none") {
      x.style.transform = "translateX(var(--translate-left))";
      y.style.opacity = "1";
      z.style.opacity = "0";
    } else {
      x.style.transform = "none";
      y.style.opacity = "0";
      z.style.opacity = "1";
    }
  }

  return (
    <>
      <header className="nav__header">
        <button onClick={clickOpenClose} className="nav__icons">
          <MenuIcon id="nav__open" className="nav__menu-icon" />
          <CloseMenuIcon id="nav__close" className="nav__menu-icon" />
        </button>
        <div className="nav__container">
          <nav className="left__nav">
            <div>
              <div className="title__container">
                <div className="lens__container">
                  <LensLogo className="lensico" />
                </div>
                <NavLink
                  to="/"
                  exact
                  activeClassName="nav__mid-btn-active"
                  className="nav__mid-btn title__container-title"
                >
                  <h2>
                    JAKUB
                    <div>PHOTOGRAPHY</div>
                  </h2>
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/post"
              activeClassName="nav__btn-active"
              className="nav__btn"
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="nav__btn-active"
              className="nav__btn nav__left-btn"
            >
              Projects
            </NavLink>
            <NavLink
              to="/gallery"
              activeClassName="nav__btn-active"
              className="nav__btn nav__left-btn"
            >
              Gallery
            </NavLink>

            {navData &&
              navData.map((gallery) => (
                <NavLink
                  to={"/gallery/" + gallery.slug.current}
                  key={gallery.slug.current}
                  activeClassName="nav__btn-active"
                  className="nav__btn"
                >
                  {gallery.buttonText}
                </NavLink>
              ))}

            <NavLink
              to="/about"
              activeClassName="nav__btn-active"
              className="nav__btn"
            >
              About Me
            </NavLink>
          </nav>
          <div className="socials__container">
            <div className="socials__icon">
              <a
                href="https://www.facebook.com/fumacphoto/"
                className="socials__a"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillFacebook />
              </a>
            </div>
            <a
              href="https://twitter.com"
              className="socials__a"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="socials__icon">
                <AiFillTwitterSquare />
              </div>
            </a>
            <a
              href="https://linkedin.com"
              className="socials__a"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="socials__icon">
                <AiFillLinkedin />
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

//   return (
//     <header className="bg-red-600 ">
//       <div className="container mx-auto flex justify-between">
//         <nav className="flex">

//           <NavLink
//             to="/post"
//             activeClassName="text-white bg-red-700"
//             className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white"
//           >
//             Blog Posts
//           </NavLink>
//           <NavLink
//             to="/project"
//             activeClassName="text-white bg-red-700"
//             className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white"
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/gallery"
//             activeClassName="text-white bg-red-700"
//             className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white"
//           >
//             Gallery
//           </NavLink>
//           <NavLink
//             to="/"
//             exact
//             activeClassName="text-white"
//             className="inflex-flex items-center py-6 px-3 mr-4 ml-4  text-white hover:text-white text-5xl cursive tracking-widest"
//           >
//             Jakub's Photo
//           </NavLink>
//           {navData &&
//             navData.map((gallery) => (
//             <NavLink
//               to={"/gallery/" + gallery.slug.current}
//               key={gallery.slug.current}
//               className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white"
//               activeClassName="text-white bg-red-700"

//             >
//               {gallery.buttonText}
//             </NavLink>
//             ))}

//           <NavLink
//             to="/about"
//             className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-white"
//             activeClassName="text-white bg-red-700"
//           >
//             About Me
//           </NavLink>

//         </nav>
//         <div className="socials__container">
//           <div className="socials__icon">
//             <a href="https://facebook.com" className="socials__a" target="_blank" rel="noreferrer noopener">
//               <AiFillFacebook />
//             </a>
//           </div>
//           <a href="https://twitter.com" className="socials__a" target="_blank" rel="noreferrer noopener">
//             <div className="socials__icon">
//               <AiFillTwitterSquare />
//             </div>
//           </a>
//           <a href="https://linkedin.com" className="socials__a" target="_blank" rel="noreferrer noopener">
//             <div className="socials__icon">
//             <AiFillLinkedin />
//             </div>
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };
