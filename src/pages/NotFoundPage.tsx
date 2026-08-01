import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="w-20 h-20 rounded-2xl bg-brand-cream border border-brand-light flex items-center justify-center mx-auto mb-6">
        <AlertCircle className="w-9 h-9 text-brand-gold" />
      </div>
      <p className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-3">404 — Page Not Found</p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">This page doesn't exist</h1>
      <p className="text-brand-gray max-w-md leading-relaxed mb-10">
        The page you're looking for may have moved, or the link might be incorrect.
      </p>
      <Link
        to="/"
        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-gold text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
      >
        <Home className="w-5 h-5" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
