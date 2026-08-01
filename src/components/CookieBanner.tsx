import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'erudov_cookie_consent';

type ConsentState = 'accepted' | 'declined' | null;

function getStoredConsent(): ConsentState {
  try {
    return localStorage.getItem(STORAGE_KEY) as ConsentState;
  } catch {
    return null;
  }
}

function storeConsent(value: 'accepted' | 'declined') {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // localStorage unavailable — silently ignore
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show banner only if user hasn't responded yet
    if (getStoredConsent() === null) {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    storeConsent('accepted');
    setVisible(false);
    // Dispatch event so analytics/Pixel can initialise after consent
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: { accepted: true } }));
  };

  const decline = () => {
    storeConsent('declined');
    setVisible(false);
    window.dispatchEvent(new CustomEvent('cookieConsent', { detail: { accepted: false } }));
  };

  const openPolicy = () => navigate('/cookie-policy');

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 md:bottom-6 md:left-6 md:right-auto md:max-w-sm"
    >
      <div className="bg-brand-navy text-white rounded-2xl shadow-2xl p-5 border border-white/10">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Cookie className="w-5 h-5 text-brand-gold flex-shrink-0" />
            <span className="font-bold text-sm">Cookie Preferences</span>
          </div>
          <button
            onClick={decline}
            aria-label="Dismiss"
            className="p-1 text-white/50 hover:text-white transition-colors rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <p className="text-sm text-white/75 leading-relaxed mb-4">
          We use essential cookies to keep the site working. With your consent, we also use analytics cookies to understand how visitors use the site.{' '}
          <button
            onClick={openPolicy}
            className="text-brand-gold hover:underline font-semibold"
          >
            Cookie Policy
          </button>
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={accept}
            className="flex-1 py-2.5 px-4 bg-brand-gold text-brand-navy rounded-lg font-semibold text-sm hover:bg-brand-gold/90 transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="flex-1 py-2.5 px-4 bg-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
