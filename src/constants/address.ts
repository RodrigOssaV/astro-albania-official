export interface Address {
  id: number;
  name: string;
  number: number;
  city: string;
  schedule_week?: string;
  schedule_week_open: string;
  schedule_week_close: string;
  schedule_weekend?: string;
  schedule_saturday_open?: string;
  schedule_saturday_closed?: string;
  schedule_sunday: string;
  google_map: {
    latitude: string;
    longitud: string;
    url: string;
  };
  encoded_address?: string;
}

export const addresses: Address[] = [
  { 
    id: 1,
    name: 'paseo independencia',
    number: 572,
    city: 'rancagua',
    schedule_week: 'Lunes - Sábado',
    schedule_week_open: '9:30 hr',
    schedule_week_close: '20:00 hr',
    schedule_sunday: 'Cerrado',
    google_map: {
      latitude: '-34.17004886538646',
      longitud: '-70.74792321167966',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.0730922217804!2d-70.74792321167966!3d-34.17004886538646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966343157da9d7b1%3A0xb6b62b9e34ef217b!2sP.%C2%BA%20Independencia%20572%2C%20Rancagua%2C%20O&#39;Higgins!5e0!3m2!1ses-419!2scl!4v1737245978451!5m2!1ses-419!2scl',
    },
    encoded_address: 'Paseo+Independencia+-+%23572%2C+Rancagua',
  },
  { 
    id: 2,
    name: '5 de abril',
    number: 812,
    city: 'chillán',
    schedule_week: 'Lunes - Sábado',
    schedule_week_open: '9:30 hr',
    schedule_week_close: '20:00 hr',
    schedule_sunday: 'Cerrado',
    google_map: {
      latitude: '-36.61050679480504',
      longitud: '-72.10753261105612',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.6595912759!2d-72.10753261105612!3d-36.61050679480504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96692829b107e6e1%3A0x6b4dcaab1afc6765!2s5%20de%20Abril%20812%2C%203800876%20Chill%C3%A1n%2C%20%C3%91uble!5e0!3m2!1ses-419!2scl!4v1737246062900!5m2!1ses-419!2scl',
    },
    encoded_address: '5+de+Abril+812%2C+3800876+Chill%C3%A1n%2C+%C3%91uble',
  },
  { 
    id: 3,
    name: 'maipú',
    number: 623,
    city: 'concepción',
    schedule_week: 'Lunes - Viernes',
    schedule_week_open: '9:30 hr',
    schedule_week_close: '19:30 hr',
    schedule_weekend: 'Sábados',
    schedule_saturday_open: '10:00 hr',
    schedule_saturday_closed: '19:00 hr',
    schedule_sunday: 'Cerrado',
    google_map: {
      latitude: '-36.824602778158',
      longitud: '-73.05483972342036',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.74613622348!2d-73.05483972342033!3d-36.824602778158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5cfff7b6061%3A0x285ca39189f2766c!2zTWFpcMO6IDYyMywgNDAzMDQ5NyBDb25jZXBjacOzbiwgQsOtbyBCw61v!5e0!3m2!1ses-419!2scl!4v1737246110109!5m2!1ses-419!2scl',
    },
    encoded_address: 'Maip%C3%BA+623%2C+4030497+Concepci%C3%B3n%2C+B%C3%ADo+B%C3%ADo',
  },
  { 
    id: 4,
    name: 'arturo prat',
    number: 732,
    city: 'temuco',
    schedule_week: 'Lunes - Viernes',
    schedule_week_open: '9:30 hr',
    schedule_week_close: '20:00 hr',
    schedule_weekend: 'Sábados',
    schedule_saturday_open: '10:00 hr',
    schedule_saturday_closed: '18:00 hr',
    schedule_sunday: 'Cerrado',
    google_map: {
      latitude: '-38.74092768759564',
      longitud: '-72.5938754233393',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.9927894845605!2d-72.5938754233393!3d-38.74092768759564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3e0a9e3dfcb%3A0xb95d9b8c6d78e5d4!2sArturo%20Prat%20732%2C%204791248%20Temuco%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1737246142669!5m2!1ses-419!2scl',
    },
    encoded_address: 'Arturo+Prat+732%2C+4791248+Temuco%2C+Araucan%C3%ADa'
  },
  { 
    id: 5,
    name: 'avenida alemana',
    number: 715,
    city: 'temuco',
    schedule_week: 'Lunes - Sábado',
    schedule_week_open: '9:30 hr',
    schedule_week_close: '20:30 hr',
    schedule_sunday: 'Cerrado',
    google_map: {
      latitude: '-38.73415078719999',
      longitud: '-72.61511712333972',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.2880906210535!2d-72.61511712333972!3d-38.73415078719999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3f67bfbdd59%3A0x74dcec435733ba3b!2sAv.%20Alemania%20715%2C%204801008%20Temuco%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1737246167167!5m2!1ses-419!2scl',
    },
    encoded_address: 'Av.+Alemania+715%2C+4801008+Temuco%2C+Araucan%C3%ADa',
  },
]