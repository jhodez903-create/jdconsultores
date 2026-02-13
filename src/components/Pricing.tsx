'use client';

import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { Button } from './ui/Button';
import { packages } from '@/data/packages';
import styles from './Pricing.module.css';
import clsx from 'clsx';

export default function Pricing() {
  return (
    <section className={styles.section} id="paquetes">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Planes Diseñados para Escalar</h2>
          <p className={styles.subtitle}>
            Modelo híbrido de bajo riesgo: Retainer + Comisión por resultados.
            Si tú ganas, nosotros ganamos.
          </p>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={clsx(styles.card, pkg.recommended && styles.recommended)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {pkg.recommended && (
                <div className={styles.badge}>Más Popular</div>
              )}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{pkg.name}</h3>
                <p className={styles.planDesc}>{pkg.description}</p>
                <div className={styles.priceContainer}>
                  <div className={styles.retainer}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>{pkg.retainer}</span>
                    <span className={styles.period}>/mes</span>
                  </div>
                  <div className={styles.commission}>
                    + {pkg.commission}% de comisión
                  </div>
                </div>
              </div>

              <div className={styles.features}>
                {pkg.features.map((feature, i) => (
                  <div key={i} className={styles.featureItem}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className={styles.action}>
                <Button 
                  variant={pkg.recommended ? 'primary' : 'outline'} 
                  className="w-full"
                  onClick={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Empezar Ahora
                </Button>
                <div className={styles.guarantee}>
                  <Info size={14} />
                  <span>Garantía de crecimiento o devolución</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
