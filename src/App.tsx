import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen bg-[#080808] text-[#f6f3ec]">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection onSelectService={setSelectedService} />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
