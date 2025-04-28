// app/page.tsx
"use client";
import React, { useState } from "react";
import "./globals.css";
import About from "@/app/roots/aboutMe/about";
import Contact from "@/app/roots/contact/contact";
import Portfolio from "@/app/roots/portfolio/portfolio";
import Home from "@/app/roots/home/home";
import useTheme from "./costoumHook/DarkLight/useTheme";
import { useMouse } from "@/app/costoumHook/MouseContext/MouseContext";
import { usePage } from "@/app/costoumHook/CelectPageContext/PageCelector";

export default function Main() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { selectedPage, setSelectedPage } = usePage();
  const { theme, toggleTheme } = useTheme();
  const { mousePosition, setMousePosition, isHovering, setIsHovering } =
    useMouse();

  return (
    <main
      onMouseMove={(e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }}
      className=" relative w-full h-[100vh] overflow-hidden  "
    >
      {/* Borders */}
      <div className=" absolute z-50 bg-mainBorder w-full h-[11px] left-0 top-0"></div>
      <div className=" absolute z-50 bg-mainBorder w-full h-[10px] bottom-0 left-0"></div>
      <div className=" absolute z-50 bg-mainBorder h-full w-[10px] left-0 top-0"></div>
      <div className=" absolute z-50 bg-mainBorder h-full w-[10px] right-0 top-0"></div>
      {/* Coustom mous*/}
      <div
        className={`pointer-events-none absolute z-40 rounded-full bg-black dark:bg-white transition-all opacity-40 duration-300 ease-out ${
          isHovering ? "w-[60px] h-[60px]" : "w-[20px] h-[20px]"
        }`}
        style={{
          transform: `translate(${
            mousePosition.x - (isHovering ? 30 : 10)
          }px, ${mousePosition.y - (isHovering ? 30 : 10)}px)`,
        }}
      />

      <div
        className={`pointer-events-none absolute z-40  rounded-full bg-red-700 hover:duration-200 ${
          isHovering ? "w-[12px] h-[12px]" : "w-[20px] h-[20px]"
        }`}
        style={{
          transform: `translate(${mousePosition.x - (isHovering ? 6 : 10)}px, ${
            mousePosition.y - (isHovering ? 6 : 10)
          }px)`,
        }}
      />
      {/* Center box */}
      <div
        style={{ width: "calc(100% - 20px)", height: "calc(100% - 20px)" }}
        className=" absolute z-20 bg-main top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "
      >
        <div className=" relative w-full h-full">
          <div className="absolute inset-0 bg-main z-10 overflow-auto">
            <Home />
          </div>

          {/* Portfolio */}
          <div
            className={`absolute z-20 w-full h-full transition-all duration-500 overflow-auto ${
              selectedPage === "portfolio" ? "top-0" : "top-[100%]"
            }`}
          >
            <Portfolio />
          </div>

          {/* About Me */}
          <div
            className={`absolute z-30 w-full h-full transition-all duration-500 overflow-auto ${
              selectedPage === "about" ? "top-0" : "top-[100%]"
            }`}
          >
            <About />
          </div>

          {/* Contact */}
          <div
            className={`absolute z-40 w-full h-full transition-all duration-500 overflow-auto ${
              selectedPage === "contact" ? "top-0" : "top-[100%]"
            }`}
          >
            <Contact />
          </div>
        </div>
      </div>
      {/* Logo */}
      <div className=" absolute z-30 left-[10px] top-[10px] w-[90px] h-[40px] bg-mainBorder">
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className=" w-full h-full text-white text-[25px] text-center font-cormorant2 "
          onClick={() => setSelectedPage("home")}
        >
          Arian
        </div>
      </div>
      {/* Header Right: Theme + Menu */}
      <div className=" absolute flex z-30 right-[10px] top-[10px] w-[100px] h-[40px] bg-mainBorder text-white text-[20px]">
        {/* Theme Toggle */}
        <div className=" flex items-center justify-center w-[40px] h-full">
          {theme === "dark" ? (
            <>
              <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={toggleTheme}
                className="  bg-white dark:bg-black border flex justify-end w-[16px] h-[16px] rounded-[100px] overflow-hidden "
              >
                <div className=" bg-black dark:bg-white w-[11px] h-[16px] rounded-l-[100%]"></div>
              </div>
            </>
          ) : (
            <>
              <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={toggleTheme}
                className="  bg-white dark:bg-black border flex justify-end w-[16px] h-[16px] rounded-[100px] overflow-hidden "
              >
                <div className=" bg-black dark:bg-white w-[11px] h-[16px] rounded-l-[100%]"></div>
              </div>
            </>
          )}
        </div>
        {/* Menu Button */}
        <div className=" bg-mainBorder w-[60px] h-full flex items-center justify-center">
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex flex-col justify-center items-center relative w-[30px] h-[30px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <>
                <div className="bg-white w-full h-[2px] transition-all duration-300 rotate-45 "></div>
                <div className="bg-white w-full h-[2px] transition-all duration-300 -rotate-45 -mt-[2px]"></div>
              </>
            ) : (
              <>
                <div className="bg-white w-full h-[2px] transition-all duration-300"></div>
                <div className="bg-white w-full h-[2px] transition-all duration-300 mt-1"></div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Slide Menu */}
      <div
        style={{ height: "calc(100% - 60px)" }}
        className={`absolute flex flex-col items-center bg-mainWhite dark:bg-main z-20 w-full h-[100vh] left-0 transition-all duration-500 ${
          menuOpen ? "top-0" : "top-[-100%]"
        }`}
      >
        <div className=" w-full h-[10px] "></div>
        <div
          style={{ width: "calc(100% - 20px)", height: "calc(100%)" }}
          className="flex items-center justify-center "
        >
          <div className=" *:text-[40px] *:md:text-[60px] *:2xl:text-[80px] *:text-center *:xl:text-left *:font-cormorant2 ">
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => {
                setSelectedPage("home");
                setMenuOpen(false);
              }}
              className="hover:text-red-600 dark:hover:text-red-600 text-black dark:text-white transition-all duration-300 "
            >
              Home
            </div>
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => {
                setSelectedPage("portfolio");
                setMenuOpen(false);
              }}
              className="hover:text-red-600 dark:hover:text-red-600 text-black dark:text-white transition-all duration-300"
            >
              Portfolio
            </div>
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => {
                console.log("Clicked About");
                setSelectedPage("about");
                setMenuOpen(false);
              }}
              className="hover:text-red-600 dark:hover:text-red-600 text-black dark:text-white transition-all duration-300"
            >
              About Me
            </div>
            <div
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => {
                setSelectedPage("contact");
                setMenuOpen(false);
              }}
              className="hover:text-red-600 dark:hover:text-red-600 text-black dark:text-white transition-all duration-300"
            >
              Contact
            </div>
          </div>
        </div>
      </div>
      {/* Slide ariInfoMenu */}
      <div
        className={`absolute flex justify-center bg-mainBorder z-20 w-full h-[100px] xl:h-[60px] left-0 transition-all duration-500 ${
          menuOpen ? "bottom-0" : "bottom-[-100%]"
        }`}
      >
        <div
          style={{ width: "calc(100% - 20px)", height: "calc(100% - 10px)" }}
          className="flex flex-col md:flex-row *:my-1 md:my-0 items-center justify-between "
        >
          <div className=" flex items-center justify-between  *:mx-2 *:p-1 *:md:p-1 md:ml-2 *:text-white">
            <a
              href="https://www.linkedin.com/in/arian-afsharian-7a3903156"
              target="_blank"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ari420"
              target="_blank"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Github
            </a>
            <a
              href="https://www.instagram.com/component__shop?igsh=enRla3lxa3dzYXho"
              target="_blank"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Instagram
            </a>
          </div>
          <div className=" p-1 md:mr-2 text-white ">copyright_by __ Ari__2025</div>
        </div>
      </div>
    </main>
  );
}
