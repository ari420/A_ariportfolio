import React from "react";
import Image from "next/image";
import MovingTxt from "@/app/components/movingTxt";
import FollwMe from "@/app/components/follwMe";
import { useMouse } from "@/app/costoumHook/MouseContext/MouseContext";
import { usePage } from "@/app/costoumHook/CelectPageContext/PageCelector";

export default function Home() {
  const { setIsHovering } = useMouse();
  const { setSelectedPage } = usePage();

  return (
    <div className=" flex *:w-full *:lg:w-1/2 flex-wrap lg:flex-nowrap  text-white bg-mainWhite dark:bg-main w-full min-h-[100vh] ">
      <div className=" flex flex-wrap lg:flex-nowrap order-2 lg:order-1 justify-center  ">
        <div className="copmFollwMe order-2 lg:order-1 ">
          <FollwMe />
        </div>
        <div className=" w-full order-1 xl:order-2 flex flex-wrap justify-center content-center *:w-full  *:px-6 *:xl:px-20 ">
          <div className=" mt-8 xl:mt-0">
            <div className=" font-cormorant2 text-[35px] text-black dark:text-white">
              I&apos;m Arian Afsharian
            </div>
          </div>
          <div className=" mb-10">
            <div>
              <MovingTxt />
            </div>
          </div>
          <div>
            <div className=" font-cormorant1 text-[20px] tracking-tight text-justify  text-black dark:text-white">
              I turn pixels into purpose, building experiences that speak louder
              than words. This is not just design — it&apos;s legacy.
              Let&apos;s create something legendary.
            </div>
          </div>
          <div className=" ">
            <div className=" flex flex-wrap  mt-2 mb-16 *:xl:my-2 py-2">
              <div className="wrapper ">
                <button
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onClick={() => setSelectedPage("portfolio")} // ← this line is key
                  className={`p-1 xl:p-2 bg-black text-slate-400 dark:bg-white dark:text-black font-semibold `}
                >
                  My portfolio
                </button>
              </div>
              <div className="wrapper ">
                <button
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onClick={() => setSelectedPage("contact")} // ← this one too
                  className="bg-black text-slate-400 dark:bg-white dark:text-black p-1 ml-1 xl:ml-2 xl:p-2 font-semibold"
                >
                  contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full order-1 xl:order-2">
        <Image
          src="/a.jpg"
          alt="AriPhoto"
          layout="reintrinsic"
          height={1080}
          width={1920}
          className="w-full  object-cover contrast-125"
        />
      </div>
    </div>
  );
}
