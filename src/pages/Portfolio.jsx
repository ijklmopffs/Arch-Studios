import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import seraph from "../assets/portfolio/desktop/image-seraph.jpg";
import seraphTablet from "../assets/portfolio/tablet/image-seraph.jpg";
import seraphMobile from "../assets/portfolio/mobile/image-seraph.jpg";
import eebox from "../assets/portfolio/desktop/image-eebox.jpg";
import eeboxTablet from "../assets/portfolio/tablet/image-eebox.jpg";
import eeboxMobile from "../assets/portfolio/mobile/image-eebox.jpg";
import federal from "../assets/portfolio/desktop/image-federal.jpg";
import federalTablet from "../assets/portfolio/tablet/image-federal.jpg";
import federalMobile from "../assets/portfolio/mobile/image-federal.jpg";
import delsol from "../assets/portfolio/desktop/image-del-sol.jpg";
import delsolTablet from "../assets/portfolio/tablet/image-del-sol.jpg";
import delsolMobile from "../assets/portfolio/mobile/image-del-sol.jpg";
import prototype from "../assets/portfolio/desktop/image-prototype.jpg";
import prototypeTablet from "../assets/portfolio/tablet/image-prototype.jpg";
import prototypeMobile from "../assets/portfolio/mobile/image-prototype.jpg";
import btower from "../assets/portfolio/desktop/image-228b.jpg";
import btowerTablet from "../assets/portfolio/tablet/image-228b.jpg";
import btowerMobile from "../assets/portfolio/mobile/image-228b.jpg";
import edelweiss from "../assets/portfolio/desktop/image-edelweiss.jpg";
import edelweissTablet from "../assets/portfolio/tablet/image-edelweiss.jpg";
import edelweissMobile from "../assets/portfolio/mobile/image-edelweiss.jpg";
import netcry from "../assets/portfolio/desktop/image-netcry.jpg";
import netcryTablet from "../assets/portfolio/tablet/image-netcry.jpg";
import netcryMobile from "../assets/portfolio/mobile/image-netcry.jpg";
import hypers from "../assets/portfolio/desktop/image-hypers.jpg";
import hypersTablet from "../assets/portfolio/tablet/image-hypers.jpg";
import hypersMobile from "../assets/portfolio/mobile/image-hypers.jpg";
import svix from "../assets/portfolio/desktop/image-sxiv.jpg";
import svixTablet from "../assets/portfolio/tablet/image-sxiv.jpg";
import svixMobile from "../assets/portfolio/mobile/image-sxiv.jpg";
import trinity from "../assets/portfolio/desktop/image-trinity.jpg";
import trinityTablet from "../assets/portfolio/tablet/image-trinity.jpg";
import trinityMobile from "../assets/portfolio/mobile/image-trinity.jpg";
import paramour from "../assets/portfolio/desktop/image-paramour.jpg";
import paramourTablet from "../assets/portfolio/tablet/image-paramour.jpg";
import paramourMobile from "../assets/portfolio/mobile/image-paramour.jpg";
import Footer from "../components/Footer";

const portfolioArray = [
  {
    id: 0,
    imgSrc: seraph,
    imgSrcTablet: seraphTablet,
    imgSrcMobile: seraphMobile,
    alt: "project seraph",
    title: "Seraph Station",
    timeline: "September 2019",
  },
  {
    id: 1,
    imgSrc: eebox,
    imgSrcTablet: eeboxTablet,
    imgSrcMobile: eeboxMobile,
    alt: "eebox building",
    title: "Eebox Building",
    timeline: "August 2017",
  },
  {
    id: 2,
    imgSrc: federal,
    imgSrcTablet: federalTablet,
    imgSrcMobile: federalMobile,
    alt: "federal ii tower",
    title: "Federal II Tower",
    timeline: "March 2017",
  },
  {
    id: 3,
    imgSrc: delsol,
    imgSrcTablet: delsolTablet,
    imgSrcMobile: delsolMobile,
    alt: "project del sol",
    title: "Project Del Sol",
    timeline: "January 2016",
  },
  {
    id: 4,
    imgSrc: prototype,
    imgSrcTablet: prototypeTablet,
    imgSrcMobile: prototypeMobile,
    alt: "le prototype",
    title: "Le Prototype",
    timeline: "October 2015",
  },
  {
    id: 5,
    imgSrc: btower,
    imgSrcTablet: btowerTablet,
    imgSrcMobile: btowerMobile,
    alt: "228b tower",
    title: "228B Tower",
    timeline: "April 2015",
  },
  {
    id: 6,
    imgSrc: edelweiss,
    imgSrcTablet: edelweissTablet,
    imgSrcMobile: edelweissMobile,
    alt: "grand edelweiss tower",
    title: "Grand Edelweiss Hotel",
    timeline: "December 2013",
  },
  {
    id: 7,
    imgSrc: netcry,
    imgSrcTablet: netcryTablet,
    imgSrcMobile: netcryMobile,
    alt: "netcry tower",
    title: "Netcry Tower",
    timeline: "August 2012",
  },
  {
    id: 8,
    imgSrc: hypers,
    imgSrcTablet: hypersTablet,
    imgSrcMobile: hypersMobile,
    alt: "hypers",
    title: "Hypers",
    timeline: "January 2012",
  },
  {
    id: 9,
    imgSrc: svix,
    imgSrcTablet: svixTablet,
    imgSrcMobile: svixMobile,
    alt: "svix tower",
    title: "SVIX Tower",
    timeline: "March 2011",
  },
  {
    id: 10,
    imgSrc: trinity,
    imgSrcTablet: trinityTablet,
    imgSrcMobile: trinityMobile,
    alt: "trinity bank tower",
    title: "Trinity bank Tower",
    timeline: "September 2010",
  },
  {
    id: 11,
    imgSrc: paramour,
    imgSrcTablet: paramourTablet,
    imgSrcMobile: paramourMobile,
    alt: "project paramour",
    title: "Project Paramour",
    timeline: "February 2008",
  },
];

export default function Portfolio() {
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
          <span className="mb-2 rotate-90 text-lg">P</span>
          <span className="mb-2 rotate-90 text-lg">O</span>
          <span className="mb-2 rotate-90 text-lg">R</span>
          <span className="mb-2 rotate-90 text-lg">T</span>
          <span className="mb-2 rotate-90 text-lg">F</span>
          <span className="mb-2 rotate-90 text-lg">O</span>
          <span className="mb-2 rotate-90 text-lg">L</span>
          <span className="mb-2 rotate-90 text-lg">I</span>
          <span className="mb-2 rotate-90 text-lg">O</span>
        </div>
      </motion.div>

      <main className="lg:max-w-[1110px] mx-auto md:max-w-[573px]">
        <Navbar />

        <section className="flex flex-wrap gap-4 my-28 justify-center md:justify-normal">
          {portfolioArray.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              key={item.id}
              className="relative"
            >
              <img
                src={item.imgSrc}
                alt={item.alt}
                className="hidden lg:block"
              />
              <img
                src={item.imgSrcTablet}
                alt={item.alt}
                className="hidden md:block lg:hidden"
              />
              <img
                src={item.imgSrcMobile}
                alt={item.alt}
                className="md:hidden"
              />
              <div className="absolute inset-0 bg-black opacity-30 w-[311px] md:w-auto"></div>

              <div className="text-start text-white absolute bottom-10 left-5 font-bold">
                <h3 className="text-3xl">{item.title}</h3>
                <p className="font-medium text-lg text-white/80">
                  {item.timeline}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

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
