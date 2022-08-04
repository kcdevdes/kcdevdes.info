import type { NextPage } from 'next';
import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import ProfileImage from '../components/ProfileImage';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import SkillPanel from '../components/SkillPanel';
import BOJBadge from '../components/BOJBadge';
import Seperator from '../components/Seperator';
import Meta from '../components/Meta';
import Anim from '../components/Anim';

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <Header>
        <Anim />
        <ProfileImage />
        <Hero />
      </Header>
      <Seperator text="Algorithm Training Level" />
      <BOJBadge />
      <Seperator text="My Skills" />
      <SkillPanel />
      <Seperator text="Projects" />
      <Projects />
      <Seperator text="Contact" />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
