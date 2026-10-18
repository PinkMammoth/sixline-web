export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Practice', href: '/practice' },
  { label: 'Create', href: '/create' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Downloads', href: '/download' },
];

export interface FooterLink {
  label: string;
  /** Null renders a non-link placeholder marked "Coming soon". */
  href: string | null;
}

export const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Practice', href: '/practice' },
      { label: 'Create', href: '/create' },
      { label: 'All features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Downloads', href: '/download' },
      { label: 'Updates & release notes', href: '/updates' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Support & contact', href: '/support' },
      { label: 'Documentation', href: null },
      { label: 'Refund information', href: null },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: null },
      { label: 'Terms', href: null },
      { label: 'Third-party licences', href: null },
    ],
  },
];
