export interface Review {
  id: number;
  name_person: string;
  img_profile: string;
  comment: string;
  social_media: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name_person: "Ravi Kumar",
    img_profile: "https://randomuser.me/api/portraits/men/12.jpg",
    comment: "La calidad de la ropa es excelente, los materiales son de primera y muy cómodos.",
    social_media: "@ravi_kumar"
  },
  {
    id: 2,
    name_person: "Carlos Pérez",
    img_profile: "https://randomuser.me/api/portraits/men/18.jpg",
    comment: "La atención al cliente es muy profesional, respondieron todas mis dudas rápidamente.",
    social_media: "@carlosp"
  },
  {
    id: 3,
    name_person: "Ana Martínez",
    img_profile: "https://randomuser.me/api/portraits/women/2.jpg",
    comment: "Me encantó la variedad de prendas disponibles, hay opciones para todos los gustos.",
    social_media: "@anamartinez"
  },
  {
    id: 4,
    name_person: "Javier López",
    img_profile: "https://randomuser.me/api/portraits/men/62.jpg",
    comment: "El envío fue rápido y la ropa llegó en perfectas condiciones. Muy satisfecho con la compra.",
    social_media: "@javierlopez"
  },
  {
    id: 5,
    name_person: "Sofía Ramírez",
    img_profile: "https://randomuser.me/api/portraits/women/19.jpg",
    comment: "Los precios son accesibles y la relación calidad-precio es inmejorable.",
    social_media: "@sofia.ramirez"
  },
  {
    id: 6,
    name_person: "Luis Fernández",
    img_profile: "https://randomuser.me/api/portraits/men/62.jpg",
    comment: "La tienda es muy fácil de navegar y el proceso de compra fue muy sencillo.",
    social_media: "@luisfernandez"
  }
]