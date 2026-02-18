'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import ServicesDetail from '@/components/ServicesDetail';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import LimitedOffer from '@/components/LimitedOffer';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <ServicesDetail />
      <Pricing />
      <Testimonials />
      {/* RoiCalculator removed */}
      <LimitedOffer />
      {/* LoyaltyProgram removed */}
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
