import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Calculators from './components/Calculators';
import Footer from './components/Footer';
import RegionDetail from './pages/RegionDetail';
import ContactModal from './components/ContactModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRegion, setSelectedRegion] = useState('KR');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleNavigation = (e: CustomEvent) => {
      setCurrentPage(e.detail.page);
      if (e.detail.region) {
        setSelectedRegion(e.detail.region);
      }
    };
    const handleOpenModal = () => setIsModalOpen(true);

    window.addEventListener('navigate', handleNavigation as EventListener);
    window.addEventListener('openContactModal', handleOpenModal);
    return () => {
      window.removeEventListener('navigate', handleNavigation as EventListener);
      window.removeEventListener('openContactModal', handleOpenModal);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);

  if (currentPage === 'region') {
    return (
      <>
        <Header onGetStarted={openModal} />
        <RegionDetail regionCode={selectedRegion} />
        <Footer />
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onGetStarted={openModal} />
      <Hero onGetStarted={openModal} />
      <Stats />
      {/* <Features /> */}
      <Services />
      <Calculators />
      <CTA onGetStarted={openModal} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
