
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Detail from "@/components/Detail";

const page = () => {
  return (
    <div className="pb-20 pt-36 ">
    {/**
     *  UI: Spotlights
     *  Link: https://ui.aceternity.com/components/spotlight
     */}
    <div>
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
      />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    </div>

    {/**
     *  UI: grid
     *  change bg color to bg-black-100 and reduce grid color from
     *  0.2 to 0.03
     */}
    <div
      className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
     absolute top-0 left-0 flex items-center justify-center"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div
        // chnage the bg to bg-black-100, so it matches the bg color and will blend in
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
       bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
    </div>

    <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Transforming visions into reality
        </p>

        {/**
         *  Link: https://ui.aceternity.com/components/text-generate-effect
         *
         *  change md:text-6xl, add more responsive code
         */}
        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />

        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi! I&apos;m Simon, a Frontend Developer
        </p>

        

        
      </div>
      
    </div>
    <div className="w-full">
      <p className='relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal text-wrap'>
        Hi, I&apos;m Simon Elem, a frontend developer with a passion for crafting engaging and efficient web experiences. My journey into tech began during my university days, where I found myself gravitating towards the ICT office. It was there that I discovered the thrill of problem-solving and innovation. Whether it was updating student details on the portal, contributing to campus-wide internet coverage, or making critical updates to the system, I was always eager to lend a hand and learn something new. <br /><br />
        My curiosity didn&apos;t stop there. I ventured into the world of blogging, choosing WordPress as my canvas. This exploration led me to uncover the building blocks of web development. HTML, CSS, and JavaScript soon became my new playground. Seeking to deepen my knowledge, I secured an internship at Afrihub, where I immersed myself in the art of web development. <br /><br />
        After graduating, I continued to hone my skills and decided to specialize in frontend development, with a particular focus on React. I embarked on various projects, including Furnushop, which is a testament to my growing expertise and creativity.<br /><br />
        One of the most rewarding experiences was being approached by the CEO of MacSamuel Foundation to build their brand. Capturing their vision and translating it into a compelling online presence was a challenge I embraced wholeheartedly. This success opened doors to new opportunities, including developing a meths tutorial website for another client, perfectly tailored to their needs.<br /><br />
        My journey didn&apos;t stop there. I joined Utility, where I played a crucial role in the development and testing of their app. Identifying errors and providing actionable recommendations, I contributed to creating a smoother and more reliable user experience.<br /><br />
        Today, I stand at the intersection of frontend development and AI, leveraging cutting-edge technologies to deliver best practices and innovative solutions. My name is Simon Elem, and I am dedicated to pushing the boundaries of what&apos;s possible in the digital realm.
      </p>
    </div>
    
        
      <Clients />
      <RecentProjects />
      <Experience />
  </div>
  )
}

export default page