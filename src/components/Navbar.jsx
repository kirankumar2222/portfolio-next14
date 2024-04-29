"use client";

import React, { useState } from "react";
import Link from "next/link";
import links from "./List";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVarients = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVarients = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVarients = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Links */}
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex pr-20">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Kiran</span>
          <span className="w-12 h-8 bg-white text-black rounded p-[0.8px] flex items-center justify-center">
            Kumar
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 ">
        <Link href={"https://github.com/kirankumar2222"}>
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"https://www.linkedin.com/in/kiran-kumar-s-180086247/"}>
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"https://github.com/kirankumar2222"}>
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"https://github.com/kirankumar2222"}>
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-10 h-8 flex flex-col justify-between relative z-50 cursor-pointer"
        >
          <motion.div
            variants={topVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left "
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVarients}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVarients}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
