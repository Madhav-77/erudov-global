import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CookieBanner from './components/CookieBanner';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  // Allow any component to open the modal via event
  useEffect(() => {
    const handler = () => setIsModalOpen(true);
    window.addEventListener('openContactModal', handler);
    return () => window.removeEventListener('openContactModal', handler);
  }, []);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <Header onGetStarted={openModal} />
      <Outlet />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <CookieBanner />
    </div>
  );
}
