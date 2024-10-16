"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';

import { projects } from "@/data";

import { PinContainer } from "./ui/Pin";


const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[28rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[450px] lg:w-[480px] xl:w-[550px] w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={`/projects/${item.id}`}
            >
            <Link href={`/projects/${item.id}`}>
              <div className="relative flex items-center justify-center sm:w-[500px] lg:w-[500px] w-[80vw] overflow-hidden sm:h-[45vh] lg:h-[40vh] h-[32vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl "
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute -bottom-10 object-contain"
                />
              </div>

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

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                     Read More
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </Link>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
