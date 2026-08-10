import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { REGION_BY_SLUG } from '../constants/regions';

/**
 * /universities/:countrySlug
 * Browse & filter index for one country.
 * Structure registered — content and data pending.
 */
export default function UniversityIndexPage() {
  const { countrySlug = '' } = useParams<{ countrySlug: string }>();
  const region = REGION_BY_SLUG[countrySlug];
  const countryName = region?.name ?? countrySlug;
  const pageTitle = `Universities in ${countryName} — Erudov Global`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={`Browse universities in ${countryName} for Indian students — programs, fees, scholarships and application guidance.`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={`https://www.erudov.com/universities/${countrySlug}`} />
        <link rel="canonical" href={`https://www.erudov.com/universities/${countrySlug}`} />
      </Helmet>

      <div className="min-h-screen bg-white pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-16 text-center">
          <div className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-3">Coming Soon</div>
          <h1 className="text-4xl font-extrabold text-brand-navy mb-4">
            Universities in {countryName}
          </h1>
          <p className="text-brand-gray max-w-xl mx-auto mb-8">
            We're building detailed profiles for universities and courses in {countryName}. Check back soon — or explore the country guide in the meantime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {region && (
              <Link
                to={`/destinations/${region.slug}`}
                className="px-6 py-3 bg-brand-navy text-white rounded-xl font-semibold hover:bg-brand-navy/90 transition-colors"
              >
                {region.flag} View {countryName} Guide
              </Link>
            )}
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
