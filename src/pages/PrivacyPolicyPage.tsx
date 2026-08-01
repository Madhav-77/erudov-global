import { Link } from 'react-router-dom';
import { ChevronLeft, Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-cream via-white to-brand-gold/5 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-brand-gray hover:text-brand-navy transition-colors mb-6 font-semibold"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-start space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center flex-shrink-0 mt-1">
              <Shield className="w-8 h-8 text-brand-gold" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-1">Legal</div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight">Privacy Policy</h1>
              <p className="text-sm text-brand-gray mt-2">Last updated: coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b border-brand-light bg-white sticky top-16 z-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 py-4 text-sm font-semibold text-brand-gray">
            <Link to="/" className="hover:text-brand-navy transition-colors">Home</Link>
            <span className="text-brand-light text-lg">›</span>
            <span className="text-brand-gold">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center min-h-[50vh] flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-2xl bg-brand-cream border border-brand-light flex items-center justify-center mx-auto mb-6">
          <Shield className="w-9 h-9 text-brand-gold" />
        </div>
        <h2 className="text-2xl font-extrabold text-brand-navy mb-3">Page Being Updated</h2>
        <p className="text-brand-gray max-w-md leading-relaxed">
          Our Privacy Policy is currently being prepared. It will detail how we collect, use, and protect your personal information. Please check back shortly.
        </p>
        <p className="text-sm text-brand-gray mt-4">
          For any privacy-related questions in the meantime, contact us at{' '}
          <a href="mailto:erudovint@gmail.com" className="text-brand-gold hover:underline">erudovint@gmail.com</a>.
        </p>
      </div>

    </div>
  );
}
