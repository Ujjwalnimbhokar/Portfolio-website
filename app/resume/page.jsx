"use client";
import {
  FaPython,
  FaDocker,
  FaJs,
  FaReact,
  FaDatabase,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";

import { TiCloudStorage } from "react-icons/ti";

import { TbBrandCpp } from "react-icons/tb";

import {
  SiTailwindcss, SiNextdojs
} from "react-icons/si";

import React from "react";
import { Description } from "@radix-ui/react-dialog";

const about={
  title:'About me',
  description:"As a highly focused and detail-oriented software professional, I thrive on building quality systems that exceed user expectations. My passion for learning and working on new technologies has driven me to gain experience with Docker, CI/CD Jenkins, MongoDB, DBMS, Linux, Kubernetes, AWS Cloud, Spring Boot, Python, Java, and C++. With a curiosity to understand how everything works, I enhance my logic and thinking, which fuels my ability to develop cutting-edge, scalable solutions. I am known for my ability to collaborate effectively with cross-functional teams, making me a strong leader and communicator. My experience spans the complete product lifecycle, from requirements and analysis to design, development, testing, and documentation. I thrive on tackling complex problems and have a strong background in competitive programming, with high ratings and significant achievements on various platforms. I am committed to delivering exceptional results and am always open to new challenges and opportunities for growth. My innovative approach and collaborative spirit have consistently added value to the teams I have worked with.",
  info:[
   {
    fileName: "Name",
    fileValue:"Ujjwal Nimbokar"
   },
   {
    fileName: "Phone",
    fileValue:"(+91) 9156180238"
   },
   {
    fileName: "Experience",
    fileValue:"2+ Years"
   },
   {
    fileName: "Nationality",
    fileValue:"Indian"
   },
   {
    fileName: "Skype",
    fileValue:"ujjwal.01"
   },
   {
    fileName: "Email",
    fileValue:"ujjwalnimbokar2006@gmail.com"
   },
   {
    fileName: "Freelance",
    fileValue:"Available"
   },
   {
    fileName: "Langauge",
    fileValue:"English"
   },

  ]
};

const experience={
  icon:"/assets/resume/badge.svg",
  title:"My experience",
  description:"Contributed to innovative projects and gained hands-on experience with technologies like in Java, C++, Spring Boot, Python, React, Next.js,DBMS, Devops  .",
  items:[
    {
      company:"ITJOBXS . ",
      position:" SDE Intern",
      duration:"2024",
    },
  ],
};

const education={
  icon:"/assets/resume/cap.svg",
  title:"My education",
  description:" ",
  items:[
    {
      institution:"MIT AOE Pune. ",
      degree:"Computer Engineering [Btech]",
      duration:"2026",
    },
    {
      institution:"GPA Amravti . ",
      degree:"Computer Engineering [Diploma]",
      duration:"2023",
    },
  ],
};

const skills={
  title:"My skills",
  description:" Technology and Languages  ",
  skillList:[
    {
      icon:<FaJava/>,
      name:"java",
    },
    {
      icon:<TbBrandCpp />,
      name:"cpp",
    },
    {
      icon:<FaPython />,
      name:"python",
    },
    {
      icon:<FaNodeJs/>,
      name:"nest.js",
    },
    {
      icon: <FaDatabase />,
      name:"dbms",
    },
    {
      icon: <TiCloudStorage />,
      name:"cloud storage",
    },
    
    {
      icon:<FaJs/>,
      name:"javascript",
    },
    
    {
      icon:<FaReact/>,
      name:"react.js",
    },
    {
      icon:<FaDocker />,
      name:"docker",
    },
    
    {
      icon:<FaHtml5/>,
      name:"html 5",
    },
    {
      icon:<FaCss3/>,
      name:"CSS 3",
    }
  ]
};


import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import{
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const Resume=()=>{
  return (
   <motion.div
   initial={{opacity:0}}
   animate={{
    opacity:1,
    transition:{delay:2.4, duration:0.4, ease:"easeIn"},
   }}
   className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
   >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        {}
        <div className="min-h-[70vh] w-full">
          {/*experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white60 mx-auto xl:mx-0">{experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">   
                    {experience.items.map((item,index)=>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-ceter gap-3">
                            {}
                            <span className="w-[30px] h-[30px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/*education */}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white60 mx-auto xl:mx-0">{education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">   
                    {education.items.map((item,index)=>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-ceter gap-3">
                            {}
                            <span className="w-[15px] h-[15px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </ScrollArea>
            </div>
          
          </TabsContent>
         {/*skills */}
         <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill,index)=>{
                return (
                <li key={index}>
                    <TooltipProvider delayDuration={10}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                </li>
                );
              })}</ul>
            </div>
          </TabsContent>
                    {/*about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item,index)=>{
                  return(
                    <li key={index}>
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldName}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
   </motion.div>
  )
};

export default Resume;