"use client";
import {motion}  from "framer-motion";
import Image from "next/image";

const Photo=()=>{

  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:2.4,duration:0.4 , ease:"easeInOut"},
      }}>
        <motion.div className="w-[310px] h-[260px] xl:w-[310px] xl:h-[260px] mix-blend-lighten absolute">
          <Image 
          src="/images/photo.png" 
          priority 
          quality={100} 
          fill 
          alt="" 
          className="object-contain" />
        </motion.div>
        <motion.svg 
         className="w-[300px] xl:w[506px] h-[300px] xl:h[506px]"
         file="transparent"
         viewBox="0 0 506 506"
         xmlnx="http://www.w3.org/2000/svg" >
          <motion.circle
           cx="253"
           cy="253"
           r="250"
           stroke="#00ff99"
           strokeWidth="4"
           strokeLinecap="round"
           strokeLinejoin="round"
           initial={{strokeDasharray:"24 10 0 0"}}
           animate={{
            strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
            rotate:[120,360],
           }}
           transition={{
            duration:20,
            repeat:Infinity,
            repeatType:"reverse",
           }}
           />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo;