// "use client";

// import {motion} from "framer-motion";
// import  {useState} from "react";

// import {Swiper, SwiperSlide} from "swiper/react";
// import "swiper/css";
// import React from "react";
// import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import { 
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,

//  } from "@/components/ui/tooltip";
// import Link from "next/link";
// import Image from "next/image";
// import { Lora } from "next/font/google";
// import WorkSliderBtns from "@/components/WorkSliderBtns";

// const projects=[
//   {
//     num:"01",
//     category:"AI Content Generator ",
//     title:"project 1",
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibudam, sunt explicabo inventore.",
//     stack:[{name:"Html 5"}, {name:"Css 3"},{name:"Javascript"}],
//     image:"/./assets/work/thumb1.png",
//     live:"",
//     github:"",
//   },
//   {
//     num:"02",
//     category:"fullstack",
//     title:"project 2",
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibudam, sunt explicabo inventore.",
//     stack:[{name:"Next.js"}, {name:"Tailwind.css"},{name:"Node.js"}],
//     image:"/./assets/work/thumb2.png",
//     live:"",
//     github:"",
//   },
//   {
//     num:"03",
//     category:"frontend",
//     title:"project 3",
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibudam, sunt explicabo inventore.",
//     stack:[{name:"Next.js"}, {name:"Tailwind.css"}],
//     image:"/./assets/work/thumb3.png",
//     live:"",
//     github:"",
//   },
// ];


// const Work=()=>{
//   const [project,setProject] =useState(projects[0]);

//   const handleSlideChange=(swiper)=>{
//     const currentIndex= swiper.activeIndex;
//     setProject(projects[currentIndex]);
//   };
//   return (
//     <motion.section 
//     initial={{opacity:0}} 
//     animate={{opacity:1,
//       transition:{delay:2.4,duration:0.4, ease:"easeIn"},
//     }}
//     className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//           <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
//             <div className="flex flex-col gap-[30px] h-[50%]">
//               <div className="text-8xl leading-none font-extrabold text-transperent text-outline">{project.num}</div>
//               {}
//               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500capitalize">{project.category}project</h2>
//               {}
//               <p className="text-white/60">{project.description}</p>
//               {}
//               <ul className="flex gap-4">
//                 {project.stack.map((item,index)=>{
//                   return(
//                     <li key={index} className="text-xl text-accent">
//                       {item.name}
//                       {}
//                       {index !==project.stack.length-1 && ","}
//                     </li>
//                   );
//                 })}
//               </ul>
//               {}
//               <div className="border border-white/20"></div>
//               {/*button */}
//               <div className="flex items-center gap-4">
//                 {/*live */}
//                 <Link href={project.live}>
//                 <TooltipProvider delayDuration={100} >
//                   <Tooltip>
//                     <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                       <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>Live project</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//                 </Link>
//                 {/*github */}
//                 <Link href={project.github}>
//                 <TooltipProvider delayDuration={100} >
//                   <Tooltip>
//                     <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                       <BsGithub className="text-white text-3xl group-hover:text-accent"/>
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>GitHub Repository</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="w-full xl:w-[50%]">
//             <Swiper 
//             spaceBetween={30}
//             slidesPerView={1}
//             className="xl:h-[520px] mb-12"
//             onSlideChange={handleSlideChange}>
//               {projects.map((project,index)=>{
//                 return (
//                   <SwiperSlide key={index}>
//                     <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
//                       {}
//                       <div className="absolute top-0 bottom-0 w-full h-full bg-balck/10 z-10"></div>
//                       {}
//                       <div className="relative w-full h-full">
//                         <Image
//                         src={project.image}
//                         fill 
//                         className="object-cover"
//                         alt=""
//                         />
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 );
//               })}
//               {}
//               <WorkSliderBtns 
//                 containerstyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
//                 btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   )
// }

// export default Work;




"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";



const projects = [
  {
    num: "01",
    category: "AI Content Generator SASS App ",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibudam, sunt explicabo inventore.",
    stack: [{ name: "Next.js" }, { name: "Gimi API" }, { name: "React" },{ name: "Tailwind.Css" }],
    image: "/images/project1.png",
    live: "",
    github: "https://github.com/Ujjwalnimbhokar/ai-content-generator",
  },
  {
    num: "02",
    category: "DSA AlgoVisualizer:  Visualize and Learn ",
    title: "project 2",
    description:
      " Developed an interactive website to visualize various Data Structures and Algorithms (DSA), enhancing users' understanding of algorithm functionality through visual representation.Technologies Used: React.js, JavaScript, CSS, HTML",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/images/project2.png",
    live: "https://algospace-main.vercel.app/",
    github: "https://github.com/Ujjwalnimbhokar/UjjwalDSA_Algo",
  },
  {
    num: "03",
    category: "Portfolio Website",
    title: "project 3",
    description:
      "",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" },{ name: "React" }],
    image: "/images/project3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Weather Forcasting Website",
    title: "project 4",
    description:
      "Weather app - for user current location weather deatils and by search any city -weathers details.",
    stack: [{ name: "JavaScript" }, { name: "HTML" },{ name: "API" },{ name: "CSS" }],
    image: "/images/project4.png",
    live: "https://ujjwal-weather-app.vercel.app/",
    github: "https://github.com/Ujjwalnimbhokar/Ujjwal_weather_app",
  },
  {
    num: "05",
    category: "Job Portal",
    title: "project 5",
    description:
      "Job portal service was developed for creating an interactive job vacancy form for candidates. This web application manage updates both from the job seekers as well as the companies. It’s unique development methodology helps in acquiring the client and candidate information and separating them according to the job requirements and vacancies. The online access to it provides details of the job. An employer being registered in the web site has the facility to use the services. Being an authorized user he can publish vacancy details and can search no of Employees on portal and also he can search candidates on basis of the key skill which employee provides on registration..",
    stack: [{ name: "JavaScript" }, { name: "HTML" },{ name: "DBMS" },{ name: "CSS" },{ name: "PHP" },{ name: "MYSQL" }],
    image: "",
    live: "",
    github: "https://github.com/Ujjwalnimbhokar/JobPortal",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live */}
                <Link href={project.live} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github */}
                <Link href={project.github} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerstyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
