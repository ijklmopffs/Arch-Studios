import twitter from "../assets/icons/twitter2.svg";
import linkedin from "../assets/icons/linkedin2.svg";
import { useState } from "react";

const TeamMember = ({ imageSrc, name, position }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-veryDarkBlue relative cursor-pointer"
    >
      {isHovered && (
        <div className="absolute inset-0 bg-black opacity-30 w-[350px] h-[320px] md:w-auto">
          <div className="w-fit absolute top-2/4 left-[40%] flex items-center gap-8">
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      )}

      <img
        src={imageSrc}
        alt={name}
        className="md:w-[280px] md:h-[256px] lg:w-auto lg:h-auto"
      />
      <h2 className="text-3xl font-bold">{name}</h2>
      <p className="font-medium text-lg">{position}</p>
    </div>
  );
};

export default TeamMember;
