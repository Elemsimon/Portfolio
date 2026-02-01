"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';

import { projects } from "@/data";

import { PinContainer } from "./ui/Pin";
import Image from "next/image";


const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        
        <span className="text-purple">Recent projects</span>
      </h1>
      <div className="flex flex-wrap px-2 justify-evenly gap-y-2 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[28rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[450px] lg:w-[350px] w-[80vw]"
            key={item.id}
          >
            <Link href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                <PinContainer
                title={item.title}
                href={`/projects/${item.link}`}
                >
           
            
           <div className="relative flex items-center justify-center sm:w-[500px] lg:w-[400px] w-[80vw] overflow-hidden sm:h-[45vh] lg:h-[25vh] h-[32vh] mb-5">
                            {/* <div
                              className="relative w-full h-full overflow-hidden lg:rounded-xl"
                              style={{ backgroundColor: "#13162D" }}
                            >
                              <Image src="/bg.png" alt="bgimg" fill className="object-cover" />
                            </div> */}
                            <Image
                              src={item.img}
                              alt="cover"
                              fill
                              className="z-10 absolute -bottom-10 object-cover rounded-t-xl"
                            />
                          </div>
                <div className="px-4 pb-4">
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center gap-20">
                  {/* <Link href={`/projects/${item.id}`}>
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Read More
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </Link> */}
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center ml-4">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Explore site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </Link>
                </div>
              </div>
                </div>
              
            </PinContainer>
             </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
