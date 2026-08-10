import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { REGION_BY_SLUG } from '../constants/regions';

/**
 * /universities/:countrySlug/:universitySlug
 * One university — programs, fees, scholarships, application guidance.
 * Structure registered — content and data pending.
 */
export default function UniversityDetailPage() {
  const { countrySlug = '', universitySlug = '' } = useParams<{
    countrySlug: string;
    universitySlug: string;
  }>();
  const region = REGION_BY_SLUG[countrySlug];
  const countryName = region?.name ?? countrySlug;
  // Display name derived from slug until real data is available
  const universityName = universitySlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <Helmet>
        <title>{universityName} — {countryName} — Erudov Global</title>
        <meta name="description" content={`${universityName} in ${countryName} — programs, tuition fees, scholarships and application guidance for Indian students.`} />
        <link rel="canonical" href={`https://www.erudov.com/universities/${countrySlug}/${universitySlug}`} />
      </Helmet>

      <div className="min-h-screen bg-white pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-16 text-center">
          <div className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-3">Coming Soon</div>
          <h1 className="text-4xl font-extrabold text-brand-navy mb-4">{universityName}</h1>
          <p className="text-brand-gray mb-8">{countryName}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/universities/${countrySlug}`}
              className="px-6 py-3 bg-brand-navy text-white rounded-xl font-semibold hover:bg-brand-navy/90 transition-colors"
            >
              All universities in {countryName}
            </Link>
            <Link
              to="/"
              className="px-6 py-3 border-2 border-brand-navy text-brand-navy rounded-xl font-semibold hover:bg-brand-cream transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
