import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EventDetail = ({
  imgSrc,
  title,
  description,
  imgSrcTablet,
  imgSrcMobile,
}) => {
  return (
    <motion.div>
      <div className="mb-0 md:my-16">
        <img src={imgSrc} alt="" className="hidden lg:block" />
        <img src={imgSrcTablet} alt="" className="hidden md:block lg:hidden" />
        <img src={imgSrcMobile} alt="" className="md:hidden" />
      </div>
      <div className="absolute inset-0 bg-black opacity-10 w-[375px] md:w-auto"></div>

      <div className="text-white text-start absolute left-12 bottom-56 md:bottom-80 lg:bottom-52 md:left-40 z-10">
        <h1 className="font-bold text-5xl md:text-8xl w-80 md:w-96 my-5">
          {title}
        </h1>
        <p className="font-medium text-lg w-96 md:w-[27rem] my-5">
          {description}
        </p>
        <Link to="/portfolio">
          <button className="flex items-center gap-4 bg-veryDarkBlue p-4 hover:bg-darkGrey">
            See our portfolio
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
              <g fill="none" fillRule="evenodd" stroke="white" strokeWidth="2">
                <path d="M15 1l9 9-9 9M0 10h24" />
              </g>
            </svg>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EventDetail;
