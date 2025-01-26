import { SITE_TITLE } from "~/consts";

export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/facebook',
    icon: 'carbon:logo-facebook',
    label: `Follow ${SITE_TITLE} on Facebook`,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/instagram/',
    icon: 'carbon:logo-instagram',
    label: `Follow ${SITE_TITLE} on Instagram`,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/microsoft',
    icon: 'carbon:logo-linkedin',
    label: `Connect with ${SITE_TITLE} on LinkedIn`,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/youtube',
    icon: 'carbon:logo-youtube',
    label: `Subscribe to ${SITE_TITLE} on YouTube`,
  },
  {
    name: 'X',
    href: 'https://www.x.com/x',
    icon: 'carbon:logo-x',
    label: `Follow ${SITE_TITLE} on X`,
  }
];

export default {
  socialLinks
};
