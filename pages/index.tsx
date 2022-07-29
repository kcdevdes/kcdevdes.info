import type { NextPage } from 'next';
import React from 'react';
import Body from '../components/Body';
import Contact from '../components/Contact';
import HeadImage from '../components/Header';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

const Home: NextPage = () => {
  return (
    <>
      <Body>
        <Navbar />
        <HeadImage />
        <Hero />
        <Projects />
        <Contact />
      </Body>
    </>
  );
};

export default Home;
