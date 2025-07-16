
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WeddingEvents from '@/components/WeddingEvents';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WeddingEvents />
        <AboutUs />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
