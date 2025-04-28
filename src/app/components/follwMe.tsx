import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useMouse } from "@/app/costoumHook/MouseContext/MouseContext";

export default function FollwMe() {
  const { setIsHovering } = useMouse();

  return (
    <div className=" w-full h-[40px] mb-12 lg:mb-0 lg:h-full flex-wrap lg:w-[40px] items-center lg:content-center flex justify-center order-2 lg:order-1 ">
      <div className=" flex lg:flex-col gap-4 text-black dark:text-white  order-2 lg:order-1">
        <a
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          href="https://github.com/ari420"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex justify-center items-center "
        >
          <GitHubIcon
            className=" hover:text-red-700 transition"
            fontSize="small"
          />
        </a>
        <a
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          href="https://www.linkedin.com/in/arian-afsharian-7a3903156"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex justify-center items-center "
        >
          <LinkedInIcon
            className=" hover:text-blue-700 transition"
            fontSize="small"
          />
        </a>
        <a
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          href="https://www.instagram.com/component__shop?igsh=enRla3lxa3dzYXho"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex justify-center items-center "
        >
          <InstagramIcon
            className=" hover:text-pink-700 transition"
            fontSize="small"
          />
        </a>
      </div>
      <div className=" order-1 lg:order-2 flex items-center w-[60px] justify-center h-[40px] lg:w-[40px] lg:h-[100px]">
        <div className=" bg-black dark:bg-white h-[1px] w-[40px]  lg:w-[1px]  lg:h-[80px]"></div>
      </div>
      <div className=" lg:order-3 lg:-rotate-90 lg:mt-[30px]">
        <div className="lg:w-[100px] h-[40px] w-[80px]  flex items-center justify-center font-cormorant2 text-black dark:text-white">
          Follw Me
        </div>
      </div>
    </div>
  );
}
