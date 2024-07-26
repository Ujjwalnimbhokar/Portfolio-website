// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {Textarea} from "@/components/ui/textarea";
// import {motion} from "framer-motion";
// import React from "react";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// import { FaPhoneAlt,FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { Description } from "@radix-ui/react-dialog";
// import { delay } from "framer-motion";

// const info =[
//   {
//     icon:<FaPhoneAlt/>,
//     title:"Phone",
//     description:"(+91) 9156180238",
//   },
//   {
//     icon:<FaEnvelope/>,
//     title:"Email",
//     description:"ujjwalnimbokar2006@gmail.com",
//   },
//   {
//     icon:<FaMapMarkerAlt/>,
//     title:"Address",
//     description:"Devgiri Nagar, Anjangaon Surji (Pin : 444705), Amravti, Maharashtra, India ",
//   },
// ]

// const Contact=()=>{
//   return (
//     <motion.section
//     initial={{opacity:0}}
//     animate={{
//       opacity:1,
//       transition:{delay:2.4, duration:0.4 , ease:"easeIn"},
//     }}
//     className="py-6"
//     >
      
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-[30px]">
//           <div className="xl:h-[54%] order-2 xl:order-none">
//             <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
//               <h3 className="text-4xl text-accent">Let's work together</h3>
//               <p className="text-white/60">Thank you for contacting me . I would like to get to know more about you in the interest of our possible partnership</p>
//               {}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Input type="firstname" placeholder="Firstname"/>
//                 <Input type="lastname" placeholder="Lastname"/>
//                 <Input type="email" placeholder="Email Address"/>
//                 <Input type="phone" placeholder="Phone number"/>
//               </div>
//               {}
//               <Select>
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select a service"/>
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Select a service</SelectLabel>
//                     <SelectItem value="est">Web Development</SelectItem>
//                     <SelectItem value="cst">Software Developer</SelectItem>
//                     <SelectItem value="mst">Backend Developer</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//               {}
//               <Textarea className="h-[200px]" 
//               placeholder="Type your message here."/>
//               {}
//               <Button size="md" className="max-w-40">Send message</Button>
//             </form>
//           </div>
//           {}
//           <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
//             <ul>
//               {info.map((item,index)=>{
//                 return (
//                   <li key={index} className="flex items-center gap-6">
//                     <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
//                       <div className="text-[28px]">{item.icon}</div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-white/60">{item.title}</p>
//                       <h3 className="text-xl">{item.description}</h3>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;



"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";
import { delay } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9156180238",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ujjwalnimbokar2006@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Devgiri Nagar, Anjangaon Surji (Pin: 444705), Amravti, Maharashtra, India",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Thank you for contacting me. I would like to get to know more about you in the
                interest of our possible partnership.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="software-developer">Software Developer</SelectItem>
                    <SelectItem value="backend-developer">Backend Developer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message here." />
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
