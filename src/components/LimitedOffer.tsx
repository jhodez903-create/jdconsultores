'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Star, ShieldCheck, Zap } from 'lucide-react';
import styles from './LimitedOffer.module.css';
import { Button } from './ui/Button';

export default function LimitedOffer() {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 25, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const bonuses = [
    { icon: Zap, title: "Campaña Piloto Gratuita", desc: "7 días de publicidad con presupuesto incluido" },
    { icon: Star, title: "Evaluación Estratégica 360°", desc: "Auditoría completa de tu presencia digital" },
    { icon: Gift, title: "Kit de Identidad Visual", desc: "Templates editables para tus redes" },
    { icon: ShieldCheck, title: "Garantía Extendida", desc: "30 días adicionales de garantía de resultados" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.offerCard}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.header}>
            <div className={styles.badge}>OFERTA DE LANZAMIENTO</div>
            <h2 className={styles.title}>Programa Fundadores</h2>
            <p className={styles.subtitle}>
              Solo para los primeros 10 clientes. Accede a bonos exclusivos valorados en 
              <span className={styles.valueHighlight}> $3,000 USD</span>.
            </p>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.bonuses}>
              {bonuses.map((bonus, i) => (
                <div key={i} className={styles.bonusItem}>
                  <div className={styles.iconWrapper}>
                    <bonus.icon size={20} />
                  </div>
                  <div>
                    <h4 className={styles.bonusTitle}>{bonus.title}</h4>
                    <p className={styles.bonusDesc}>{bonus.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.timerContainer}>
              <h3>La oferta termina en:</h3>
              <div className={styles.timer}>
                <div className={styles.timeBlock}>
                  <span className={styles.timeValue}>{timeLeft.days}</span>
                  <span className={styles.timeLabel}>Días</span>
                </div>
                <div className={styles.separator}>:</div>
                <div className={styles.timeBlock}>
                  <span className={styles.timeValue}>{timeLeft.hours}</span>
                  <span className={styles.timeLabel}>Hrs</span>
                </div>
                <div className={styles.separator}>:</div>
                <div className={styles.timeBlock}>
                  <span className={styles.timeValue}>{timeLeft.minutes}</span>
                  <span className={styles.timeLabel}>Min</span>
                </div>
                <div className={styles.separator}>:</div>
                <div className={styles.timeBlock}>
                  <span className={styles.timeValue}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className={styles.timeLabel}>Seg</span>
                </div>
              </div>
              
              <Button size="lg" className={styles.ctaBtn} onClick={() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })}>
                Quiero Aplicar Ahora
              </Button>
              <p className={styles.spotsLeft}>🔥 Solo quedan 3 lugares disponibles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
