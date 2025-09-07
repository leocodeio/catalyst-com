import type { MetaFunction } from '@remix-run/node';
import { LandingHeader } from '~/components/landing/LandingHeader';
import { CompanyHero } from '~/components/landing/CompanyHero';
import { useLoaderData } from '@remix-run/react';
import { loader as LandingLoader } from './loader+/landing.loader';

export const meta: MetaFunction = () => {
  return [
    { title: 'Catalyst - Transform Your Business with Expert Solutions | Professional Consulting & Accounting' },
    { 
      name: 'description', 
      content: 'Leading business consulting firm with 20+ years experience. Strategic financial planning, professional accounting, and innovative solutions that have generated $50M+ in value for 500+ companies.' 
    },
    { name: 'keywords', content: 'business consulting, financial planning, accounting services, strategic consulting, business strategy, financial analysis, professional services' },
    { property: 'og:title', content: 'Catalyst - Transform Your Business Success' },
    { property: 'og:description', content: 'Partner with industry experts who have delivered $50M+ in value to 500+ companies. Get strategic consulting and professional accounting solutions.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Catalyst - Professional Business Solutions' },
    { name: 'twitter:description', content: 'Expert consulting, accounting, and strategic solutions for business growth.' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Catalyst Business Solutions' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ];
};

export const loader = LandingLoader;

export default function Landing() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen">
      <LandingHeader user={user} />
      <CompanyHero user={user} />
    </div>
  );
}