import React from "react";
import FollwMe from "@/app/components/follwMe";
import "./style.css";
import AboutSours from "./sours";

export default function About() {
  const { title1, title2, title3, title4, part1, part2, part3, part4 } =
    AboutSours.text;

  return (
    <div className=" bg-mainWhite dark:bg-main flex flex-col lg:flex-row min-h-[100vh] ">
      <div className=" order-2 lg:order-1 lg:h-[100vh]">
        <FollwMe />
      </div>
      <div className=" w-full  order-1 xl:order-2 flex flex-wrap *:w-full content-start">
        <div className=" h-[150px] flex items-center text-[40px] text-white font-cormorant2 px-4 xl:px-0 ">
          <div className=" text-[50px] text-black dark:text-white font-cormorant2 pt-16 pb-4 lg:ml-16  border-b border-b-black dark:border-b-borderPage  w-full lg:w-[60%]">
            About Me
          </div>
        </div>
        <div className=" flex *:w-full flex-wrap py-2">
          <div className=" lg:px-24 2xl:px-48 flex flex-wrap lg:flex-nowrap ">
            <div className=" w-full lg:w-[40%] flex items-center lg:py-20">
              <div className=" text-black dark:text-white py-9 lg:py-0 px-4 lg:px-0 mt-16 lg:mt-0 font-cormorant2 text-[30px]">
                {title1}
              </div>
            </div>
            <div className=" w-full lg:w-[60%] lg:py-20 flex items-center">
              <div className=" text-black dark:text-white py-4 lg:py-0 px-4 lg:px-0 text-justify tracking-tight w-full">
                {part1.text}
              </div>
            </div>
          </div>
          <div className=" lg:px-24 2xl:px-48 flex flex-wrap lg:flex-nowrap ">
            <div className=" w-full lg:w-[40%] flex items-center lg:py-20">
              <div className=" text-black dark:text-white py-9 lg:py-0 px-4 lg:px-0 mt-16 lg:mt-0 font-cormorant2 text-[30px]">
                {title2}
              </div>
            </div>
            <div className=" w-full lg:w-[60%] lg:py-20 flex items-center">
              <div className=" text-black dark:text-white py-4 lg:py-0 px-4 lg:px-0 text-justify tracking-tight  w-full">
                <div className="text-black dark:text-white w-full space-y-4">
                  <div className="text-white w-full space-y-4">
                    <div className="flex justify-between border-b border-b-black dark:border-b-borderPage pb-2">
                      <span className=" text-black dark:text-white">
                        {part2.title}
                      </span>
                      <span className=" text-black dark:text-white">
                        {part2.name}
                      </span>
                      <span className=" text-black dark:text-white">
                        {part2.year}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-b-black dark:border-b-borderPage pb-2">
                      <span className=" text-black dark:text-white">
                        {part2.title1}
                      </span>
                      <span className=" text-black dark:text-white">
                        {part2.name1}
                      </span>
                      <span className=" text-black dark:text-white">
                        {part2.year1}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-b-black dark:border-b-borderPage pb-2">
                      <span className=" text-black dark:text-white">
                        {part2.title2}
                      </span>
                      <span className=" text-black dark:text-white">
                        {part2.name2}
                      </span>
                      <span className=" text-black dark:text-white">
                        {part2.year2}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-b-black dark:border-b-borderPage pb-2">
                      <span className=" text-black dark:text-white">
                        {part2.title3}
                      </span>
                      <span className=" text-black dark:text-white">
                        {part2.name3}
                      </span>
                      <span className=" text-black dark:text-white">
                        {part2.year3}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-b-black dark:border-b-borderPage pb-2">
                      <span className=" text-black dark:text-white">
                        {part2.title4}
                      </span>
                      <span className=" text-black dark:text-white">
                        {part2.name4}
                      </span>
                      <span className=" text-black dark:text-white">
                        {part2.year4}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:px-24 2xl:px-48 flex flex-wrap lg:flex-nowrap ">
            <div className=" w-full lg:w-[40%] flex items-center lg:py-20">
              <div className=" text-black dark:text-white py-9 lg:py-0 px-4 lg:px-0 mt-16 lg:mt-0 font-cormorant2 text-[30px]">
                {title3}
              </div>
            </div>
            <div className=" w-full lg:w-[60%] lg:py-20 flex items-center">
              <div className=" text-black dark:text-white py-4 lg:py-0 px-4 lg:px-0 text-justify tracking-tight w-full">
                <div className="container">
                  <div className="skill-box">
                    <span className="title text-black dark:text-white">
                      {part3.t1}
                    </span>

                    <div className="skill-bar bg-slate-300 dark:bg-zinc-800">
                      <span className="skill-per javascript bg-black dark:bg-white">
                        <span className="tooltip before:bg-black before:dark:bg-white  bg-black dark:bg-white text-white dark:text-black">
                          {part3.p1}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="skill-box">
                    <span className="title text-black dark:text-white">
                      {part3.t2}
                    </span>

                    <div className="skill-bar bg-slate-300 dark:bg-zinc-800">
                      <span className="skill-per react bg-black dark:bg-white">
                        <span className="tooltip before:bg-black before:dark:bg-white  bg-black dark:bg-white text-white dark:text-black">
                          {part3.p2}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title text-black dark:text-white">
                      {part3.t3}
                    </span>

                    <div className="skill-bar bg-slate-300 dark:bg-zinc-800">
                      <span className="skill-per next bg-black dark:bg-white">
                        <span className="tooltip before:bg-black before:dark:bg-white  bg-black dark:bg-white text-white dark:text-black">
                          {part3.p3}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box ">
                    <span className="title text-black dark:text-white">
                      {part3.t4}
                    </span>
                    <div className="skill-bar bg-slate-300 dark:bg-zinc-800">
                      <span className="skill-per html bg-black dark:bg-white">
                        <span className="tooltip before:bg-black before:dark:bg-white  bg-black dark:bg-white text-white dark:text-black">
                          {part3.p4}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title text-black dark:text-white">
                      {part3.t5}
                    </span>

                    <div className="skill-bar bg-slate-300 dark:bg-zinc-800">
                      <span className="skill-per css bg-black dark:bg-white">
                        <span className="tooltip before:bg-black before:dark:bg-white  bg-black dark:bg-white text-white dark:text-black">
                          {part3.p5}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="skill-box">
                    <span className="title text-black dark:text-white">
                      {part3.t6}
                    </span>

                    <div className="skill-bar bg-slate-300 dark:bg-zinc-800">
                      <span className="skill-per tailwind bg-black dark:bg-white">
                        <span className="tooltip before:bg-black before:dark:bg-white  bg-black dark:bg-white text-white dark:text-black">
                          {part3.p6}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:px-24 2xl:px-48 flex flex-wrap lg:flex-nowrap ">
            <div className=" w-full lg:w-[40%] flex items-center lg:py-20">
              <div className=" text-black dark:text-white py-9 lg:py-0 px-4 lg:px-0 mt-16 lg:mt-0 font-cormorant2 text-[30px]">
                {title4}
              </div>
            </div>
            <div className=" w-full lg:w-[60%] lg:py-20 flex items-center">
              <div className=" text-black dark:text-white py-4 lg:py-0 px-4 lg:px-0 text-justify tracking-tight w-full">
                <div className="text-black dark:text-white space-y-8 w-full px-4 lg:px-0">
                  {/* Service Item 1 */}
                  <div>
                    <h3 className="text-lg font-semibold border-b border-b-black dark:border-b-borderPage border-white pb-1">
                      {part4.title1}
                    </h3>
                    <p className="mt-2 text-sm text-black dark:text-white">
                      {part4.text1}
                    </p>
                  </div>

                  {/* Service Item 2 */}
                  <div>
                    <h3 className="text-lg font-semibold border-b border-b-black dark:border-b-borderPage border-white pb-1">
                      {part4.title2}
                    </h3>
                    <p className="mt-2 text-sm text-black dark:text-white">
                      {part4.text2}
                    </p>
                  </div>

                  {/* Service Item 3 */}
                  <div>
                    <h3 className="text-lg font-semibold border-b border-b-black dark:border-b-borderPage border-white pb-1">
                      {part4.title3}
                    </h3>
                    <p className="mt-2 text-sm text-black dark:text-white">
                      {part4.text3}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold border-b border-b-black dark:border-b-borderPage border-white pb-1">
                      {part4.title4}
                    </h3>
                    <p className="mt-2 text-sm text-black dark:text-white">
                      {part4.text4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
