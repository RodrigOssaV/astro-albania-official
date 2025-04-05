export enum ProductCategory {
  Shirts = "shirts",
  Pants = "pants",
  Shoes = "shoes",
}

export enum ProductOrigen  {
  USA = 'usa',
  EUR = 'europa',
  ITA = 'italia',
  ENG = 'inglaterra',
  DEN = 'dinamarca',
  POL = 'polonia'
}

export interface Product {
  id: number;
  name: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  description_two: string;
  cover: string;
  coverCredits: string;
  category: ProductCategory;
  origin: ProductOrigen
  options_products: any;
}

export const products: Product[] = [
  {
    id: 32,
    title: 'Clásica Américana',
    name: "Fardo de ropa clásica américana.",
    slug: "clasica-americana-fardo",
    price: 25000,
    description: 'fardo de ropa clásica americana, ideal para quienes buscan prendas únicas y atemporales.',
    description_two: 'Incluye una selección de camisas con estilo clásico y detalles que reflejan la esencia de la moda americana.',
    cover: "/productos/clasica-america-fardo.webp",
    coverCredits:
      "https://unsplash.com/photos/A7f7XRKgUWc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
    origin: ProductOrigen.ENG,
    options_products: [
      {
        id: 1,
        cover: '/examples/example-1.webp',
      },
      {
        id: 2,
        cover: '/examples/example-2.webp',
      },
      {
        id: 3,
        cover: '/examples/example-3.webp',
      },
      {
        id: 4,
        cover: '/examples/example-3.webp',
      },
    ],
  },
  {
    id: 18,
    title: 'Clásica Italiana',
    name: "Fardo de ropa clásica italiana.",
    slug: "clasica-italiana-fardo",
    price: 26000,
    description: 'Fardo de ropa clásica italiana, perfecto para quienes aprecian la elegancia y el estilo atemporal.',
    description_two: 'Contiene una selección de prendas que destacan por su diseño sofisticado y calidad incomparable, inspiradas en la moda italiana.',
    cover: "/productos/clasica-italiana-fardo.webp",
    coverCredits:
      "https://unsplash.com/photos/acn5ERAeSb4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
    origin: ProductOrigen.ITA,
    options_products: [
      {
        id: 1,
        cover: '/examples/example-4.webp',
      },
      {
        id: 2,
        cover: '/examples/example-5.webp',
      },
      {
        id: 3,
        cover: '/examples/example-6.webp',
      },
    ],
  },
  {
    id: 21,
    title: 'Tradicional Ecológica',
    name: "Fardo de ropa tradicional ecológica.",
    slug: "tradicional-ecologica-fardo",
    price: 18000,
    description: 'Fardo de ropa tradicional ecológica, ideal para quienes buscan un estilo auténtico y sostenible.',
    description_two: 'Incluye prendas elaboradas con materiales respetuosos con el medio ambiente, combinando tradición y conciencia ecológica.',
    cover: "/productos/tradicional-ecologica-fardo.webp",
    coverCredits:
      "https://unsplash.com/photos/Wr0TpKqf26s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
    origin: ProductOrigen.USA,
    options_products: [
      {
        id: 1,
        cover: '/examples/example-7.webp',
      },
      {
        id: 2,
        cover: '/examples/example-8.webp',
      },
      {
        id: 3,
        cover: '/examples/example-9.webp',
      },
    ],
  },
  {
    id: 17,
    title: 'Tradicional',
    name: "Fardo de ropa tradicional.",
    slug: "tradicional-fardo",
    price: 20000,
    description: 'Fardo de ropa tradicional, perfecto para quienes valoran prendas con estilo auténtico y atemporal',
    description_two: 'Una selección que resalta la esencia cultural y la calidad artesanal.',
    cover: "/productos/tradicional-fardo.webp",
    coverCredits:
      "https://unsplash.com/photos/Wr0TpKqf26s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Pants,
    origin: ProductOrigen.USA,
    options_products: [
      {
        id: 1,
        cover: '/examples/example-10.webp',
      },
      {
        id: 2,
        cover: '/examples/example-11.webp',
      },
      {
        id: 3,
        cover: '/examples/example-12.webp',
      },
    ],
  },
  {
    id: 33,
    title: 'Vintage Europeo',
    name: 'Fardo de ropa vintage europeo.',
    slug: 'vintage-europeo-fardo',
    price: 27000,
    description: 'Fardo de ropa vintage europeo, ideal para quienes buscan piezas con historia y estilo retro.',
    description_two: 'Incluye prendas con diseños clásicos, telas suaves y detalles únicos que evocan la moda europea de décadas pasadas.',
    cover: "/productos/tradicional-ecologica-fardo.webp",
    coverCredits:
      'https://unsplash.com/photos/Jztmx9yqjBw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    category: ProductCategory.Shirts,
    origin: ProductOrigen.DEN,
    options_products: [
      { id: 1, cover: '/examples/example-3.webp' },
      { id: 2, cover: '/examples/example-5.webp' },
      { id: 3, cover: '/examples/example-7.webp' },
    ],
  },
  {
    id: 34,
    title: 'Casual Urbana',
    name: 'Fardo de ropa casual urbana.',
    slug: 'casual-urbana-fardo',
    price: 22000,
    description: 'Fardo de ropa casual urbana, para quienes buscan comodidad sin sacrificar el estilo.',
    description_two: 'Contiene prendas modernas y versátiles, ideales para el día a día en la ciudad.',
    cover: "/productos/tradicional-ecologica-fardo.webp",
    coverCredits:
      'https://unsplash.com/photos/jpqyfK7GB4w?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    category: ProductCategory.Shirts,
    origin: ProductOrigen.USA,
    options_products: [
      { id: 1, cover: '/examples/example-6.webp' },
      { id: 2, cover: '/examples/example-7.webp' },
      { id: 3, cover: '/examples/example-8.webp' },
    ],
  },
  {
    id: 35,
    title: 'Retro Americana',
    name: 'Fardo de ropa retro americana.',
    slug: 'retro-americana-fardo',
    price: 24000,
    description: 'Fardo de ropa retro americana, con prendas que capturan la esencia de décadas pasadas.',
    description_two: 'Incluye chaquetas, camisas y pantalones con detalles únicos y colores vibrantes.',
    cover: "/productos/tradicional-ecologica-fardo.webp",
    coverCredits:
      'https://unsplash.com/photos/GJao3ZTX9gU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    category: ProductCategory.Shirts,
    origin: ProductOrigen.USA,
    options_products: [
      { id: 1, cover: '/examples/example-9.webp' },
      { id: 2, cover: '/examples/example-2.webp' },
      { id: 3, cover: '/examples/example-1.webp' },
    ],
  },
  {
    id: 36,
    title: 'Estilo Japonés',
    name: 'Fardo de ropa con estilo japonés.',
    slug: 'estilo-japones-fardo',
    price: 28000,
    description: 'Fardo de ropa con estilo japonés, perfecto para quienes valoran el minimalismo y la estética contemporánea.',
    description_two: 'Contiene prendas inspiradas en el diseño japonés moderno, con cortes limpios y colores neutros.',
    cover: "/productos/tradicional-ecologica-fardo.webp",
    coverCredits:
      'https://unsplash.com/photos/0bKdPUNGQfc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    category: ProductCategory.Shirts,
    origin: ProductOrigen.USA,
    options_products: [
      { id: 1, cover: '/examples/example-2.webp' },
      { id: 2, cover: '/examples/example-11.webp' },
      { id: 3, cover: '/examples/example-8.webp' },
    ],
  },
  {
    id: 37,
    title: 'Minimalista Nórdico',
    name: 'Fardo de ropa minimalista nórdico.',
    slug: 'minimalista-nordico-fardo',
    price: 23000,
    description: 'Fardo de ropa minimalista nórdico, pensado para quienes buscan un look limpio, elegante y funcional.',
    description_two: 'Incluye prendas con cortes simples, tonos neutros y materiales de alta calidad.',
    cover: "/productos/tradicional-ecologica-fardo.webp",
    coverCredits:
      'https://unsplash.com/photos/FV3GConVSss?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    category: ProductCategory.Shirts,
    origin: ProductOrigen.USA,
    options_products: [
      { id: 1, cover: '/examples/example-6.webp' },
      { id: 2, cover: '/examples/example-3.webp' },
      { id: 3, cover: '/examples/example-9.webp' },
    ],
  },
];