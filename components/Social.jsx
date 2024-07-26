"use client";

import React from "react";
import Link from "next/link";
import {FaGithub , FaLinkedinIn, FaWhatsapp,FaTwitter} from "react-icons/fa";

const socials=[
  {icon: <FaGithub/>,path:"https://github.com/Ujjwalnimbhokar"},
  {icon: <FaLinkedinIn/>,path:"https://www.linkedin.com/in/ujjwal-pramod-nimbokar-228108245"},
  {icon: <FaWhatsapp/>,path:"https://wa.me/qr/FRVQCKXU4XYEF1"},
  {icon: <FaTwitter/>,path:""},
];

const Social=({containerStyles, iconStyles})=>{
  return <div className={containerStyles}>
    {socials.map((item,index)=>{
      return (
        <Link key={index} href={item.path} className={iconStyles} > {item.icon}</Link>
      );
    })}
  </div>
};
export default Social;