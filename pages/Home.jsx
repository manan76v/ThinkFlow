import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <HowItWorks />
      <Features />
      <div data-section="demo">
        <Demo />
      </div>
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}