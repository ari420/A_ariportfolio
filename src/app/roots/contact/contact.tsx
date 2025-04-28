import React from "react";
import FollwMe from "@/app/components/follwMe";
import { useMouse } from "@/app/costoumHook/MouseContext/MouseContext";
import ContactSours from "./sours";

export default function Contact() {
  const { setIsHovering } = useMouse();
  const { Gmail, Phone, Text, title } = ContactSours.text;

  return (
    <div className=" bg-mainWhite dark:bg-main flex flex-col lg:flex-row min-h-[100vh] ">
      <div className=" order-2 lg:order-1 lg:h-[100vh] ">
        <FollwMe />
      </div>
      <div className=" w-full order-1 xl:order-2 flex flex-wrap *:w-full ">
        <div className=" h-[150px] flex items-center text-[40px] text-white font-cormorant2 px-4 xl:px-0 ">
          <div className=" text-[50px] text-black dark:text-white font-cormorant2 pt-16 pb-4 lg:ml-16  border-b border-b-black dark:border-b-borderPage w-full lg:w-[60%]">
            Contact Me
          </div>
        </div>
        <div>
          <div className="w-full flex flex-wrap lg:flex-nowrap lg:px-24 2xl:px-48 py-16 text-white">
            {/* Left side: Contact Info */}
            <div className="w-full lg:w-1/2 px-4 lg:pr-12 mb-8 lg:mb-0">
              <h2 className="text-2xl font-cormorant2 mb-4 text-black dark:text-white">
                {title}
              </h2>
              <p className="mb-2">
                <strong className=" text-black dark:text-white">Email:</strong>{" "}
                <a
                  href="mailto:name@domain.com"
                  className="underline text-black dark:text-white"
                >
                  {Gmail}
                </a>
              </p>
              <p className="mb-4 text-black dark:text-white">
                <strong className=" text-black dark:text-white">Phone:</strong>{" "}
                {Phone}
              </p>
              <p className="text-black dark:text-white text-justify tracking-tight">
                {Text}
              </p>
            </div>

            {/* Right side: Contact Form */}
            <div className="w-full lg:w-1/2 px-4">
              <form className="space-y-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border text-black dark:text-white border-b-black dark:border-b-borderPage placeholder:text-black placeholder:dark:text-slate-300 bg-transparent px-4 py-2 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border text-black dark:text-white border-b-black dark:border-b-borderPage placeholder:text-black placeholder:dark:text-slate-300 bg-transparent px-4 py-2  outline-none"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full border text-black dark:text-white border-b-black dark:border-b-borderPage placeholder:text-black placeholder:dark:text-slate-300 bg-transparent px-4 py-2  outline-none"
                ></textarea>
                <div className="wrapper">
                  <button
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    type="submit"
                    className=" bg-black text-slate-400 dark:bg-white dark:text-black p-2  font-semibold"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
