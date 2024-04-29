"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/kiran.JPG"
            alt="kiran"
            fill="true"
            className="object-contain xl:pb-8"
          ></Image>
        </div>
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Kirankumar S M.Tech Software Engineering
          </h1>
          <p className="md:text-xl">
            Hello! I'm Kirankumar S, a software developer with a passion for
            creating innovative and efficient software solutions. I specialize
            in full-stack development and AI.
          </p>
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
