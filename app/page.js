import DevExpertise from "@/app/components/DevExpertise";
import DevService from "@/app/components/DevService";
import Hero from "@/app/components/Hero";
import React from "react";
import Process from "@/app/components/Process";
import Features from "@/app/components/Features";
import FAQ from "./components/Faq";

const Home = () => {
  return (
    <>
      <Hero />
      <DevExpertise />
      <DevService />
      <Process />
      <Features />
      <FAQ />
    </>
  );
};

export default Home;
