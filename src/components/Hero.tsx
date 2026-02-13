'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeText}>Agencia de Growth Partner</span>
          </div>
          
          <h1 className={styles.title}>
            Escala tu Negocio con <span className="text-gradient">Estrategia e IA</span>
          </h1>
          
          <p className={styles.subtitle}>
            Ayudamos a empresas a aumentar su facturación mediante estrategias de marketing, 
            sistemas de ventas, embudos y persuasión. Resultados garantizados por contrato.
          </p>
          
          <div className={styles.actions}>
            <Button size="lg" className={styles.primaryBtn} onClick={() => document.getElementById('paquetes')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Paquetes <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
              Agendar Llamada
            </Button>
          </div>
          
          <div className={styles.guarantee}>
            <div className={styles.checkIcon}>✓</div>
            <span>Garantía de resultados en 30 días o ajustamos la estrategia gratis.</span>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.blob}></div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>Crecimiento Mensual</div>
              <div className={styles.cardBadge}>+127%</div>
            </div>
            <div className={styles.chart}>
              <div className={styles.bar} style={{ height: '30%' }}></div>
              <div className={styles.bar} style={{ height: '45%' }}></div>
              <div className={styles.bar} style={{ height: '35%' }}></div>
              <div className={styles.bar} style={{ height: '60%' }}></div>
              <div className={styles.bar} style={{ height: '80%' }}></div>
              <div className={styles.bar} style={{ height: '100%' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
