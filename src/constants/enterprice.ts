export interface Enterprice {
  name: string;
  mail: string;
  phone: string;
  account: any;
  headquarters: any;
}

export const enterprice: Enterprice = {
  name: 'Los Europeos',
  mail: 'correo.contacto@loseuropeos.com',
  phone: '+569 57457027',
  account: [
    {
      id: 1,
      name: 'TikTok',
      url: '#',
      title: 'Página oficial TikTok de Los Europeos',
      icon: 'TikTok',
    },
    {
      id: 2,
      name: 'Instagram',
      url: '#',
      title: 'Página oficial Instagram de Los Europeos',
      icon: 'Instagram',
    },
    {
      id: 3,
      name: 'Facebook',
      url: '#',
      title: 'Página oficial Facebook de Los Europeos',
      icon: 'Facebook',
    }
  ],
  headquarters: {
    address: 'Tucapel',
    number: 1002,
    city: 'concepción',
    contry: 'chile',
    complete: 'Tucapel #1002, Concepción. Chile'
  }
}