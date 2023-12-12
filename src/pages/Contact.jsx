import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import contactHero from "../assets/contact/desktop/image-hero.jpg";
import contactHeroTablet from "../assets/contact/tablet/image-hero.jpg";
import contactHeroMobile from "../assets/contact/mobile/image-hero.jpg";
import mapImg from "../assets/contact/desktop/image-map.png";
import mapImgTablet from "../assets/contact/tablet/image-map.png";
import mapImgMobile from "../assets/contact/mobile/image-map.png";
import arrowRight from "../assets/icons/icon-arrow.svg";

import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    }

    if (formData.email.trim() === "" || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Can't be empty";
    }

    if (formData.message.trim() === "") {
      errors.message = "Can't be empty";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="md:flex flex-col items-center absolute left-20 hidden"
      >
        <div className="w-[1px] h-24 bg-lightGrey"></div>
        <div className="flex flex-col items-center justify-center font-medium text-lightGrey">
          <span className="mb-2 rotate-90 text-lg">C</span>
          <span className="mb-2 rotate-90 text-lg">O</span>
          <span className="mb-2 rotate-90 text-lg">N</span>
          <span className="mb-2 rotate-90 text-lg">T</span>
          <span className="mb-2 rotate-90 text-lg">A</span>
          <span className="mb-2 rotate-90 text-lg">C</span>
          <span className="mb-2 rotate-90 text-lg">T</span>
        </div>
      </motion.div>
      <main className="lg:max-w-[1110px] mx-auto md:max-w-[573px]">
        <Navbar />

        <section className="my-10 flex flex-col md:flex-row relative">
          <div className="relative">
            <img src={contactHero} alt="" className="hidden lg:block" />
            <img
              src={contactHeroTablet}
              alt=""
              className="hidden md:block lg:hidden"
            />
            <img src={contactHeroMobile} alt="" className="md:hidden" />
            <div className="absolute inset-0 bg-black opacity-20  md:w-auto"></div>
          </div>

          <h1 className="font-bold md:text-[120px] lg:text-[250px] hidden md:block text-veryLightGrey absolute right-24 top-[25rem] lg:-right-4 lg:top-20 z-10">
            Contact
          </h1>
          <div className="font-bold text-start bg-white absolute -bottom-[11.5rem] md:-bottom-1 right-4 md:-right-4 lg:bottom-0 pl-20 md:pr-20 md:p-20 lg:p-40">
            <h2 className="text-7xl text-veryDarkBlue w-[30rem]">
              Tell us about your project
            </h2>
            <p className="font-medium text-lg text-darkGrey w-96">
              We’d love to hear more about your project. Please, leave a message
              below or give us a call. We have two offices, one in Texas and one
              in Tennessee. If you find yourself nearby, come say hello!
            </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row justify-between my-20 mt-80 md:mt-20 text-start p-4">
          <div className="font-bold text-7xl text-veryDarkBlue w-80">
            <h2>Contact Details</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-20">
            <div>
              <h3 className="font-bold text-lg text-darkGrey my-5">
                Main Office
              </h3>
              <p className="font-medium text-lg text-darkGrey my-5">
                Mail : archone@mail.com <br /> Address : 1892 Chenoweth Drive TN
                <br />
                Phone : 123-456-3451
              </p>
              <p className="font-bold text-lg text-veryDarkBlue flex items-center gap-8">
                View on Map <img src={arrowRight} alt="" />
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-darkGrey my-5">
                Office II
              </h3>
              <p className="font-medium text-lg text-darkGrey my-5">
                Mail : archtwo@mail.com <br /> Address : 3399 Wines Lane TX
                <br /> Phone : 832-123-4321
              </p>
              <p className="font-bold text-lg text-veryDarkBlue flex items-center gap-8">
                View on Map
                <img src={arrowRight} alt="" />
              </p>
            </div>
          </div>
        </section>

        <section className="my-20">
          <img src={mapImg} alt="" className="hidden lg:block" />
          <img
            src={mapImgTablet}
            alt=""
            className="hidden md:block lg:hidden"
          />
          <img src={mapImgMobile} alt="" className="md:hidden" />
        </section>

        <section className="my-20 text-start flex flex-col lg:flex-row justify-between p-4">
          <div className="font-bold text-7xl text-veryDarkBlue w-80 md:w-auto">
            <h2>Connect with us</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex items-start flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className={
                    formErrors.name
                      ? "border-b-2 placeholder:text-redError placeholder:font-bold placeholder:text-xl border-b-redError w-[320px] md:w-[540px] p-4 focus:outline-none"
                      : "border-b-2 border-b-veryDarkBlue w-[320px] md:w-[540px] p-4 focus:outline-none"
                  }
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <span className="font-bold text-xs italic text-redError mt-5">
                    {formErrors.name}
                  </span>
                )}
              </div>
              <div className="flex items-start flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  className={
                    formErrors.email
                      ? "border-b-2 placeholder:text-redError placeholder:font-bold placeholder:text-xl border-b-redError w-[320px] md:w-[540px] p-4 mt-5 focus:outline-none"
                      : "border-b-2 border-b-veryDarkBlue w-[320px] md:w-[540px] p-4 mt-5 focus:outline-none"
                  }
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <span className="font-bold text-xs italic text-redError mt-5">
                    {formErrors.email}
                  </span>
                )}
              </div>
              <div className="flex items-start flex-col">
                <textarea
                  type="text"
                  placeholder="Message"
                  className={
                    formErrors.message
                      ? "border-b-2 placeholder:text-redError placeholder:font-bold placeholder:text-xl border-b-redError w-[320px] md:w-[540px] p-4 pb-20 focus:outline-none"
                      : "border-b-2 border-b-veryDarkBlue w-[320px] md:w-[540px] p-4 pb-20 focus:outline-none"
                  }
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {formErrors.message && (
                  <span className="font-bold text-xs italic text-redError mt-5">
                    {formErrors.message}
                  </span>
                )}
              </div>
            </form>
            <div className="flex items-end justify-end">
              <button
                className="bg-veryDarkBlue w-20 h-20 flex items-center justify-center hover:bg-darkGrey"
                onClick={handleSubmit}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M15 1l9 9-9 9M0 10h24" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </section>

        <Footer />

        <footer className="bg-veryLightGrey w-full md:w-[612px] md:h-[90px] flex flex-col md:flex-row items-center gap-8 md:gap-16 font-bold text-lg text-mediumGrey relative lg:hidden">
          <div className="bg-veryDarkBlue flex justify-center items-center w-32 h-32 relative md:static -mt-8 md:mt-0">
            <svg
              width="58"
              height="25"
              viewBox="0 0 58 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Arch 3">
                <path
                  id="Subtract"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.89031 19.9116L6.52707 23.6847H0L9.25356 0.963867H14.8718L24.1254 23.6847H17.5983L16.235 19.9116H7.89031ZM12.0627 9.19838L9.95583 14.5963H14.1695L12.0627 9.19838Z"
                  fill="white"
                />
                <path
                  id="Path"
                  d="M27.3199 23.6844V16.7717C27.3199 16.3036 27.4531 15.8675 27.7193 15.4636C27.9855 15.0597 28.3366 14.7315 28.7727 14.479C29.2088 14.2266 29.6701 14.1003 30.1566 14.1003C30.5422 14.1003 30.9668 14.1784 31.4303 14.3344C31.8939 14.4905 32.2956 14.697 32.6352 14.9541L35.0312 10.1345C34.6365 9.84076 34.1362 9.60207 33.5303 9.41847C32.9244 9.23487 32.3507 9.14307 31.809 9.14307C30.9736 9.14307 30.1635 9.3565 29.3786 9.78338C28.5937 10.2103 27.9075 10.8047 27.3199 11.5666V9.58371H21.5916V23.6844H27.3199Z"
                  fill="white"
                />
                <path
                  id="Path_2"
                  d="M38.7769 24.125C39.6857 24.125 40.551 23.9988 41.3726 23.7463C42.1942 23.4939 42.8437 23.1978 43.3211 22.8582L41.4483 19.0025C41.2739 19.1219 41.0329 19.2297 40.7254 19.3261C40.4178 19.4225 40.0805 19.4707 39.7133 19.4707C39.1166 19.4707 38.5979 19.3399 38.1572 19.0783C37.7166 18.8166 37.3792 18.4701 37.1451 18.0386C36.911 17.6071 36.794 17.139 36.794 16.634C36.794 16.2301 36.8927 15.8078 37.09 15.3672C37.2874 14.9265 37.5995 14.5547 38.0264 14.2518C38.4533 13.9489 39.0064 13.7974 39.6857 13.7974C40.4018 13.7974 40.9893 13.9534 41.4483 14.2656L43.3211 10.4099C42.862 10.0611 42.2103 9.76272 41.3657 9.51486C40.5211 9.267 39.649 9.14307 38.7494 9.14307C37.6018 9.14307 36.5392 9.35191 35.5616 9.76961C34.5839 10.1873 33.7347 10.7519 33.0141 11.4633C32.2934 12.1748 31.7334 12.9781 31.3341 13.8731C30.9348 14.7682 30.7351 15.6931 30.7351 16.6478C30.7351 17.6668 30.9485 18.6284 31.3754 19.5327C31.8023 20.4369 32.3875 21.2333 33.1311 21.9218C33.8747 22.6103 34.7308 23.1496 35.6993 23.5398C36.6678 23.9299 37.6936 24.125 38.7769 24.125Z"
                  fill="white"
                />
                <path
                  id="Path_3"
                  d="M47.6449 23.6847V15.9183C47.6449 15.441 47.7413 15.0279 47.9341 14.679C48.1269 14.3302 48.3977 14.0594 48.7465 13.8666C49.0954 13.6738 49.4993 13.5774 49.9583 13.5774C50.656 13.5774 51.216 13.7908 51.6383 14.2177C52.0605 14.6446 52.2717 15.2115 52.2717 15.9183V23.6847H58.0001V14.679C58.0001 13.6233 57.7522 12.68 57.2565 11.8492C56.7608 11.0184 56.0883 10.3598 55.2392 9.87322C54.39 9.38667 53.4284 9.1434 52.3543 9.1434C51.5097 9.1434 50.6766 9.29717 49.855 9.6047C49.0334 9.91224 48.2967 10.346 47.6449 10.906V0H41.9165V23.6847H47.6449Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <Link to="/portfolio" className="hover:text-veryDarkBlue">
            Portfolio
          </Link>
          <Link to="/about" className="hover:text-veryDarkBlue">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-veryDarkBlue">
            Contact
          </Link>
          <Link to="/portfolio">
            <button className="flex items-center gap-4 bg-veryDarkBlue p-4 text-white md:absolute -right-24 bottom-8 hover:bg-darkGrey">
              See our portfolio
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </button>
          </Link>
        </footer>
      </main>
    </>
  );
}
