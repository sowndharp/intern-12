import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [selectionVersion, setSelectionVersion] = useState(0);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setSelectionVersion((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f6f3ec]">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <PricingSection onSelectService={handleSelectService} />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection
          selectedService={selectedService}
          selectionVersion={selectionVersion}
        />
      </main>
      <Footer />
    </div>
  );
}
