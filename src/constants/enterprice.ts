export interface Enterprice {
  name: string;
  mail: string;
  phone: string;
  account: any;
}

export const enterprice: Enterprice = {
  name: 'Albania',
  mail: 'tiendas.albania@gmail.com',
  phone: '+569 57457027',
  account: [
    {
      id: 1,
      name: 'TikTok',
      url: 'https://www.tiktok.com/@albania_chile',
      title: 'Página oficial TikTok de Albania Chile',
      icon: 'TikTok',
    },
    {
      id: 2,
      name: 'Instagram',
      url: 'https://www.instagram.com/albania_chile',
      title: 'Página oficial Instagram de Albania Chile',
      icon: 'Instagram',
    },
    {
      id: 3,
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100093969109971',
      title: 'Página oficial Facebook de Albania Chile',
      icon: 'Facebook',
    }
  ]
}