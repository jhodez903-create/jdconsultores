export const packages = [
  {
    id: 'basic',
    name: 'Nivel Básico',
    description: 'Para negocios que están iniciando o necesitan establecer presencia.',
    retainer: 900,
    commission: 9,
    features: [
      'Gestión de Redes Sociales (Básico)',
      'Diseño de contenido visual estándar',
      'Publicidad inicial (Ads)',
      'Reportes mensuales',
    ],
    recommended: false,
  },
  {
    id: 'intermediate',
    name: 'Nivel Aceleración',
    description: 'Para negocios listos para escalar agresivamente.',
    retainer: 1800,
    commission: 11,
    features: [
      'Gestión de Redes Avanzada',
      'Producción Creativa (Reels/TikTok)',
      'Funnels de Venta de alta conversión',
      'Email Marketing automatizado',
      'Campañas de Publicidad optimizadas',
    ],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'Nivel Dominio',
    description: 'Para negocios que buscan ser líderes de mercado.',
    retainer: 3200,
    commission: 13,
    features: [
      'Todo lo del nivel Aceleración',
      'Consultoría Estratégica Mensual',
      'Implementación de IA y Automatizaciones',
      'Producción audiovisual premium',
      'Acceso directo a fundadores',
      'Estrategia Omnicanal 360°'
    ],
    recommended: false,
  },
];
