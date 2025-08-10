import React from 'react';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <div className="pt-16">
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}