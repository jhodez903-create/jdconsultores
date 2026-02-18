'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Dilsa P.',
    role: 'CEO, Kuntur Wasi Casa de Cambio',
    quote: "En solo 3 meses pasamos de facturar S/5k a S/25k mensuales. El embudo y el sistema de ventas que implementaron es una máquina.",
    badge: '🚀 +400% Facturación',
  },
  {
    id: 2,
    name: 'Cristian R.',
    role: 'CEO, Vip Car Autolavado',
    quote: "El equipo de JD Consultores entiende la psicología del cliente mejor que nadie. El ROI de nuestras campañas se duplicó y gracias a la estrategia de ofertas logramos atraer más clientes, aumentando mi facturación 5 veces.",
    badge: '📈 ROI Duplicado',
  },
  {
    id: 3,
    name: 'Jorge M.',
    role: 'Gerente de Ventas, Deza Capital Inmobiliaria',
    quote: "La oferta de lanzamiento con garantía fue lo que me convenció, pero los resultados me hicieron quedarme. Son socios reales que buscan el crecimiento integral y el desarrollo de sistemas eficientes.",
    badge: '🤝 Socio Estratégico',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonios">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Casos de Éxito</h2>
          <p className={styles.subtitle}>
            Resultados reales de negocios que decidieron escalar.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.quoteIcon}>
                <Quote size={40} />
              </div>
              
              <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
              
              <div className={styles.author}>
                <div className={styles.info}>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>

              <div className={styles.badge}>
                {testimonial.badge}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
