import { Menu, X, Globe, Search, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { REGIONS } from '../constants/regions';

interface Props { onGetStarted: () => void; }

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ─── Searchable index ────────────────────────────────────────────────────────
const SEARCH_INDEX = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
  // Services
  { label: 'Career Counselling', path: '/services/career-counselling' },
  { label: 'Visa Assistance', path: '/services/visa-assistance' },
  { label: 'University Selection', path: '/services/university-selection' },
  { label: 'Course Selection', path: '/services/course-selection' },
  { label: 'Education Loan Support', path: '/services/education-loan-support' },
  { label: 'Pre-Departure Orientation', path: '/services/pre-departure-orientation' },
  // Destinations — built from REGIONS so it stays in sync automatically
  ...REGIONS.map((r) => ({ label: `Study in ${r.name} ${r.flag}`, path: `/destinations/${r.slug}` })),
  ...REGIONS.map((r) => ({ label: `Universities in ${r.name}`, path: `/universities/${r.slug}` })),
];

function matchSearch(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return SEARCH_INDEX.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 6);
}

// ─── Global search ───────────────────────────────────────────────────────────
function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof SEARCH_INDEX>([]);
  const [focused, setFocused] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setResults(matchSearch(query));
    setActiveIdx(-1);
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const go = (path: string) => {
    navigate(path);
    setQuery('');
    setFocused(false);
    inputRef.current?.blur();
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (!results.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, -1)); }
    else if (e.key === 'Enter' && activeIdx >= 0) { go(results[activeIdx].path); }
    else if (e.key === 'Escape') { setFocused(false); setQuery(''); }
  };

  const showDropdown = focused && query.trim().length > 0;

  return (
    <div ref={wrapRef} className="relative hidden md:block w-56 lg:w-72">
      <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-colors bg-white ${focused ? 'border-brand-gold shadow-sm' : 'border-brand-light'}`}>
        <Search className="w-4 h-4 text-brand-gray flex-shrink-0" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search destinations, services…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={handleKey}
          className="flex-1 text-sm text-brand-dark placeholder-brand-gray bg-transparent outline-none min-w-0"
          aria-label="Search the site"
          aria-expanded={showDropdown}
          aria-autocomplete="list"
        />
        {query && (
          <button onClick={() => setQuery('')} className="text-brand-gray hover:text-brand-dark flex-shrink-0">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-brand-light rounded-xl shadow-xl z-50 overflow-hidden">
          {results.length > 0 ? (
            <ul role="listbox">
              {results.map((item, idx) => (
                <li key={item.path} role="option" aria-selected={idx === activeIdx}>
                  <button
                    onMouseDown={() => go(item.path)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2 ${idx === activeIdx ? 'bg-brand-cream text-brand-navy font-semibold' : 'text-brand-dark hover:bg-brand-cream'}`}
                  >
                    <Search className="w-3.5 h-3.5 text-brand-gray flex-shrink-0" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-brand-gray">No results for "{query}"</p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────
