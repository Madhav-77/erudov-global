import { Menu, X, Compass, MessageCircle, Globe } from 'lucide-react';
import { useState } from 'react';
import { REGIONS } from '../constants/regions';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Select Region');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
            }}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Erudov Global</span>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>

            <div className="relative">
              <button
                onClick={() => setIsRegionOpen(!isRegionOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium border border-gray-200"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{selectedRegion}</span>
              </button>
              {isRegionOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {REGIONS.map((region) => (
                    <button
                      key={region.code}
                      onClick={() => {
                        setSelectedRegion(region.name);
                        setIsRegionOpen(false);
                        window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'region', region: region.code } }));
                      }}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium border-b border-gray-100 last:border-b-0 flex items-center space-x-2"
                    >
                      <span>{region.flag}</span>
                      <span>{region.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
            <a
              href="#home"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Contact
            </a>

            <div className="px-4 py-2 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-600 mb-2">Select Region</p>
              <div className="space-y-2">
                {REGIONS.map((region) => (
                  <button
                    key={region.code}
                    onClick={() => {
                      setSelectedRegion(region.name);
                      setIsMenuOpen(false);
                      window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'region', region: region.code } }));
                    }}
                    className="w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium text-sm flex items-center space-x-2"
                  >
                    <span>{region.flag}</span>
                    <span>{region.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 mx-4 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button className="w-full mx-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all font-medium">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
