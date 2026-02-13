'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import ServicesDetail from '@/components/ServicesDetail';
import Pricing from '@/components/Pricing';
import RoiCalculator from '@/components/RoiCalculator';
import LimitedOffer from '@/components/LimitedOffer';
import LoyaltyProgram from '@/components/LoyaltyProgram';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <ServicesDetail />
      <Pricing />
      <RoiCalculator />
      <LimitedOffer />
      <LoyaltyProgram />
      <ContactForm />
      <Footer />
    </main>
  );
}
