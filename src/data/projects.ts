export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Platform, e.g. "Web + Mobile". */
  kind: string;
  /** Where the work was done: employer or "Personal". */
  context: string;
  tagline: string;
  summary: string[];
  highlights: string[];
  stack: string[];
  metrics?: Metric[];
  featured?: boolean;
  /** Optional screenshot URL. Leave empty to render a neutral placeholder. */
  image?: string;
}

const ALMIGHTY = 'Professional work';
const BOLDWINGS = 'Previous company';
const PERSONAL = 'Personal project';

export const projects: Project[] = [
  {
    slug: 'calmly',
    title: 'Calmly',
    kind: 'Mobile + PWA',
    context: PERSONAL,
    featured: true,
    tagline: 'Offline-first journaling and wellbeing app with a block-based editor.',
    summary: [
      'Calmly is a mindful habit and journaling app. It works offline first and runs on mobile, web, and as a PWA.',
      'I architected it end to end: the inline block editor, the guided exercises, the weekly analytics, and the local database layer.'
    ],
    highlights: [
      'Inline block-based journal editor with text, voice memos, video cards, freehand sketches, and photo grids',
      'Somatic exercises: box breathing, 5-4-3-2-1 sensory grounding, and zen mini-games',
      'Weekly reflection analytics',
      'Biometric app lock',
      'Multi-platform PWA and web deep linking',
      'Offline-first storage with WatermelonDB on SQLite'
    ],
    stack: ['React Native', 'React 19', 'Expo SDK 57', 'TypeScript', 'WatermelonDB', 'SQLite', 'PWA']
  },
  {
    slug: 'rhl-profiles',
    title: 'RHL Profiles',
    kind: 'Web portal + CMS',
    context: ALMIGHTY,
    featured: true,
    tagline: 'Corporate portal and headless CMS for a TMT steel bar manufacturer.',
    summary: [
      'An enterprise web portal for a leading TMT steel bar manufacturer and supplier.',
      'A headless CMS lets administrators control every UI section, the SEO metadata, and all content types without code changes.'
    ],
    highlights: [
      'Dynamic CMS for every UI section and its SEO metadata',
      'Blogs, articles, press releases, and leadership interviews',
      'Responsive video gallery',
      'Recruitment and career portal',
      'Customer inquiry system',
      'Geolocation dealership locator with partner onboarding workflows'
    ],
    stack: ['React', 'CodeIgniter 4', 'MySQL', 'Tailwind CSS', 'REST APIs']
  },
  {
    slug: 'hrms',
    title: 'HRMS Platform',
    kind: 'Web + Mobile',
    context: ALMIGHTY,
    featured: true,
    tagline: 'HR platform with face-recognition attendance, geo-fencing, and payroll.',
    summary: [
      'A full-featured HRMS web platform with a Flutter companion app.',
      'Employees punch in with facial recognition inside geo-fenced locations. Admins run payroll, leave, and rosters from one place.'
    ],
    highlights: [
      'Role-based access',
      'Facial-recognition attendance (Python) with geo-fencing and location-based punching',
      'Work-hour tracking, payroll, and salary slip generation',
      'Leave, loans, advance salary, training, and travel modules',
      'Roster scheduling, CSV imports, and advanced reporting',
      'Flutter app for attendance, leave, payroll, documents, notices, field tracking, and shift visibility'
    ],
    stack: ['CodeIgniter 4.6', 'Python', 'Flutter']
  },
  {
    slug: 'doortodoor',
    title: 'DoorToDoor',
    kind: 'Web + Mobile',
    context: ALMIGHTY,
    featured: true,
    tagline: 'Billing and collection system for more than 5 lakh customers.',
    metrics: [{ value: '5L+', label: 'customers managed' }],
    summary: [
      'A large-scale billing and collection system with a Flutter app for field agents.',
      'The web system runs monthly billing and reporting. Agents use the app to bill and collect door to door, then sync to the server.'
    ],
    highlights: [
      'Monthly billing and multi-mode payments',
      'Customer history and receipts',
      'Employee collection tracking and financial reporting',
      'Agents add customers by zone and ward',
      'Generate and print bills in the field',
      'Collect payments and sync data to the server'
    ],
    stack: ['CodeIgniter 3', 'Flutter']
  },
  {
    slug: 'aitd-library',
    title: 'AITD Library',
    kind: 'Web',
    context: ALMIGHTY,
    featured: true,
    tagline: 'Modernized a library system with records going back to 2006.',
    metrics: [
      { value: '20,000+', label: 'books migrated' },
      { value: '70%', label: 'smaller system' },
      { value: '4×', label: 'faster data loading' }
    ],
    summary: [
      'A library management system for 20,000+ books with records since 2006.',
      'I migrated the legacy data and rewrote the slow paths. The system is 70% smaller and loads data 4× faster.'
    ],
    highlights: [
      'Migrated legacy CSV and PDF data',
      'Preserved book and author masters and barcodes',
      'Optimized data-loading logic',
      'Role-based access and advanced reporting'
    ],
    stack: ['CodeIgniter 4.6']
  },
  {
    slug: 'ruthless-launcher',
    title: 'Ruthless Launcher',
    kind: 'Android',
    context: PERSONAL,
    featured: true,
    tagline: 'Secure AOSP-based Android launcher with icon pack and theme support.',
    metrics: [{ value: '100K+', label: 'Play Store downloads' }],
    summary: [
      'A secure Android launcher built on AOSP.',
      'It supports icon packs and themes, and passed 100K downloads on the Play Store.'
    ],
    highlights: ['AOSP-based launcher', 'Icon pack support', 'Theme support', '100K+ downloads on the Play Store'],
    stack: ['Android', 'AOSP']
  },
  {
    slug: 'facehr',
    title: 'FaceHR',
    kind: 'Web + Mobile',
    context: ALMIGHTY,
    tagline: 'Face-recognition attendance with GPS validation for daily-wage workers.',
    summary: [
      'An attendance and verification system for daily-wage workers.',
      'Supervisors register workers in the app. The web panel verifies attendance and produces reports.'
    ],
    highlights: [
      'Face-recognition attendance with GPS validation',
      'Verification panel with image review',
      'Downloadable reports',
      'Flutter app to register workers and capture face data',
      'Attendance validation inside geo-fenced locations'
    ],
    stack: ['Laravel 12', 'Flutter']
  },
  {
    slug: 'smart-city',
    title: 'Smart City App',
    kind: 'Mobile',
    context: ALMIGHTY,
    tagline: 'Civic reporting app with geo-tagged photos and resolution tracking.',
    summary: [
      'Users post four photos of public urinal centers. Each photo embeds the date, time, coordinates, and address.',
      'Officials track reports to resolution from a dashboard.'
    ],
    highlights: [
      'Four-photo reports with embedded metadata',
      'Report generation',
      'Resolution tracking',
      'Dashboard reporting'
    ],
    stack: ['Flutter']
  },
  {
    slug: 'crm-modules',
    title: 'CRM & Employee Modules',
    kind: 'Web',
    context: ALMIGHTY,
    tagline: 'WhatsApp Business API, email ticketing, and employee management.',
    summary: ['CRM and employee management modules for internal teams.'],
    highlights: [
      'WhatsApp Business API integration',
      'Automated email ticketing',
      'Employee profile, document, and credentials management',
      'Full CRUD capabilities'
    ],
    stack: ['Core PHP', 'WhatsApp Business API']
  },
  {
    slug: 'utsavhaat',
    title: 'UtsavHaat',
    kind: 'Web + Mobile',
    context: BOLDWINGS,
    tagline: 'Feature work and stability fixes across the web platform and app.',
    summary: ['I maintained and extended the UtsavHaat web platform and its Flutter app.'],
    highlights: [
      'Video and vlog uploads',
      'Image collages and improved media handling',
      'Optimized UI flows and improved UX',
      'Fixed major and legacy bugs',
      'Stable backend integration for the app'
    ],
    stack: ['Laravel 12', 'Flutter']
  },
  {
    slug: 'iconevents',
    title: 'IconEvents',
    kind: 'Web + Mobile',
    context: BOLDWINGS,
    tagline: 'Event management system with media upload workflows.',
    summary: ['I improved the IconEvents event management system and its Flutter app.'],
    highlights: [
      'New modules and system-wide fixes',
      'Video, vlog, and image collage workflows',
      'Improved event interaction flows in the app',
      'Resolved major bugs'
    ],
    stack: ['Laravel 12', 'Flutter']
  },
  {
    slug: 'bakery-management',
    title: 'Bakery Management',
    kind: 'Mobile + Web',
    context: PERSONAL,
    tagline: 'Firebase-powered bakery operations for mobile and web.',
    summary: ['A management system for bakeries that runs on mobile and web.'],
    highlights: [
      'Inventory and shelves',
      'Orders, suppliers, and customers',
      'Billing and payment modules',
      'One codebase for mobile and web'
    ],
    stack: ['Flutter', 'Firebase']
  },
  {
    slug: 'invoice-generator',
    title: 'Invoice Generator',
    kind: 'Mobile',
    context: PERSONAL,
    tagline: 'GST invoices with five formats and print-ready PDF output.',
    summary: ['An invoice app for small businesses with GST support.'],
    highlights: [
      'Edit GST using predefined slabs from a master list',
      'Five invoice formats',
      'Company watermarks',
      'Print-ready PDFs for portable printers and PDF viewers'
    ],
    stack: ['Flutter']
  },
  {
    slug: 'widget-app',
    title: 'Widget App',
    kind: 'Mobile',
    context: PERSONAL,
    tagline: 'Customizable home-screen widgets in Google and iOS styles.',
    summary: ['A widget app that mimics Google and iOS widget styles.'],
    highlights: ['Extensive customization options', 'Selectable apps', 'Custom actions'],
    stack: ['Flutter']
  }
];

export const featured = projects.filter((p) => p.featured);
export const more = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
