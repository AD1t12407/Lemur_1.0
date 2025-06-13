import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ConsultingBuddy from './components/ConsultingBuddy';
import BrainOverlay from './components/BrainOverlay';
import DashboardPreview from './components/DashboardPreview';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Integrations from './components/Integrations';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-500">
        <Header />
        <HeroSection />
        <ConsultingBuddy />
        <BrainOverlay />
        <DashboardPreview />
        <HowItWorks />
        <UseCases />
        <Integrations />
        <Security />
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;