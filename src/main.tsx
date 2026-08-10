import { ViteReactSSG } from 'vite-react-ssg';
import type { RouteRecord } from 'vite-react-ssg';
import './index.css';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import RegionDetail from './pages/RegionDetail';
import ServiceDetail from './pages/ServiceDetail';
import UniversityIndexPage from './pages/UniversityIndexPage';
import UniversityDetailPage from './pages/UniversityDetailPage';
import CourseDetailPage from './pages/CourseDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import { REGIONS } from './constants/regions';

// Single source of truth — slugs are the frozen field on each region record.
const REGION_SLUGS = REGIONS.map((r) => r.slug);

const SERVICE_IDS = [
  'career-counselling',
  'visa-assistance',
  'university-selection',
  'course-selection',
  'education-loan-support',
  'pre-departure-orientation',
];

const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'blog', element: <BlogsPage /> },

      // Destination country guides — slug URLs
      {
        path: 'destinations/:regionSlug',
        element: <RegionDetail />,
        getStaticPaths: () => REGION_SLUGS.map((s) => `destinations/${s}`),
      },

      // Service pages
      {
        path: 'services/:serviceId',
        element: <ServiceDetail />,
        getStaticPaths: () => SERVICE_IDS.map((s) => `services/${s}`),
      },

      // University section — structure only, content pending
      {
        path: 'universities/:countrySlug',
        element: <UniversityIndexPage />,
        getStaticPaths: () => REGION_SLUGS.map((s) => `universities/${s}`),
      },
      {
        path: 'universities/:countrySlug/:universitySlug',
        element: <UniversityDetailPage />,
        // No static paths yet — data pending. Will be populated when university records are ready.
      },
      {
        path: 'universities/:countrySlug/:universitySlug/:courseSlug',
        element: <CourseDetailPage />,
        // No static paths yet — data pending.
      },

      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'terms-of-service', element: <TermsOfServicePage /> },
      { path: 'cookie-policy', element: <CookiePolicyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export const createRoot = ViteReactSSG({ routes });
