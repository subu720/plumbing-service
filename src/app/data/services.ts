export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  imageLabel: string;
  chartValue: number;
  accent: string;
  icon: 'droplet' | 'home' | 'wrench' | 'sparkles' | 'thermometer';
};

export const serviceCatalog: ServiceItem[] = [
  {
    id: 'water-tank-repair',
    title: 'Water Tank Repair',
    description: 'Full tank inspection, leak sealing, corrosion treatment, and pressure stabilization for safe supply.',
    price: 500,
    imageUrl: 'https://images.unsplash.com/photo-1581578737146-2e1a5f3d7e7e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageLabel: 'Tank Inspection',
    chartValue: 95,
    accent: 'from-cyan-500 to-sky-400',
    icon: 'droplet',
  },
  {
    id: 'outdoor-plumbing',
    title: 'Outdoor Plumbing',
    description: 'Pipe replacements, drainage upgrades, and exterior water systems built for weather-resistant performance.',
    price: 500,
    imageUrl: 'https://images.unsplash.com/photo-1581091215367-6a0f7b6a7b6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageLabel: 'Outdoor Setup',
    chartValue: 105,
    accent: 'from-blue-500 to-violet-500',
    icon: 'home',
  },
  {
    id: 'leak-detection',
    title: 'Leak Detection',
    description: 'Fast water leak tracing with smart diagnostics so problems are fixed before they become expensive.',
    price: 500,
    imageUrl: 'https://images.unsplash.com/photo-1558981359-0a6d0d8b9f7b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageLabel: 'Diagnostics',
    chartValue: 110,
    accent: 'from-teal-500 to-emerald-500',
    icon: 'wrench',
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    description: 'Safe, effective clearing of blocked drains, sinks, and sewer lines using modern tools and methods.',
    price: 1000,
    imageUrl: 'https://images.unsplash.com/photo-1583947581936-6d5f6a7b8c9d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageLabel: 'Clear Drains',
    chartValue: 120,
    accent: 'from-orange-500 to-amber-500',
    icon: 'sparkles',
  },
  {
    id: 'fixture-installation',
    title: 'Fixture Installation',
    description: 'Professional faucet, shower, and appliance installs that look great and work perfectly every time.',
    price: 500,
    imageUrl: 'https://images.unsplash.com/photo-1508948956644-3f9b6b4a9d8a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    imageLabel: 'Install Work',
    chartValue: 130,
    accent: 'from-purple-500 to-pink-500',
    icon: 'thermometer',
  },
];
