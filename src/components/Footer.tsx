import { Mail, Phone, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { REGIONS } from '../constants/regions';

export default function Footer() {
  const navigate = useNavigate();

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
              Admission Simplified. Visa Verified.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
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
                  <Link
                    to={`/services/${id}`}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {label}
                  </Link>
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
                    onClick={() => navigate(`/destinations/${region.slug}`)}
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
                <a href="mailto:info@erudov.com" className="text-brand-gray hover:text-brand-gold transition-colors break-all">
                  info@erudov.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <a href="tel:+919988838388" className="text-brand-gray hover:text-brand-gold transition-colors">
                  +91 99888 38388
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-brand-gray">Pan India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-brand-gray text-sm">
            &copy; {new Date().getFullYear()} Erudov Global. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-brand-gray hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-brand-gray hover:text-brand-gold transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-brand-gray hover:text-brand-gold transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
