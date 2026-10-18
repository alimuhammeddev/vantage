export type VehicleCategory =
  | "Performance"
  | "Luxury Sedan"
  | "Premium SUV"
  | "Executive"
  | "Coupe";

export type FuelType = "Petrol" | "Diesel" | "Hybrid" | "Electric";
export type Transmission = "Automatic" | "Manual";

export type Vehicle = {
  id: string;
  slug: string;
  make: string;
  model: string;
  name: string;
  year: number;
  price: number;
  mileage: number;
  category: VehicleCategory;
  fuel: FuelType;
  transmission: Transmission;
  exterior: string;
  interior: string;
  powertrain: string;
  description: string;
  features: string[];
  images: { src: string; alt: string }[];
  featured: boolean;
  status: "Illustrative listing";
}

const photo = (id: string, alt: string) => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=85`,
  alt,
});

export const vehicles: Vehicle[] = [
  {
    id: "vm-001",
    slug: "porsche-911-carrera",
    make: "Porsche",
    model: "911 Carrera",
    name: "Porsche 911 Carrera",
    year: 2024,
    price: 128000,
    mileage: 3200,
    category: "Performance",
    fuel: "Petrol",
    transmission: "Automatic",
    exterior: "Arctic Silver",
    interior: "Black leather",
    powertrain: "3.0L twin-turbo flat-six · 388 hp",
    description:
      "A contemporary expression of an enduring sports-car silhouette. The Carrera balances immediate performance with the measured comfort that makes every journey feel considered.",
    features: ["Sport Chrono Package", "Adaptive sport seats", "Bose surround audio"],
    images: [
      photo("photo-1503376780353-7e6692767b70", "Silver Porsche 911 on a mountain road"),
      photo("photo-1503736334956-4c8f8e92946d", "Porsche-inspired sports car detail"),
      photo("photo-1492144534655-ae79c964c9d7", "Modern performance car in profile"),
    ],
    featured: true,
    status: "Illustrative listing",
  },
  {
    id: "vm-002",
    slug: "mercedes-benz-s-class",
    make: "Mercedes-Benz",
    model: "S-Class",
    name: "Mercedes-Benz S-Class",
    year: 2023,
    price: 112000,
    mileage: 7800,
    category: "Luxury Sedan",
    fuel: "Hybrid",
    transmission: "Automatic",
    exterior: "Obsidian Black",
    interior: "Macchiato beige",
    powertrain: "3.0L turbo inline-six mild hybrid · 429 hp",
    description:
      "A serene flagship sedan with a composed presence. Its long-distance character is defined by quiet power, carefully tailored materials, and a cabin designed around effortless travel.",
    features: ["Panoramic roof", "Burmester 3D sound", "Rear comfort package"],
    images: [
      photo("photo-1563720223185-11003d516935", "Black luxury sedan outside a modern building"),
      photo("photo-1502877338535-766e1452684a", "Luxury sedan front detail"),
      photo("photo-1493238792000-8113da705763", "Premium vehicle cabin and dashboard"),
    ],
    featured: true,
    status: "Illustrative listing",
  },
  {
    id: "vm-003",
    slug: "bmw-x5",
    make: "BMW",
    model: "X5",
    name: "BMW X5",
    year: 2024,
    price: 78000,
    mileage: 4100,
    category: "Premium SUV",
    fuel: "Hybrid",
    transmission: "Automatic",
    exterior: "Mineral White",
    interior: "Coffee Sensafin",
    powertrain: "3.0L turbo inline-six plug-in hybrid · 483 hp",
    description:
      "An assured all-rounder with a confident stance and flexible interior. The X5 brings a calm, premium feel to everyday miles while retaining a distinctly athletic edge.",
    features: ["M Sport styling", "Harman Kardon audio", "Panoramic glass roof"],
    images: [
      photo("photo-1519641471654-76ce0107ad1b", "Premium SUV parked in an alpine setting"),
      photo("photo-1511919884226-fd3cad34687c", "Luxury SUV driving through a city"),
      photo("photo-1511391409280-9f23a4f4d4e0", "SUV interior with premium trim"),
    ],
    featured: true,
    status: "Illustrative listing",
  },
  {
    id: "vm-004",
    slug: "range-rover-sport",
    make: "Land Rover",
    model: "Range Rover Sport",
    name: "Range Rover Sport",
    year: 2023,
    price: 96000,
    mileage: 9200,
    category: "Premium SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    exterior: "Santorini Black",
    interior: "Ebony Windsor leather",
    powertrain: "3.0L inline-six mild hybrid diesel · 296 hp",
    description:
      "Sculpted proportions and a commanding view combine with a quietly resolved cabin. This Sport is designed to make city arrivals and open-road journeys feel equally natural.",
    features: ["Dynamic air suspension", "Meridian sound system", "Pixel LED headlights"],
    images: [
      photo("photo-1606664515524-ed2f786a0bd6", "Black luxury SUV on a country road"),
      photo("photo-1519641471654-76ce0107ad1b", "Luxury SUV in mountain scenery"),
      photo("photo-1493238792000-8113da705763", "Refined SUV interior"),
    ],
    featured: true,
    status: "Illustrative listing",
  },
  {
    id: "vm-005",
    slug: "mercedes-benz-g-class",
    make: "Mercedes-Benz",
    model: "G-Class",
    name: "Mercedes-Benz G-Class",
    year: 2022,
    price: 145000,
    mileage: 12600,
    category: "Premium SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    exterior: "Manufaktur Olive",
    interior: "Black Nappa leather",
    powertrain: "4.0L twin-turbo V8 · 416 hp",
    description:
      "A design unmistakable from every angle. The G-Class pairs its purposeful, upright form with a richly finished interior and relaxed touring manners.",
    features: ["Burmester surround sound", "Multicontour front seats", "Three-zone climate"],
    images: [
      photo("photo-1519641471654-76ce0107ad1b", "Boxy luxury SUV against a dramatic landscape"),
      photo("photo-1606664515524-ed2f786a0bd6", "Luxury four-wheel-drive vehicle"),
      photo("photo-1503376780353-7e6692767b70", "Premium vehicle detail"),
    ],
    featured: false,
    status: "Illustrative listing",
  },
  {
    id: "vm-006",
    slug: "bmw-m4-competition",
    make: "BMW",
    model: "M4 Competition",
    name: "BMW M4 Competition",
    year: 2024,
    price: 89000,
    mileage: 1900,
    category: "Coupe",
    fuel: "Petrol",
    transmission: "Automatic",
    exterior: "Isle of Man Green",
    interior: "Silverstone leather",
    powertrain: "3.0L twin-turbo inline-six · 503 hp",
    description:
      "Purposeful details give this coupe its unmistakable character. The M4 Competition is an engaging driver’s car with the finish and technology expected of a modern grand tourer.",
    features: ["M Carbon bucket seats", "M Drive Professional", "Harman Kardon audio"],
    images: [
      photo("photo-1555215695-3004980ad54e", "Green performance coupe on a scenic road"),
      photo("photo-1552519507-da3b142c6e3d", "Sports coupe front quarter"),
      photo("photo-1492144534655-ae79c964c9d7", "Performance car detail"),
    ],
    featured: false,
    status: "Illustrative listing",
  },
  {
    id: "vm-007",
    slug: "audi-rs7-sportback",
    make: "Audi",
    model: "RS7 Sportback",
    name: "Audi RS7 Sportback",
    year: 2023,
    price: 105000,
    mileage: 6400,
    category: "Performance",
    fuel: "Petrol",
    transmission: "Automatic",
    exterior: "Nardo Grey",
    interior: "Black Valcona leather",
    powertrain: "4.0L twin-turbo V8 mild hybrid · 591 hp",
    description:
      "An elegant fastback profile conceals a formidable grand-touring character. The RS7 moves from composed to compelling with a deeply considered, driver-focused cockpit.",
    features: ["RS sport exhaust", "Bang & Olufsen 3D audio", "Dynamic ride control"],
    images: [
      photo("photo-1606664515524-ed2f786a0bd6", "Grey performance car in dramatic light"),
      photo("photo-1552519507-da3b142c6e3d", "Sportback front design detail"),
      photo("photo-1502877338535-766e1452684a", "Premium car interior"),
    ],
    featured: false,
    status: "Illustrative listing",
  },
  {
    id: "vm-008",
    slug: "porsche-cayenne",
    make: "Porsche",
    model: "Cayenne",
    name: "Porsche Cayenne",
    year: 2024,
    price: 98000,
    mileage: 2500,
    category: "Premium SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    exterior: "Carrara White",
    interior: "Black leather",
    powertrain: "3.0L turbo V6 · 348 hp",
    description:
      "The Cayenne brings the marque’s purposeful design language to a versatile five-seat form. A balanced ride and intuitive layout make it a natural companion for longer journeys.",
    features: ["Adaptive cruise assist", "Panoramic roof system", "Sport Chrono Package"],
    images: [
      photo("photo-1519641471654-76ce0107ad1b", "White performance SUV by the mountains"),
      photo("photo-1511919884226-fd3cad34687c", "Porsche-style SUV on an urban street"),
      photo("photo-1493238792000-8113da705763", "Luxury SUV dashboard"),
    ],
    featured: false,
    status: "Illustrative listing",
  },
  {
    id: "vm-009",
    slug: "lexus-lx",
    make: "Lexus",
    model: "LX",
    name: "Lexus LX",
    year: 2023,
    price: 92000,
    mileage: 8300,
    category: "Premium SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    exterior: "Sonic Titanium",
    interior: "Palomino semi-aniline leather",
    powertrain: "3.4L twin-turbo V6 · 409 hp",
    description:
      "A spacious flagship SUV with a calm, carefully appointed cabin. The LX takes a comfort-first approach to long-distance travel, with thoughtful details throughout.",
    features: ["Mark Levinson audio", "Four-zone climate control", "Adaptive variable suspension"],
    images: [
      photo("photo-1606664515524-ed2f786a0bd6", "Flagship SUV against an architectural backdrop"),
      photo("photo-1519641471654-76ce0107ad1b", "Premium SUV on a quiet road"),
      photo("photo-1502877338535-766e1452684a", "Luxury vehicle interior detail"),
    ],
    featured: false,
    status: "Illustrative listing",
  },
  {
    id: "vm-010",
    slug: "tesla-model-s",
    make: "Tesla",
    model: "Model S",
    name: "Tesla Model S",
    year: 2024,
    price: 84000,
    mileage: 1600,
    category: "Executive",
    fuel: "Electric",
    transmission: "Automatic",
    exterior: "Pearl White",
    interior: "Cream vegan upholstery",
    powertrain: "Dual-motor all-wheel drive · 670 hp",
    description:
      "A streamlined electric grand tourer with a spacious, minimal cabin. The Model S offers a quiet approach to performance and a considered alternative for everyday executive travel.",
    features: ["Glass roof", "Premium audio", "Heated and ventilated front seats"],
    images: [
      photo("photo-1560958089-b8a1929cea89", "White electric fastback in a minimalist setting"),
      photo("photo-1563720223185-11003d516935", "Electric executive car exterior"),
      photo("photo-1493238792000-8113da705763", "Minimal modern car interior"),
    ],
    featured: false,
    status: "Illustrative listing",
  },
  {
    id: "vm-011",
    slug: "toyota-land-cruiser",
    make: "Toyota",
    model: "Land Cruiser",
    name: "Toyota Land Cruiser",
    year: 2023,
    price: 76000,
    mileage: 10400,
    category: "Premium SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    exterior: "Attitude Black",
    interior: "Black leather",
    powertrain: "3.3L twin-turbo V6 diesel · 304 hp",
    description:
      "A durable, spacious SUV with a confident, upright stance. The Land Cruiser is built around practical versatility, with thoughtful comfort for both daily use and extended trips.",
    features: ["Multi-terrain select", "Three-row seating", "JBL premium audio"],
    images: [
      photo("photo-1519641471654-76ce0107ad1b", "Dark SUV in an expansive landscape"),
      photo("photo-1606664515524-ed2f786a0bd6", "All-terrain SUV side profile"),
      photo("photo-1511391409280-9f23a4f4d4e0", "Spacious SUV cabin"),
    ],
    featured: false,
    status: "Illustrative listing",
  },
  {
    id: "vm-012",
    slug: "mercedes-benz-e-class",
    make: "Mercedes-Benz",
    model: "E-Class",
    name: "Mercedes-Benz E-Class",
    year: 2024,
    price: 64000,
    mileage: 2900,
    category: "Executive",
    fuel: "Hybrid",
    transmission: "Automatic",
    exterior: "Graphite Grey",
    interior: "Biscaya Blue leather",
    powertrain: "2.0L turbo inline-four mild hybrid · 255 hp",
    description:
      "Elegant proportions meet a quietly advanced interior. The E-Class is a refined choice for everyday executive travel, balancing useful technology with an easy, unhurried ride.",
    features: ["Digital light", "Burmester 4D sound", "Panoramic sunroof"],
    images: [
      photo("photo-1563720223185-11003d516935", "Graphite executive sedan by a modern facade"),
      photo("photo-1502877338535-766e1452684a", "Executive sedan rear quarter"),
      photo("photo-1493238792000-8113da705763", "Modern Mercedes-style interior"),
    ],
    featured: false,
    status: "Illustrative listing",
  },
];

export const categories: VehicleCategory[] = [
  "Performance",
  "Luxury Sedan",
  "Premium SUV",
  "Executive",
  "Coupe",
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

export const formatMileage = (mileage: number) =>
  `${new Intl.NumberFormat("en-US").format(mileage)} mi`;

export const findVehicle = (slug: string) =>
  vehicles.find((vehicle) => vehicle.slug === slug);
