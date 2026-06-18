import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { useState } from 'react';
import { REGIONS } from '../constants/regions';
import { whatsappUrl } from '../utils/whatsapp';

interface Props { onGetStarted: () => void; }

export default function Header({ onGetStarted }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Countries');

  return (
    <header className="fixed top-0 left-0 right-0 bg-brand-logo-bg z-50 border-b border-brand-light">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
            }}
            className="flex items-center hover:opacity-85 transition-opacity"
          >
            <img
              src="/assets/logo-no-background.svg"
              alt="Erudov Global"
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }))}
              className="text-brand-dark hover:text-brand-navy transition-colors font-semibold"
            >
              Home
            </button>
            <a href="#services" className="text-brand-dark hover:text-brand-navy transition-colors font-semibold">
              Services
            </a>
            <a href="#about" className="text-brand-dark hover:text-brand-navy transition-colors font-semibold">
              About
            </a>
            <a href="#contact" className="text-brand-dark hover:text-brand-navy transition-colors font-semibold">
              Contact
            </a>

            {/* Countries dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsRegionOpen(!isRegionOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold rounded-lg transition-all duration-200 font-semibold border border-brand-gold/40 shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{selectedRegion}</span>
              </button>
              {isRegionOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-brand-light rounded-lg shadow-xl z-50">
                  {REGIONS.map((region) => (
                    <button
                      key={region.code}
                      onClick={() => {
                        setSelectedRegion(region.name);
                        setIsRegionOpen(false);
                        window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'region', region: region.code } }));
                      }}
                      className="w-full text-left px-4 py-3 text-brand-dark hover:bg-brand-cream hover:text-brand-navy transition-colors font-medium border-b border-brand-light last:border-b-0 flex items-center space-x-2"
                    >
                      <span>{region.flag}</span>
                      <span>{region.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onGetStarted}
              className="px-6 py-2.5 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-brand-dark hover:bg-brand-cream rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-brand-light bg-brand-logo-bg">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
              }}
              className="block w-full text-left px-4 py-2 text-brand-dark hover:bg-brand-cream rounded-lg transition-colors font-semibold"
            >
              Home
            </button>
            <a href="#services" className="block px-4 py-2 text-brand-dark hover:bg-brand-cream rounded-lg transition-colors font-semibold">
              Services
            </a>
            <a href="#about" className="block px-4 py-2 text-brand-dark hover:bg-brand-cream rounded-lg transition-colors font-semibold">
              About
            </a>
            <a href="#contact" className="block px-4 py-2 text-brand-dark hover:bg-brand-cream rounded-lg transition-colors font-semibold">
              Contact
            </a>

            <div className="px-4 py-2 border-t border-brand-light">
              <p className="text-sm font-semibold text-brand-gray mb-2">Select Region</p>
              <div className="space-y-2">
                {REGIONS.map((region) => (
                  <button
                    key={region.code}
                    onClick={() => {
                      setSelectedRegion(region.name);
                      setIsMenuOpen(false);
                      window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'region', region: region.code } }));
                    }}
                    className="w-full text-left px-3 py-2 text-brand-dark hover:bg-brand-cream hover:text-brand-navy rounded-lg transition-colors font-medium text-sm flex items-center space-x-2"
                  >
                    <span>{region.flag}</span>
                    <span>{region.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 mx-4 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onGetStarted}
              className="w-full mx-4 px-6 py-2.5 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
