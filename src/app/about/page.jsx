"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import skSet from "./Skill";
import Brain from "@/components/brain";
const Aboutpage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, { once: true });
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  // const isSkillRefInView = useInView(ExperienceRef, { once: true });
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full lg:flex overflow-scroll" ref={containerRef}>
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Biography */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              eum, incidunt architecto, tempora commodi voluptatibus totam ex
              dolorem at sed cupiditate fugit nesciunt rem quaerat sit dolor,
              praesentium recusandae repellendus?
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>
            {/* sign */}
            <div className="self-end">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt"
                height="120.000000pt"
                viewBox="0 0 300.000000 120.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                {" "}
                <g
                  transform="translate(0.000000,120.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  {" "}
                  <path d="M1451 881 c-64 -60 -77 -152 -26 -185 30 -20 32 -13 6 20 -16 20 -17 31 -10 65 15 67 58 113 88 95 11 -7 33 -124 29 -156 -4 -34 23 -230 32 -230 4 0 10 28 12 63 9 112 68 204 76 119 4 -41 25 -58 55 -45 17 8 28 7 42 -4 12 -9 32 -12 52 -9 35 5 40 -3 39 -69 -1 -45 19 -35 -231 -114 -234 -74 -235 -75 -239 -70 -5 6 -15 171 -16 262 0 83 -14 103 -25 35 -10 -68 -24 -104 -49 -127 -26 -24 -41 -15 -48 28 -5 39 -22 34 -40 -10 -15 -35 -20 -40 -32 -30 -8 7 -20 28 -26 47 -19 56 -37 43 -45 -31 -7 -66 -25 -90 -25 -35 0 38 -26 90 -44 90 -8 0 -29 -14 -46 -31 -17 -17 -32 -30 -34 -28 -2 2 -8 30 -14 62 -15 74 -46 145 -68 154 -23 9 -70 -47 -79 -93 -6 -36 9 -109 26 -120 18 -11 20 2 5 31 -16 31 -13 82 7 124 30 64 64 20 92 -118 15 -74 15 -86 1 -143 -15 -60 -13 -108 4 -108 11 0 18 31 26 115 6 62 11 74 41 104 43 43 56 33 63 -51 3 -34 10 -63 16 -65 13 -4 30 35 40 90 7 43 16 47 32 12 17 -37 41 -43 63 -14 18 22 20 23 30 7 16 -28 55 -22 81 12 29 39 33 27 33 -94 l0 -88 -80 -29 c-101 -36 -268 -81 -318 -85 -48 -4 -67 -15 -42 -24 23 -8 188 31 320 76 55 19 106 34 114 34 11 0 13 -18 9 -90 -2 -50 -1 -90 3 -90 10 0 18 49 22 129 l2 64 115 37 c253 83 345 109 352 102 4 -4 9 -62 10 -130 4 -170 23 -155 23 18 l0 133 125 43 c150 52 366 114 395 114 27 0 60 24 52 37 -7 11 -289 -71 -489 -143 -43 -15 -80 -25 -83 -22 -3 3 -5 41 -5 84 2 173 2 194 -4 210 -14 35 -26 -2 -26 -80 0 -83 -9 -106 -40 -106 -9 0 -26 9 -39 21 -21 20 -23 20 -41 4 -23 -20 -40 -12 -40 19 0 29 -20 86 -30 86 -14 0 -31 -28 -55 -87 -28 -68 -32 -61 -38 67 -4 105 -26 170 -57 170 -10 0 -32 -13 -49 -29z" />{" "}
                  <path d="M489 633 c-35 -5 -85 -60 -92 -100 -8 -40 21 -65 64 -56 16 3 42 0 59 -7 47 -19 39 -74 -19 -143 -15 -18 -16 -16 -26 24 -7 26 -21 50 -38 63 -25 18 -32 19 -72 8 -25 -7 -63 -23 -83 -37 -64 -42 -93 -133 -54 -168 21 -19 87 -23 97 -6 5 7 -4 8 -28 4 -28 -6 -39 -3 -56 14 -23 23 -26 37 -11 46 6 3 10 16 10 29 0 28 43 69 94 90 82 34 118 15 120 -62 1 -29 4 -52 7 -52 4 0 10 -11 13 -25 4 -14 10 -25 15 -25 6 0 6 12 1 29 -7 24 -4 33 17 53 30 28 63 90 63 118 0 32 -39 58 -97 66 -47 5 -53 9 -53 29 0 27 45 85 66 85 8 0 17 -7 20 -15 10 -24 26 -17 19 8 -5 17 -4 19 4 7 6 -8 8 -23 5 -32 -3 -10 -1 -18 5 -18 6 0 11 9 11 21 0 24 -17 60 -28 58 -4 -1 -19 -4 -33 -6z" />{" "}
                  <path d="M383 247 c-48 -23 -58 -41 -15 -26 30 11 83 49 67 48 -5 0 -29 -10 -52 -22z" />{" "}
                </g>{" "}
              </svg>
            </div>
            {/* scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* skills */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* TITLE */}
            <motion.h1
              initial={{ x: -300 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* skills list */}
            <motion.div
              initial={{ x: -300 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                C/C++
              </div>
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                ReactJs
              </div>
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                NextJs
              </div>
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                NodeJs
              </div>
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                Mysql
              </div>
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 cursor-pointer text-sm bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
            </motion.div>
            {/* scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* experience */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* Experience list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >
              {/* List item */}
              <div className="flex justify-between h-48 ">
                {/* Left */}
                <div className="w-1/3 ">
                  {/* Job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Free lancer
                  </div>
                  {/* Job desc */}
                  <div className="p-3 text-sm italic">
                    My current employment. Way better than the position before
                  </div>
                  {/* Job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024-present
                  </div>
                  {/* job comp */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit"></div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center items-center">
                  {/* Line */}
                  <div className="w-1 h-full relative bg-gray-600 rounded">
                    {/* Line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>
              {/* List item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6 flex justify-center items-center">
                  {/* Line */}
                  <div className="w-1 h-full relative bg-gray-600 rounded">
                    {/* Line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3 right-4">
                  {/* Job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Free lancer
                  </div>
                  {/* Job desc */}
                  <div className="p-3 text-sm italic">
                    My current employment. Way better than the position before
                  </div>
                  {/* Job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024-present
                  </div>
                  {/* job comp */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutpage;
