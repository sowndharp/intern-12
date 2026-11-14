export type ProjectFilterId =
  | 'all'
  | 'business'
  | 'ecommerce'
  | 'food-restaurant'
  | 'fitness'
  | 'education'
  | 'photography'
  | 'travel'
  | 'dashboard';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  formOption: string;
  description: string;
  iconName:
    | 'briefcase'
    | 'shopping-bag'
    | 'layout'
    | 'camera'
    | 'utensils'
    | 'graduation-cap'
    | 'code'
    | 'sparkles';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  categories: Exclude<ProjectFilterId, 'all'>[];
  categoryLabel: string;
  image: string;
  alt: string;
  url: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  description: string;
}

export interface TeamMember {
  index: string;
  name: string;
  role: string;
  whatsappNumber: string;
  whatsappUrl: string;
}

export interface PricingTier {
  id: string;
  number: string;
  title: string;
  formOption: string;
  priceLabel: string;
  priceValue: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const HERO_VISUAL = '/assets/black-wolf-hero.png';

export const PRICING_PLANS: PricingTier[] = [
  {
    id: 'pricing-landing-page',
    number: '01',
    title: 'Landing Page Website',
    formOption: 'Landing Page Website',
    priceLabel: 'Starting from',
    priceValue: '₹3,000',
    description:
      'A focused single-page website built to present your core offer and generate enquiries.',
    features: [
      'Single-page website',
      'Hero section',
      'Business information',
      'Contact section',
      'Mobile responsive design',
    ],
  },
  {
    id: 'pricing-business-website',
    number: '02',
    title: 'Business Website',
    formOption: 'Business Website',
    priceLabel: 'Starting from',
    priceValue: '₹8,000',
    description:
      'A multi-page company presence structured to build credibility and outline your services.',
    features: [
      '3–5 pages',
      'Home, About and Services',
      'Contact section',
      'Responsive design',
    ],
  },
  {
    id: 'pricing-restaurant-website',
    number: '03',
    title: 'Restaurant Website',
    formOption: 'Restaurant Website',
    priceLabel: 'Starting from',
    priceValue: '₹6,000',
    description:
      'An appetizing hospitality showcase designed around your dining atmosphere and menu.',
    features: [
      'Restaurant introduction',
      'Menu showcase',
      'Food gallery',
      'Contact and location details',
    ],
  },
  {
    id: 'pricing-gym-fitness',
    number: '04',
    title: 'Gym & Fitness Website',
    formOption: 'Gym & Fitness Website',
    priceLabel: 'Starting from',
    priceValue: '₹6,000',
    description:
      'A high-energy fitness studio website highlighting training programs and club facilities.',
    features: [
      'Fitness services',
      'Training programs',
      'Gallery',
      'Contact section',
    ],
  },
  {
    id: 'pricing-college-education',
    number: '05',
    title: 'College & Education Website',
    formOption: 'College & Education Website',
    priceLabel: 'Starting from',
    priceValue: '₹10,000',
    description:
      'An organized institutional website presenting academic courses, departments, and campus life.',
    features: [
      'College introduction',
      'Courses and departments',
      'Facilities section',
      'Gallery',
      'Contact information',
    ],
  },
  {
    id: 'pricing-portfolio-website',
    number: '06',
    title: 'Portfolio Website',
    formOption: 'Portfolio Website',
    priceLabel: 'Starting from',
    priceValue: '₹5,000',
    description:
      'A refined personal or creative showcase crafted for photographers, creators, and specialists.',
    features: [
      'Professional introduction',
      'Projects showcase',
      'Skills and services',
      'Contact section',
    ],
  },
  {
    id: 'pricing-ecommerce-website',
    number: '07',
    title: 'E-commerce Website',
    formOption: 'E-commerce Website',
    priceLabel: 'Starting from',
    priceValue: '₹25,000',
    description:
      'A structured online storefront designed for product discovery and smooth customer ordering.',
    features: [
      'Product catalogue',
      'Shopping cart',
      'Product details',
      'Checkout integration',
      'Order management, subject to agreed scope',
    ],
  },
  {
    id: 'pricing-custom-web-app',
    number: '08',
    title: 'Custom Web Application',
    formOption: 'Custom Web Application',
    priceLabel: 'Price',
    priceValue: 'Custom quotation',
    description:
      'Tailored frontend and full-stack interfaces engineered around specialized workflows.',
    features: [
      'Custom requirements',
      'Advanced functionality',
      'Database integration where required',
      'Custom UI/UX',
      'Project-specific development',
    ],
    featured: true,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Website Development',
    formOption: 'Business Website Development',
    description:
      'Credible company websites engineered for clear positioning, fast load times, and effortless enquiries.',
    iconName: 'briefcase',
  },
  {
    id: 'ecommerce-development',
    number: '02',
    title: 'E-commerce Development',
    formOption: 'E-commerce Development',
    description:
      'Product-driven online storefronts with intuitive category navigation, rich product cards, and clean checkout flows.',
    iconName: 'shopping-bag',
  },
  {
    id: 'landing-pages',
    number: '03',
    title: 'Landing Page Development',
    formOption: 'Landing Page Development',
    description:
      'Focused single-page experiences crafted for service launches, seasonal campaigns, and lead generation.',
    iconName: 'layout',
  },
  {
    id: 'portfolio-websites',
    number: '04',
    title: 'Portfolio Websites',
    formOption: 'Portfolio Websites',
    description:
      'Editorial digital showcases for photographers, designers, creators, and independent specialists.',
    iconName: 'camera',
  },
  {
    id: 'restaurant-websites',
    number: '05',
    title: 'Restaurant Websites',
    formOption: 'Restaurant Websites',
    description:
      'Atmospheric hospitality websites featuring curated menus, dining stories, and quick reservation journeys.',
    iconName: 'utensils',
  },
  {
    id: 'education-websites',
    number: '06',
    title: 'Education Websites',
    formOption: 'Education Websites',
    description:
      'Structured academic and institutional portals presenting programs, campus life, and admissions clarity.',
    iconName: 'graduation-cap',
  },
  {
    id: 'custom-web-apps',
    number: '07',
    title: 'Custom Web Applications',
    formOption: 'Custom Web Applications',
    description:
      'Interactive dashboards, internal tools, and bespoke frontends tailored around your data and workflows.',
    iconName: 'code',
  },
  {
    id: 'website-redesign',
    number: '08',
    title: 'Website Redesign & Optimization',
    formOption: 'Website Redesign and Optimization',
    description:
      'Modernizing outdated websites with responsive mobile grids, sharper typography, and cleaner visual hierarchy.',
    iconName: 'sparkles',
  },
];

export const PROJECT_FILTERS: { id: ProjectFilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'business', label: 'Business' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'food-restaurant', label: 'Food & Restaurant' },
  { id: 'fitness', label: 'Fitness' },
  { id: 'education', label: 'Education' },
  { id: 'photography', label: 'Photography' },
  { id: 'travel', label: 'Travel' },
  { id: 'dashboard', label: 'Dashboard' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'shopping-experience',
    number: '01',
    title: 'Shopping Experience',
    subtitle: 'Curated accessories & luxury retail store concept',
    categories: ['ecommerce', 'business'],
    categoryLabel: 'E-Commerce · Concept Demo',
    image: '/assets/shopping.jpg',
    alt: 'Matte black chronograph watch, leather cardholder, and sculpted brass case on dark stone',
    url: 'https://shope-a62z7y6cq-null4.vercel.app/',
  },
  {
    id: 'online-shop',
    number: '02',
    title: 'Online Shop',
    subtitle: 'Apparel and lifestyle storefront UI concept',
    categories: ['ecommerce'],
    categoryLabel: 'E-Commerce · Concept Demo',
    image: '/assets/storefront.jpg',
    alt: 'Minimalist charcoal knitwear, dark eyewear, and luxury packaging flatlay on basalt stone',
    url: 'https://shop-psi-ivory.vercel.app/',
  },
  {
    id: 'food-website',
    number: '03',
    title: 'Food Website',
    subtitle: 'Modern culinary menu and fresh dining concept',
    categories: ['food-restaurant'],
    categoryLabel: 'Food & Restaurant · Concept Demo',
    image: '/assets/food.jpg',
    alt: 'Artisanal gourmet grain and grilled protein bowl in dark ceramic on slate table',
    url: 'https://food-dusky-one.vercel.app/',
  },
  {
    id: 'iron-creed-fitness',
    number: '04',
    title: 'Iron Creed Fitness',
    subtitle: 'Strength club branding and membership concept',
    categories: ['fitness', 'business'],
    categoryLabel: 'Fitness · Concept Demo',
    image: '/assets/gym.jpg',
    alt: 'Iron Creed Fitness strength training studio with matte black squat racks and gold accent lighting',
    url: 'https://gym-eight-delta.vercel.app/',
  },
  {
    id: 'avs-college',
    number: '05',
    title: 'AVS College',
    subtitle: 'Academic institution and campus profile concept',
    categories: ['education', 'business'],
    categoryLabel: 'Education · Concept Demo',
    image: '/assets/college.jpg',
    alt: 'Representative Indian Arts and Science College campus concept showing sandstone entrance arch, academic building, green lawns, and students in daylight',
    url: 'https://college-profile-six.vercel.app/',
  },
  {
    id: 'royal-spice-heritage',
    number: '06',
    title: 'Royal Spice Heritage',
    subtitle: 'Heritage dining room and table booking concept',
    categories: ['food-restaurant', 'business'],
    categoryLabel: 'Restaurant · Concept Demo',
    image: '/assets/restaurant.jpg',
    alt: 'Warm upscale dining room with dark walnut tables and brass pendant lighting',
    url: 'https://raghul-royal.vercel.app/',
  },
  {
    id: 'fitness-website',
    number: '07',
    title: 'Fitness Website',
    subtitle: 'Functional athletic coaching and studio concept',
    categories: ['fitness'],
    categoryLabel: 'Fitness · Concept Demo',
    image: '/assets/fitness.jpg',
    alt: 'Modern athletic training space featuring turf sprint lane and kettlebell racks',
    url: 'https://rghul-gym.vercel.app/',
  },
  {
    id: 'raghul-photography',
    number: '08',
    title: 'Raghul Photography',
    subtitle: 'Editorial portfolio and gallery showcase concept',
    categories: ['photography'],
    categoryLabel: 'Photography · Concept Demo',
    image: '/assets/photography.jpg',
    alt: 'Full-frame rangefinder camera and cinema prime lens on a dark studio table',
    url: 'https://raghul-photography.vercel.app/',
  },
  {
    id: 'namma-ooru',
    number: '09',
    title: 'Namma Ooru',
    subtitle: 'Regional travel guide and destination concept',
    categories: ['travel'],
    categoryLabel: 'Travel · Concept Demo',
    image: '/assets/travel.jpg',
    alt: 'Winding mountain highway overlooking misty green valleys at golden hour sunset',
    url: 'https://trip-zeta-seven.vercel.app/',
  },
  {
    id: 'foodwala-express',
    number: '10',
    title: 'FoodWala Express',
    subtitle: 'Fast culinary ordering and delivery interface concept',
    categories: ['food-restaurant'],
    categoryLabel: 'Food Delivery · Concept Demo',
    image: '/assets/food-delivery.jpg',
    alt: 'Artisan flatbread wraps, saffron rice bowls, and brass spice bowls on dark slate',
    url: 'https://raghul-food-delivery-owbf.vercel.app/',
  },
  {
    id: 'dashboard-ui',
    number: '11',
    title: 'Dashboard UI',
    subtitle: 'Dark-mode analytics and admin interface concept',
    categories: ['dashboard'],
    categoryLabel: 'Dashboard · Concept Demo',
    image: '/assets/dashboard.jpg',
    alt: 'Widescreen studio monitor displaying a dark-and-gold analytics dashboard interface',
    url: 'https://raghul-dashboard-ui.vercel.app/',
  },
  {
    id: 'letoile-doree',
    number: '12',
    title: "L'Étoile Dorée",
    subtitle: 'Haute gastronomy and evening tasting concept',
    categories: ['food-restaurant', 'business'],
    categoryLabel: 'Fine Dining · Concept Demo',
    image: '/assets/fine-dining.jpg',
    alt: 'Haute cuisine plated dessert garnished with gold leaf on a candlelit wooden dining table',
    url: 'https://raghul-shop.vercel.app/',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    phase: 'Brief & Strategy',
    description:
      'Align on business goals, target audience expectations, content priorities, and required functionality.',
  },
  {
    number: '02',
    title: 'Design',
    phase: 'Direction & UI',
    description:
      'Craft the visual system, typographic hierarchy, responsive wireframes, and interactive user journeys.',
  },
  {
    number: '03',
    title: 'Develop',
    phase: 'Engineering',
    description:
      'Build clean, responsive frontend architecture with smooth micro-interactions and accessible controls.',
  },
  {
    number: '04',
    title: 'Launch',
    phase: 'QA & Handover',
    description:
      'Audit across desktop and mobile viewports, verify every link and form state, and deploy cleanly.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    index: '01',
    name: 'SOWNDHAR P',
    role: 'Studio Co-Lead · Web Design & Development',
    whatsappNumber: '919080746103',
    whatsappUrl: 'https://wa.me/919080746103',
  },
  {
    index: '02',
    name: 'RAGHUL M',
    role: 'Studio Co-Lead · Frontend & Visual Craft',
    whatsappNumber: '919994673886',
    whatsappUrl: 'https://wa.me/919994673886',
  },
];
