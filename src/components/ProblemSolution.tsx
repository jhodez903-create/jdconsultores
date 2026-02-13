'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle, TrendingUp, Users, Target, Zap } from 'lucide-react';
import styles from './ProblemSolution.module.css';

const problems = [
  { icon: XCircle, text: "Falta de presencia digital consistente" },
  { icon: XCircle, text: "Inversión en publicidad sin retorno claro (ROI)" },
  { icon: XCircle, text: "Contenido visual genérico y de baja calidad" },
  { icon: XCircle, text: "Desconocimiento del cliente ideal" },
];

const solutions = [
  { icon: TrendingUp, title: "Estrategia constante", text: "Plan de contenidos y presencia que posiciona tu marca." },
  { icon: Target, title: "Publicidad con ROI", text: "Campañas optimizadas enfocadas en conversión y ventas." },
  { icon: Zap, title: "Contenido Premium", text: "Narrativa visual de alto impacto que conecta emocionalmente." },
  { icon: Users, title: "Cliente Ideal", text: "Investigación profunda para llegar a quien realmente compra." },
];

export default function ProblemSolution() {
  return (
    <section className={styles.section} id="soluciones">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>¿Te sientes identificado?</h2>
          <p className={styles.subtitle}>
            Muchos negocios estancan su facturación por cometer estos errores comunes.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Problems Column */}
          <motion.div 
            className={styles.problemsCol}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardInfo}>
              <h3 className={styles.colTitle}>Lo que detiene tu crecimiento</h3>
              <ul className={styles.problemList}>
                {problems.map((item, idx) => (
                  <li key={idx} className={styles.problemItem}>
                    <item.icon className={styles.problemIcon} size={24} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div 
            className={styles.solutionsCol}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.colTitle}>Nuestra Solución: Growth Partner</h3>
            <div className={styles.solutionGrid}>
              {solutions.map((item, idx) => (
                <div key={idx} className={styles.solutionCard}>
                  <div className={styles.iconWrapper}>
                    <item.icon className={styles.solutionIcon} size={28} />
                  </div>
                  <div>
                    <h4 className={styles.solutionTitle}>{item.title}</h4>
                    <p className={styles.solutionText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
