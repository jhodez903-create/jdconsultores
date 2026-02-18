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
    title: 'Gestión de redes sociales',
    percentage: 15,
    color: '#FF6B6B',
    content: [
      'Calendario editorial estratégico',
      'Diseño gráfico de posts y stories',
      'Community management y respuesta a comentarios',
      'Optimización de crecimiento orgánico'
    ]
  },
  {
    id: 'creative',
    icon: MonitorPlay,
    title: 'Producción creativa',
    percentage: 20,
    color: '#4ECDC4',
    content: [
      'Edición premium de video',
      'Guiones persuasivos con ganchos virales',
      'Grabación de contenido',
      'Flyers y diseños gráficos',
      'Copywriting persuasivo'
    ]
  },
  {
    id: 'ads',
    icon: BarChart,
    title: 'Publicidad y performance',
    percentage: 25,
    color: '#45B7D1',
    content: [
      'Gestión de campañas en meta ads',
      'Segmentación avanzada de audiencias',
      'A/B testing de creativos y copys',
      'Retargeting para recuperar leads',
      'Optimización diaria de presupuestos'
    ]
  },
  {
    id: 'strategy',
    icon: PenTool,
    title: 'Estrategia y consultoría',
    percentage: 25,
    color: '#96CEB4',
    content: [
      'Investigación de mercado y competencia',
      'Definición de buyer persona',
      'Diseño de ofertas irresistibles',
      'Análisis mensuales de métricas y KPIs',
      'Reuniones de estrategia quincenales'
    ]
  },
  {
    id: 'system',
    icon: Zap,
    title: 'Sistema de máxima conversión',
    percentage: 15,
    color: '#FFEEAD',
    content: [
      'Programa de fidelización',
      'Embudos de venta',
      'Estrategias de seguimiento',
      'Investigación de cliente ideal',
      'Integración de IA para mejorar los procesos',
      'Propuesta de valor integrada en el contenido'
    ]
  }
];

export default function ServicesDetail() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Calculate cumulative percentages for conic-gradient
  const gradientParts = services.reduce((acc, s, i) => {
    const prevEnd = i === 0 ? 0 : acc.currentInfo.end;
    const end = prevEnd + s.percentage;
    acc.parts.push(`${s.color} ${prevEnd}% ${end}%`);
    acc.currentInfo = { end };
    return acc;
  }, { parts: [] as string[], currentInfo: { end: 0 } }).parts.join(', ');

  const chartStyle = {
    background: `conic-gradient(${gradientParts})`
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Desglose de servicios</h2>
          <p className={styles.subtitle}>
            Todo lo que incluye nuestro ecosistema de crecimiento.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Services Column */}
          <div className={styles.servicesCol}>
            <div className={styles.accordion}>
              {services.map((service) => (
                <div key={service.id} className={styles.item}>
                  <button 
                    className={clsx(styles.trigger, openId === service.id && styles.active)}
                    onClick={() => toggle(service.id)}
                  >
                    <div className={styles.triggerContent}>
                      <div className={styles.iconWrapper} style={{ backgroundColor: service.color + '20', color: service.color }}>
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

          {/* Chart Column */}
          <motion.div 
            className={styles.chartCol}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Impacto en el crecimiento</h3>
              <div className={styles.pieContainer}>
                <div className={styles.pieChart} style={chartStyle}>
                  <div className={styles.innerCircle}>
                    <span className={styles.totalLabel}>100%</span>
                    <span className={styles.totalText}>Crecimiento</span>
                  </div>
                </div>
              </div>
              <div className={styles.legend}>
                {services.map(s => (
                  <div key={s.id} className={styles.legendItem}>
                    <span className={styles.legendColor} style={{ backgroundColor: s.color }}></span>
                    <span className={styles.legendText}>{s.title} ({s.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