export default function Header({ onGetStarted }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState('');
  const [mobileResults, setMobileResults] = useState<typeof SEARCH_INDEX>([]);
  const navigate = useNavigate();
  const regionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileResults(matchSearch(mobileSearch));
  }, [mobileSearch]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (regionRef.current && !regionRef.current.contains(e.target as Node)) {
        setIsRegionOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSectionLink = (id: string) => {
    setIsMenuOpen(false);
    if (window.location.pathname === '/') {
      scrollToSection(id);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(id), 150);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-brand-light shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 hover:opacity-85 transition-opacity">
            <img src="/assets/logo-no-background.svg" alt="Erudov Global" className="h-9 w-auto" />
          </Link>

          {/* Desktop — primary nav links */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <Link to="/" className="text-sm font-semibold text-brand-dark hover:text-brand-navy transition-colors">
              Home
            </Link>
            <button
              onClick={() => handleSectionLink('services')}
              className="text-sm font-semibold text-brand-dark hover:text-brand-navy transition-colors"
            >
              Services
            </button>
            <Link to="/about" className="text-sm font-semibold text-brand-dark hover:text-brand-navy transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-sm font-semibold text-brand-dark hover:text-brand-navy transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-brand-dark hover:text-brand-navy transition-colors">
              Contact
            </Link>

            {/* Countries dropdown */}
            <div ref={regionRef} className="relative">
              <button
                onClick={() => setIsRegionOpen((v) => !v)}
                className="flex items-center gap-1.5 text-sm font-semibold text-brand-gold border border-brand-gold/50 hover:border-brand-gold hover:bg-brand-gold/5 px-3 py-1.5 rounded-lg transition-all"
              >
                <Globe className="w-3.5 h-3.5" />
                Countries
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isRegionOpen ? 'rotate-180' : ''}`} />
              </button>

              {isRegionOpen && (
                <div className="absolute left-0 mt-2 w-52 bg-white border border-brand-light rounded-xl shadow-xl z-50 overflow-hidden">
                  {REGIONS.map((region) => (
                    <button
                      key={region.code}
                      onClick={() => { setIsRegionOpen(false); navigate(`/destinations/${region.slug}`); }}
                      className="w-full text-left px-4 py-2.5 text-sm text-brand-dark hover:bg-brand-cream hover:text-brand-navy transition-colors font-medium flex items-center gap-2 border-b border-brand-light last:border-b-0"
                    >
                      <span>{region.flag}</span>
                      <span>{region.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop — search + CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-auto">
            <GlobalSearch />
            <button
              onClick={onGetStarted}
              className="px-5 py-2 bg-gradient-to-r from-brand-navy to-brand-gold text-white text-sm rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold whitespace-nowrap flex-shrink-0"
            >
              Get Started
            </button>
          </div>

          {/* Mobile — search icon + hamburger */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <button
              onClick={() => { setIsMenuOpen((v) => !v); setMobileSearch(''); }}
              className="p-2 text-brand-dark hover:bg-brand-cream rounded-lg transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-brand-light bg-white overflow-y-auto max-h-[calc(100svh-4rem)] pb-4">

            {/* Mobile search */}
            <div className="px-4 pt-4 pb-2">
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 border-brand-gold bg-white">
                <Search className="w-4 h-4 text-brand-gray flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search destinations, services…"
                  value={mobileSearch}
                  onChange={(e) => setMobileSearch(e.target.value)}
                  className="flex-1 text-sm text-brand-dark placeholder-brand-gray bg-transparent outline-none"
                  autoFocus
                />
                {mobileSearch && (
                  <button onClick={() => setMobileSearch('')} className="text-brand-gray">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              {mobileSearch.trim() && (
                <div className="mt-1.5 bg-white border border-brand-light rounded-xl shadow-lg overflow-hidden">
                  {mobileResults.length > 0 ? mobileResults.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => { navigate(item.path); closeMenu(); }}
                      className="w-full text-left px-4 py-2.5 text-sm text-brand-dark hover:bg-brand-cream flex items-center gap-2 border-b border-brand-light last:border-b-0"
                    >
                      <Search className="w-3.5 h-3.5 text-brand-gray flex-shrink-0" />
                      {item.label}
                    </button>
                  )) : (
                    <p className="px-4 py-3 text-sm text-brand-gray">No results for "{mobileSearch}"</p>
                  )}
                </div>
              )}
            </div>

            {/* Nav links */}
            <div className="px-4 pt-1 space-y-1">
              <Link to="/" onClick={closeMenu} className="flex items-center px-3 py-2.5 text-sm font-semibold text-brand-dark hover:bg-brand-cream hover:text-brand-navy rounded-lg transition-colors">
                Home
              </Link>
              <button onClick={() => handleSectionLink('services')} className="w-full text-left flex items-center px-3 py-2.5 text-sm font-semibold text-brand-dark hover:bg-brand-cream hover:text-brand-navy rounded-lg transition-colors">
                Services
              </button>
              <Link to="/about" onClick={closeMenu} className="flex items-center px-3 py-2.5 text-sm font-semibold text-brand-dark hover:bg-brand-cream hover:text-brand-navy rounded-lg transition-colors">
                About
              </Link>
              <Link to="/blog" onClick={closeMenu} className="flex items-center px-3 py-2.5 text-sm font-semibold text-brand-dark hover:bg-brand-cream hover:text-brand-navy rounded-lg transition-colors">
                Blog
              </Link>
              <Link to="/contact" onClick={closeMenu} className="flex items-center px-3 py-2.5 text-sm font-semibold text-brand-dark hover:bg-brand-cream hover:text-brand-navy rounded-lg transition-colors">
                Contact
              </Link>
            </div>

            {/* Countries section */}
            <div className="px-4 pt-3 pb-1">
              <p className="px-3 text-xs font-bold tracking-widest uppercase text-brand-gray mb-2">Destinations</p>
              <div className="grid grid-cols-2 gap-1">
                {REGIONS.map((region) => (
                  <button
                    key={region.code}
                    onClick={() => { navigate(`/destinations/${region.slug}`); closeMenu(); }}
                    className="text-left px-3 py-2 text-sm text-brand-dark hover:bg-brand-cream hover:text-brand-navy rounded-lg transition-colors font-medium flex items-center gap-2"
                  >
                    <span>{region.flag}</span>
                    <span>{region.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-4 pt-3">
              <button
                onClick={() => { onGetStarted(); closeMenu(); }}
                className="w-full py-3 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all"
              >
                Get Started — Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
