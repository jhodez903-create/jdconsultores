'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BarChart, PenTool, MessageCircle, MonitorPlay, Zap } from 'lucide-react';
import styles from './ServicesDetail.module.css';
import clsx from 'clsx';

const services = [
  {
    id: 'social',
    icon: MessageCircle,
    title: 'Gestión de Redes Sociales',
    content: [
      'Calendario editorial estratégico',
      'Diseño gráfico de posts y stories',
      'Community Management y respuesta a comentarios',
      'Optimización de perfiles (Bio, Highlights)',
      'Estrategia de crecimiento orgánico'
    ]
  },
  {
    id: 'creative',
    icon: MonitorPlay,
    title: 'Producción Creativa',
    content: [
      'Edición de video vertical (Reels/TikTok)',
      'Guiones persuasivos con ganchos virales',
      'Fotografía de producto (si aplica)',
      'Diseño de miniaturas y carruseles',
      'Animaciones y Motion Graphics'
    ]
  },
  {
    id: 'ads',
    icon: BarChart,
    title: 'Publicidad y Performance',
    content: [
      'Gestión de campañas en Meta Ads y Google Ads',
      'Segmentación avanzada de audiencias',
      'A/B Testing de creativos y copys',
      'Retargeting para recuperar carritos/leads',
      'Optimización diaria de presupuesto'
    ]
  },
  {
    id: 'strategy',
    icon: PenTool,
    title: 'Estrategia y Consultoría',
    content: [
      'Investigación de mercado y competencia',
      'Definición de Buyer Persona',
      'Diseño de ofertas irresistibles',
      'Análisis mensual de métricas y KPIs',
      'Reuniones de estrategia quincenales'
    ]
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'IA y Automatizaciones',
    content: [
      'Chatbots para atención 24/7',
      'Embudos de venta automatizados',
      'Email Marketing secuencial',
      'CRM configuración y gestión',
      'Integración de herramientas con IA'
    ]
  }
];

export default function ServicesDetail() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Desglose de Servicios</h2>
          <p className={styles.subtitle}>
            Todo lo que incluye nuestro ecosistema de crecimiento.
          </p>
        </div>

        <div className={styles.accordion}>
          {services.map((service) => (
            <div key={service.id} className={styles.item}>
              <button 
                className={clsx(styles.trigger, openId === service.id && styles.active)}
                onClick={() => toggle(service.id)}
              >
                <div className={styles.triggerContent}>
                  <div className={styles.iconWrapper}>
                    <service.icon size={24} />
                  </div>
                  <span className={styles.serviceTitle}>{service.title}</span>
                </div>
                <ChevronDown 
                  className={clsx(styles.arrow, openId === service.id && styles.rotate)} 
                />
              </button>
              
              <AnimatePresence>
                {openId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.contentWrapper}
                  >
                    <div className={styles.content}>
                      <ul className={styles.list}>
                        {service.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
