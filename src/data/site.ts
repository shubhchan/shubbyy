export const site = {
  name: 'Shubham Chandok',
  role: 'Full Stack Developer',
  email: 'shubhamchandiokm@email.com',
  github: 'https://github.com/shubhchan/',
  linkedin: 'https://www.linkedin.com/in/shubham-chandiok-4a4446399/',
  nav: [
    { label: 'work', href: '/#work' },
    { label: 'about', href: '/about' },
    { label: 'contact', href: '/contact' }
  ]
};

/**
 * Prefix a site-absolute path with the Astro `base` so links keep working
 * when the site is hosted under a subpath (GitHub Pages project sites).
 */
export function url(path: string): string {
  if (/^(?:https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}` || '/';
}
