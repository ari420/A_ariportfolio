"use client";

import React, { useEffect, useRef } from "react";
import FollwMe from "@/app/components/follwMe";
import { useMouse } from "@/app/costoumHook/MouseContext/MouseContext";
import "./style.css";
import projects from "./sours";

export default function Portfolio() {
  const { setIsHovering } = useMouse();
  const { sours } = projects;

  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const V = videoRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    V.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      V.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <div className="bg-mainWhite dark:bg-main flex flex-col lg:flex-row min-h-[100vh]">
      <div className="order-2 lg:order-1 lg:h-[100vh]">
        <FollwMe />
      </div>

      <div className="w-full order-1 xl:order-2 flex flex-wrap content-start *:w-full">
        {/* Header */}
        <div className="h-[150px] flex items-center text-[40px] text-white font-cormorant2 px-4 xl:px-0">
          <div className="text-[50px] text-black dark:text-white font-cormorant2 pt-16 pb-4 lg:ml-16 border-b border-b-black dark:border-b-borderPage w-full lg:w-[60%]">
            My Portfolio
          </div>
        </div>

        {/* GridPlace */}
        <div className="gridPlace py-1 px-6">
          <section className="px-4 py-10 md:py-16 lg:py-20 bg-mainWhite dark:bg-main">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-10">
                {sours.pro.map((project, index) => (
                  <div
                    key={project.id}
                    className="h-[360px] rounded-xl shadow-md"
                  >
                    <div className="card dark:bg-teal-950 bg-teal-200">
                      <div className="w-full">
                        <video
                          ref={(el) => {
                            if (el) videoRefs.current[index] = el;
                          }}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="none"
                          className="video"
                          src={project.image}
                        ></video>
                      </div>

                      <div className="card__content flex flex-col justify-between bg-slate-100 dark:bg-mainBorder">
                        <div className="*:text-black *:dark:text-white">
                          <p className="card__title font-cormorant1">
                            {project.title}
                          </p>
                          <p className="card__description text-justify tracking-tight text-[12px] md:text-[13px] lg:text-[14px]">
                            {project.description}
                          </p>
                        </div>
                        <a
                          onMouseEnter={() => setIsHovering(true)}
                          onMouseLeave={() => setIsHovering(false)}
                          className="Btn bg-black text-white dark:bg-white dark:text-black"
                          href={project.link as string}
                          target="_blank"
                        >
                          live demo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
