import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => 
{
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <p className="text-xl font-medium border-t-2 border-slate-700 px-2 py-1 outline-none text-teal-500">Created by Yash Kirnapure</p>
      <div className="flex space-x-2 cursor-pointer mt-1">
        <a href="https://github.com/YashMKirnapure" target="_blank" >
        <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/yash-kirnapure-62875b231/" target="_blank" >
        <FaLinkedin size={20} />
        </a>
        <a href="https://www.instagram.com/yash_kirnapure/" target="_blank" >
        <FaInstagramSquare size={20} />
        </a>
        <a href="https://discord.com/" target="_blank" >
        <FaDiscord size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
