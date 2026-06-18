import { ArrowRight, Calendar } from 'lucide-react';

interface Props { onGetStarted: () => void; }

export default function CTA({ onGetStarted }: Props) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-navy to-brand-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-brand-light mb-10 max-w-2xl mx-auto">
          Book a free consultation with our expert career counselors and take the first step towards your dream career abroad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onGetStarted}
            className="group px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 font-semibold flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule Free Session</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>30-Min Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
