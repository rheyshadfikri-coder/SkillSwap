import Navbar from '@components/Navbar';
import Hero from '@components/sections/Hero';
import Features from '@components/sections/Features';
import Skills from '@components/sections/Skills';
import HowItWorks from '@components/sections/HowItWorks';
import Testimonials from '@components/sections/Testimonials';
import CTA from '@components/sections/CTA';
import Footer from '@components/Footer';
import BackgroundEffects from '@components/effects/BackgroundEffects';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Features />
      <Skills />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
