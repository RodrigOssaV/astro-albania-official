export enum ProductCategory {
  Shirts = "shirts",
  Pants = "pants",
  Shoes = "shoes",
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  description_two: string;
  cover: string;
  coverCredits: string;
  category: ProductCategory;
}

export const products: Product[] = [
  {
    id: 32,
    name: "fardo ropa clásica americana",
    slug: "clasica-americana-fardo",
    price: 25000,
    description: 'fardo de ropa clásica americana, ideal para quienes buscan prendas únicas y atemporales.',
    description_two: 'Incluye una selección de camisas con estilo clásico y detalles que reflejan la esencia de la moda americana.',
    cover: "/productos/clasica-america-fardo.webp",
    coverCredits:
      "https://unsplash.com/photos/A7f7XRKgUWc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 18,
    name: "fardo ropa clásica italiana",
    slug: "clasica-italiana-fardo",
    price: 26000,
    description: 'Fardo de ropa clásica italiana, perfecto para quienes aprecian la elegancia y el estilo atemporal.',
    description_two: 'Contiene una selección de prendas que destacan por su diseño sofisticado y calidad incomparable, inspiradas en la moda italiana.',
    cover: "/productos/clasica-italiana-fardo.webp",
    coverCredits:
      "https://unsplash.com/photos/acn5ERAeSb4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 21,
    name: "fardo ropa tradicional ecológica",
    slug: "tradicional-ecologica-fardo",
    price: 18000,
    description: 'Fardo de ropa tradicional ecológica, ideal para quienes buscan un estilo auténtico y sostenible.',
    description_two: 'Incluye prendas elaboradas con materiales respetuosos con el medio ambiente, combinando tradición y conciencia ecológica.',
    cover: "/productos/tradicional-ecologica-fardo.webp",
    coverCredits:
      "https://unsplash.com/photos/Wr0TpKqf26s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 17,
    name: "fardo ropa tradicional",
    slug: "tradicional-fardo",
    price: 20000,
    description: 'Fardo de ropa tradicional, perfecto para quienes valoran prendas con estilo auténtico y atemporal',
    description_two: 'Una selección que resalta la esencia cultural y la calidad artesanal.',
    cover: "/productos/tradicional-fardo.webp",
    coverCredits:
      "https://unsplash.com/photos/Wr0TpKqf26s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
];