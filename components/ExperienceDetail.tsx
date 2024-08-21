"use client";

import React from 'react'

import { useParams } from 'next/navigation';


import { experienceDetails, iconSlider } from "@/data/index";
import ImageCarousel from './ImageCarousel';

const ExperienceDetail = ({icon,}:{icon:React.ReactNode}) => {
  const path = useParams()
  const url = Number(path.id);
  const data = experienceDetails.find(user => user.id === url);
  return (
    <div className='flexCenter w-full flex-col'>
      {data ? (
        <div key={data.id} className='relative'>
          <div className='relative flex w-full flex-col justify-between overflow-hidden sm:flex-row gap-24 sm:gap-12 mb-2'>
            <div className='z-20 flex w-full flex-1 flex-col items-start justify-center '>
              <p className="text-start md:tracking-wider mb-2 text-2xl md:text-2xl lg:text-4xl">
                {data.title}
              </p>
              <p className="text-start md:tracking-wider mb-4 text-lg md:text-lg lg:text-xl">
                {data.title2}
              </p>
              <p className='relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal'>
                {data.desc1}
              </p>
            </div>
          
            
          </div>
          
          <div className='relative flex w-full flex-col justify-between overflow-hidden sm:flex-row gap-24 sm:gap-12 my-20'>
            <div className="flex flex-1 items-start justify-end flex-col">
              <h2 className=' ml-10 md:tracking-wider mb-0 text-2xl md:text-2xl lg:text-3xl'>Key Achievements</h2> 
                {data.desc2.map((data, i) => (
                  <div className={`flex flex-row p-6 rounded-[20px]`} key={i}>
                    <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center text-white text-2xl`}>
                      {icon}
                    </div>
                    <div className="flex-1 flex flex-col ml-3">
                      <h4 className="text-start md:tracking-wider mb-1 text-lg md:text-xl lg:text-2xl">
                        {data.title}
                      </h4>
                      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                        {data.content}
                      </p>
                    </div>
                  </div>
                  ))
                }
            </div>
          
            <div className="flex flex-1 items-start justify-end flex-col gap-11">
              <h2 className=' ml-10 md:tracking-wider  text-2xl md:text-2xl lg:text-3xl'>Skills Utilized</h2> 
                
              <div className='ml-10'>
                
                <p className="text-start md:tracking-wider mb-2 text-2xl md:text-2xl lg:text-3xl">
                  Technical Expertise
                </p>
                <p className='relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal'>
                  {data.desc3}
                </p>
              </div>
              <div className='ml-10'>
                <p className="text-start md:tracking-wider mb-2 text-2xl md:text-2xl lg:text-3xl">
                  Impact on the Organization
                </p>
                <p className='relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal'>
                  {data.desc4}
                </p>
              </div>
              <div className='ml-10'>
                <p className="text-start md:tracking-wider mb-2 text-2xl md:text-2xl lg:text-3xl">
                  Conclusion
                </p>
                <p className='relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal'>
                  {data.desc5}
                </p>
              </div>
            </div>
          </div>
        </div>

      ):(
        <p></p>
      )}
      
      
      <ImageCarousel
          imageSlider = {iconSlider}
          title = "Other Experience" 
        />
    </div>
  
  )
}

export default ExperienceDetail