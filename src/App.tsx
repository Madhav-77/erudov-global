import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Calculators from './components/Calculators';
import Footer from './components/Footer';
import RegionDetail from './pages/RegionDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRegion, setSelectedRegion] = useState('KR');

  useEffect(() => {
    const handleNavigation = (e: CustomEvent) => {
      setCurrentPage(e.detail.page);
      if (e.detail.region) {
        setSelectedRegion(e.detail.region);
      }
    };

    window.addEventListener('navigate', handleNavigation as EventListener);
    return () => window.removeEventListener('navigate', handleNavigation as EventListener);
  }, []);

  if (currentPage === 'region') {
    return (
      <>
        <Header />
        <RegionDetail regionCode={selectedRegion} />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Calculators />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
