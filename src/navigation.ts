import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Reviews',
      href: '/blog',
    },
    {
      text: 'About',
      href: '/about',
    },
  ],
  actions: [{ text: 'Get Started', href: '/blog' }],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Reviews', href: '/blog' },
        { text: 'About', href: '/about' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms of Service', href: '/terms' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    <a class="text-blue-600 underline dark:text-muted" href="https://leversinthecloud.com">Levers in the Cloud</a> · All rights reserved.
  `,
};
