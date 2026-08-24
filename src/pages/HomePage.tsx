import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Calculators from '../components/Calculators';
import CTA from '../components/CTA';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Erudov Global',
  url: 'https://www.erudov.com',
  logo: 'https://www.erudov.com/assets/logo-with-background.svg',
  description:
    'Expert guidance for Indian students applying to international universities across 8 destinations — admissions, visa, scholarships and more.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@erudov.com',
    telephone: '+91-99888-38388',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
  areaServed: 'IN',
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Erudov Global — Study Abroad with Confidence</title>
        <meta
          name="description"
          content="Expert guidance for Indian students applying to international universities across 8 destinations — admissions, visa, scholarships and more."
        />
        <meta property="og:title" content="Erudov Global — Study Abroad with Confidence" />
        <meta
          property="og:description"
          content="Expert guidance for Indian students applying to international universities across 8 destinations — admissions, visa, scholarships and more."
        />
        <meta property="og:url" content="https://www.erudov.com/" />
        <link rel="canonical" href="https://www.erudov.com/" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Hero />
      <Services />
      <Calculators />
      <CTA />
    </>
  );
}
