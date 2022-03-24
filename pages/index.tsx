import { Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Divider display={{ base: "block", md: "none" }} />
      <Skills />
      <Divider display={{ base: "block", md: "none" }} />
      <Testimonials />
    </>
  );
};

export default Home;
