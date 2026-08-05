import { ViteReactSSG } from 'vite-react-ssg';
import type { RouteRecord } from 'vite-react-ssg';
import './index.css';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import RegionDetail from './pages/RegionDetail';
import ServiceDetail from './pages/ServiceDetail';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const REGION_CODES = ['KR', 'UK', 'DE', 'FR', 'IT', 'JP', 'IE', 'SK', 'SG', 'HU', 'AE'];
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
      {
        path: 'destinations/:regionCode',
        element: <RegionDetail />,
        getStaticPaths: () => REGION_CODES.map((c) => `destinations/${c}`),
      },
      {
        path: 'services/:serviceId',
        element: <ServiceDetail />,
        getStaticPaths: () => SERVICE_IDS.map((s) => `services/${s}`),
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
