import React from 'react'

import "./home.scss";
import "./css/NavBar.scss";

import AVT1 from "../assets/avatar1.jpg";
import AVT2 from "../assets/avatar2.jpg";
import AVT3 from "../assets/avatar3.jpg";
import AVT4 from "../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { NavLink } from 'react-router-dom';
import Contacts from './Contacts';

const data = [
  {
    avatar: AVT1,
    alt: "avatar 1",
    name: "Tina show",
    review:
      "",
  },
  {
    avatar: AVT2,
    alt: "avatar 2",
    name: "Shatta Walle",
    review:
      "",
  },
  {
    avatar: AVT3,
    alt: "avatar 3",
    name: "Tim Feng",
    review:
      "",
  },
  {
    avatar: AVT4,
    alt: "avatar 4",
    name: "Jude Crew",
    review:
      "",
  }
];


const Home = () => {
  return (
    <>
      <section id="landing">
        <Swiper
          speed={2000}
          spaceBetween={0}
          centeredSlides={true}
      
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[ Autoplay, Navigation ]}
          // modules={[Autoplay, Pagination, Navigation]}
          className="container testimonials__container mySwiper"
        >
          {data.map(({ avatar, alt, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={alt} className="test" />
                </div>
                <div className="client__text">
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <NavLink
          to="/"
          exact
          activeClassName="nav__mid-btn-active"
          className="nav__mid-btn title__container-title"
        >
          <div className='logo1'>
            <h2>
              JAKUB
              <div>PHOTOGRAPHY</div>
            </h2>
          </div>
        </NavLink>
      </section>

      <section>
      <Contacts></Contacts>
      </section>
    </>
  );
}

export default Home