import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import EventDetail from "../components/EventDetails";
import paramour from "../assets/home/desktop/image-hero-paramour.jpg";
import paramourTablet from "../assets/home/tablet/image-hero-paramour.jpg";
import paramourMobile from "../assets/home/mobile/image-hero-paramour.jpg";
import seraph from "../assets/home/desktop/image-hero-seraph.jpg";
import seraphTablet from "../assets/home/tablet/image-hero-seraph.jpg";
import seraphMobile from "../assets/home/mobile/image-hero-seraph.jpg";
import federal from "../assets/home/desktop/image-hero-federal.jpg";
import federalTablet from "../assets/home/tablet/image-hero-federal.jpg";
import federalMobile from "../assets/home/mobile/image-hero-federal.jpg";
import trinity from "../assets/home/desktop/image-hero-trinity.jpg";
import trinityTablet from "../assets/home/tablet/image-hero-trinity.jpg";
import trinityMobile from "../assets/home/mobile/image-hero-trinity.jpg";
import welcome from "../assets/home/desktop/image-welcome.jpg";
import ideas from "../assets/home/desktop/image-small-team.jpg";
import ideasTablet from "../assets/home/tablet/image-small-team.jpg";
import ideasMobile from "../assets/home/mobile/image-small-team.jpg";
import first from "../assets/portfolio/desktop/image-del-sol.jpg";
import firstTablet from "../assets/portfolio/tablet/image-del-sol.jpg";
import firstMobile from "../assets/portfolio/mobile/image-del-sol.jpg";
import second from "../assets/portfolio/desktop/image-228b.jpg";
import secondTablet from "../assets/portfolio/tablet/image-228b.jpg";
import secondMobile from "../assets/portfolio/mobile/image-228b.jpg";
import third from "../assets/portfolio/desktop/image-prototype.jpg";
import thirdTablet from "../assets/portfolio/tablet/image-prototype.jpg";
import thirdMobile from "../assets/portfolio/mobile/image-prototype.jpg";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState("01");

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
          <span className="mb-2 rotate-90 text-lg">H</span>
          <span className="mb-2 rotate-90 text-lg">O</span>
          <span className="mb-2 rotate-90 text-lg">M</span>
          <span className="mb-2 rotate-90 text-lg">E</span>
        </div>
      </motion.div>
      <main className="lg:max-w-[1110px] mx-auto md:max-w-[573px]">
        <Navbar />
        <section className="relative">
          {selectedEvent === "01" && (
            <EventDetail
              imgSrc={paramour}
              imgSrcTablet={paramourTablet}
              imgSrcMobile={paramourMobile}
              title="Project Paramour"
              description="Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
            />
          )}
          {selectedEvent === "02" && (
            <EventDetail
              imgSrc={seraph}
              imgSrcTablet={seraphTablet}
              imgSrcMobile={seraphMobile}
              title="Seraph Station"
              description="The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations."
            />
          )}
          {selectedEvent === "03" && (
            <EventDetail
              imgSrc={federal}
              imgSrcTablet={federalTablet}
              imgSrcMobile={federalMobile}
              title="Federal II Tower"
              description="A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches."
            />
          )}

          {selectedEvent === "04" && (
            <EventDetail
              imgSrc={trinity}
              imgSrcTablet={trinityTablet}
              imgSrcMobile={trinityMobile}
              title="Trinity Bank Tower"
              description="Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives."
            />
          )}

          <div className="hidden lg:flex items-center bg-white absolute bottom-0 w-[240px] -left-20 font-bold text-lg text-mediumGrey">
            <button
              onClick={() => setSelectedEvent("01")}
              className={
                selectedEvent === "01"
                  ? "w-20 h-20 p-8 bg-veryDarkBlue text-white"
                  : "w-20 h-20 p-8 hover:bg-darkGrey"
              }
            >
              01
            </button>
            <button
              onClick={() => setSelectedEvent("02")}
              className={
                selectedEvent === "02"
                  ? "w-20 h-20 p-8 bg-veryDarkBlue text-white"
                  : "w-20 h-20 p-8 hover:bg-veryLightGrey"
              }
            >
              02
            </button>
            <button
              onClick={() => setSelectedEvent("03")}
              className={
                selectedEvent === "03"
                  ? "w-20 h-20 p-8 bg-veryDarkBlue text-white"
                  : "w-20 h-20 p-8 hover:bg-veryLightGrey"
              }
            >
              03
            </button>
            <button
              onClick={() => setSelectedEvent("04")}
              className={
                selectedEvent === "04"
                  ? "w-20 h-20 p-8 bg-veryDarkBlue text-white"
                  : "w-20 h-20 p-8 hover:bg-veryLightGrey"
              }
            >
              04
            </button>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="hidden md:block text-start lg:text-center font-bold md:text-[120px] lg:text-[250px] text-veryLightGrey">
            Welcome
          </h2>
          <div className="p-4 flex items-start lg:items-center lg:justify-end gap-20 lg:relative lg:mt-[-11.5rem] -z-10">
            <div className="text-start font-medium text-lg text-darkGrey md:w-[30rem]">
              <h3 className="font-bold text-5xl md:text-7xl text-veryDarkBlue w-80 md:w-auto">
                Welcome to Arch Studio
              </h3>
              <p className="my-10">
                We have a unique network and skillset to help bring your
                projects to life. Our small team of highly skilled individuals
                combined with our large network put us in a strong position to
                deliver exceptional results.
              </p>
              <p>
                Over the past 10 years, we have worked on all kinds of projects.
                From stations to high-rise buildings, we create spaces that
                inspire and delight.
              </p>
              <p className="my-10">
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony
                the surrounding area to create truly stunning projects that will
                stand the test of time.
              </p>
            </div>
            <div>
              <img src={welcome} alt="" className="hidden lg:block" />
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="my-40 relative"
        >
          <div className="my-16">
            <img src={ideas} alt="" className="hidden lg:block" />
            <img
              src={ideasTablet}
              alt=""
              className="hidden md:block lg:hidden"
            />
            <img src={ideasMobile} alt="" className="md:hidden" />
          </div>
          <div className="absolute inset-0 bg-black opacity-50 w-[375px] md:w-auto"></div>

          <div className="text-white text-start absolute bottom-56 left-20 z-10">
            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl w-72 md:w-96 lg:w-[30rem] my-5">
              Small team, big ideas
            </h1>
            <Link to="/portfolio">
              <button className="flex items-center gap-4 bg-veryDarkBlue p-4 hover:bg-darkGrey">
                About Us
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
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-center justify-between text-white font-bold text-lg p-4">
            <h2 className="font-bold text-5xl md:text-7xl text-veryDarkBlue">
              Featured
            </h2>
            <Link to="/portfolio">
              <button className="hidden md:flex items-center gap-4 bg-veryDarkBlue p-4 hover:bg-darkGrey">
                See all
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
          </div>

          <div className="flex flex-col lg:flex-row gap-10 md:gap-2 lg:gap-0 items-center justify-between my-20">
            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <img src={first} alt="" className="hidden lg:block" />
              <img
                src={firstTablet}
                alt=""
                className="hidden md:block lg:hidden"
              />
              <img src={firstMobile} alt="" className="md:hidden" />
              <p className="hidden md:block font-bold text-[250px] text-white absolute md:-top-8 lg:top-0 right-3 lg:right-[-1.2rem] mr-0 opacity-50">
                1
              </p>
              <div className="text-start absolute bottom-10 left-5 text-white">
                <h3 className="font-bold text-3xl">Project Del Sol</h3>
                <Link to="/portfolio">
                  <p className="font-medium text-lg text-white/90">
                    View All Projects
                  </p>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <img src={second} alt="" className="hidden lg:block" />
              <img
                src={secondTablet}
                alt=""
                className="hidden md:block lg:hidden"
              />
              <img src={secondMobile} alt="" className="md:hidden" />
              <p className="hidden md:block font-bold text-[250px] text-white absolute md:-top-8 lg:top-0 right-3 lg:right-[-1.2rem] mr-0 opacity-50">
                2
              </p>
              <div className="text-start absolute bottom-10 left-5 text-white">
                <h3 className="font-bold text-3xl">228B Tower</h3>
                <Link to="/portfolio">
                  <p className="font-medium text-lg text-white/90">
                    View All Projects
                  </p>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <img src={third} alt="" className="hidden lg:block" />
              <img
                src={thirdTablet}
                alt=""
                className="hidden md:block lg:hidden"
              />
              <img src={thirdMobile} alt="" className="md:hidden" />
              <p className="hidden md:block font-bold text-[250px] text-white absolute md:-top-8 lg:top-0 right-3 lg:right-[-1.2rem] mr-0 opacity-50">
                3
              </p>
              <div className="text-start absolute bottom-10 left-5 text-white">
                <h3 className="font-bold text-3xl">Le Prototype</h3>
                <Link to="/portfolio">
                  <p className="font-medium text-lg text-white/90">
                    View All Projects
                  </p>
                </Link>
              </div>
            </div>

            <Link to="/portfolio" className="w-[311px] md:hidden">
              <button className="md:hidden w-full text-white flex items-center justify-center gap-4 bg-veryDarkBlue p-4 hover:bg-darkGrey">
                See all
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
          </div>
        </motion.section>

        <Footer />
      </main>

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
              <g fill="none" fillRule="evenodd" stroke="white" strokeWidth="2">
                <path d="M15 1l9 9-9 9M0 10h24" />
              </g>
            </svg>
          </button>
        </Link>
      </footer>
    </>
  );
}
