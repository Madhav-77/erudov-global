import { Mail } from 'lucide-react';
import { REGIONS } from '../constants/regions';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-light pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src="/assets/logo-with-background.svg"
                alt="Erudov Global"
                className="h-12 w-auto rounded-md"
              />
            </div>
            <p className="text-brand-gray leading-relaxed mb-3">
              Empowering students to reach global universities with confidence.
            </p>
            <p className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Admission Simplified · Visa Verified
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => { window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'about' } })); window.scrollTo({ top: 0 }); }}
                  className="hover:text-brand-gold transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Success Stories</a></li>
              <li>
                <button
                  onClick={() => { window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'blogs' } })); window.scrollTo({ top: 0 }); }}
                  className="hover:text-brand-gold transition-colors text-left"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                { label: 'Career Counselling',        id: 'career-counselling' },
                { label: 'Visa Assistance',            id: 'visa-assistance' },
                { label: 'University Selection',       id: 'university-selection' },
                { label: 'Course Selection',           id: 'course-selection' },
                { label: 'Education Loan Support',     id: 'education-loan-support' },
                { label: 'Pre-Departure Orientation',  id: 'pre-departure-orientation' },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => { window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'service', serviceId: id } })); window.scrollTo({ top: 0 }); }}
                    className="hover:text-brand-gold transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Countries</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {REGIONS.map((region) => (
                <li key={region.code}>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'region', region: region.code } }))}
                    className="flex items-center space-x-1.5 hover:text-brand-gold transition-colors text-left text-sm"
                  >
                    <span>{region.flag}</span>
                    <span>{region.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-brand-gray break-all">erudovint@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-brand-gray text-sm">
            &copy; {new Date().getFullYear()} Erudov Global. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-brand-gray hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-brand-gray hover:text-brand-gold transition-colors">Terms of Service</a>
            <a href="#" className="text-brand-gray hover:text-brand-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
