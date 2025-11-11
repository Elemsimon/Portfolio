"use client";


import Hero from "@/components/Hero";
import Grid from "@/components/Grid";

import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { useRouter } from "next/router";


const Home = () => {
  
  
  return (
      <div>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        {/* <Experience /> */}
        <Approach />
        
      </div>
  );
};

export default Home;
