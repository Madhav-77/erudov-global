import { ChevronLeft, BookOpen } from 'lucide-react';

export default function BlogsPage() {
  const goHome = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'home' } }));
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-cream via-white to-brand-gold/5 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={goHome}
            className="flex items-center space-x-2 text-brand-gray hover:text-brand-navy transition-colors mb-6 font-semibold"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-start space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-brand-navy flex items-center justify-center flex-shrink-0 mt-1">
              <BookOpen className="w-8 h-8 text-brand-gold" />
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-1">Resources</div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight">Blog</h1>
              <p className="text-lg text-brand-gray mt-2 max-w-2xl leading-relaxed">
                Guides, insights, and practical advice on studying abroad — written for Indian students and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b border-brand-light bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 py-4 text-sm font-semibold text-brand-gray">
            <button onClick={goHome} className="hover:text-brand-navy transition-colors">Home</button>
            <span className="text-brand-light text-lg">›</span>
            <span className="text-brand-gold">Blog</span>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center min-h-[50vh] flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-2xl bg-brand-cream border border-brand-light flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-9 h-9 text-brand-gold" />
        </div>
        <h2 className="text-2xl font-extrabold text-brand-navy mb-3">Articles Coming Soon</h2>
        <p className="text-brand-gray max-w-md leading-relaxed">
          We're working on in-depth guides covering visa processes, scholarship applications, city comparisons, and life as an Indian student abroad. Check back soon.
        </p>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
          className="mt-8 px-7 py-3 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          Get Notified When We Publish
        </button>
      </div>
    </div>
  );
}
