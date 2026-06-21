import { ArrowRight } from 'lucide-react';

interface Props { onGetStarted: () => void; }

export default function Hero({ onGetStarted }: Props) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-cream via-white to-brand-gold/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-brand-gold/15 text-brand-gold-dark rounded-full text-sm font-semibold tracking-wide">
                ✨ Your Future Starts Here
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-brand-navy leading-tight">
              Study Abroad
              <span className="block mt-2 bg-gradient-to-r from-brand-navy to-brand-gold bg-clip-text text-transparent">
                with Confidence
              </span>
            </h1>

            <p className="text-xl text-brand-gray leading-relaxed max-w-xl">
            Applying to a popular study destination or exploring unique global opportunities? <br/>
            Our team will guide you through every step of the process.
            </p>

            <p className="text-sm font-semibold tracking-widest text-brand-gold uppercase">
              Admission Simplified · Visa Verified
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="group px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Student studying abroad"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-br from-brand-navy to-brand-gold rounded-2xl opacity-15 blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-brand-gold to-brand-navy rounded-2xl opacity-15 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
