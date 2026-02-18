'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';
import clsx from 'clsx';

const faqs = [
  {
    question: "¿Cómo garantizan los resultados?",
    answer: "Trabajamos con un sistema validado que incluye pruebas A/B constantes, optimización de presupuestos y estrategias de contenido probadas. Si no cumplimos los objetivos acordados, extendemos nuestro servicio sin costo adicional hasta lograrlos."
  },
  {
    question: "¿Necesito tener un presupuesto grande para publicidad?",
    answer: "No necesariamente. Comenzamos con presupuestos optimizados para validar qué funciona mejor para tu negocio. A medida que vemos retorno de inversión (ROI), escalamos el presupuesto progresivamente."
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Generalmente, empezamos a ver tracción inicial en las primeras 2-3 semanas con la campaña piloto. Resultados consolidados y escalables suelen verse a partir del segundo o tercer mes de trabajo constante."
  },
  {
    question: "¿Qué incluye exactamente el Programa Fundadores?",
    answer: "Incluye una campaña piloto de 7 días donde gestionamos tu publicidad sin costo de servicio (tú solo cubres la inversión publicitaria), más una estrategia de posicionamiento y auditoría completa de tu presencia digital."
  },
  {
    question: "¿Tengo permanencia obligatoria?",
    answer: "Depende del plan. El plan Básico y Aceleración tienen una duración sugerida de 6 meses para ver resultados óptimos. El plan Dominio es un contrato anual debido a la profundidad de la consultoría y servicios involucrados."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Preguntas Frecuentes</h2>
          <p className={styles.subtitle}>
            Resolvemos tus dudas antes de empezar a trabajar juntos.
          </p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button 
                className={clsx(styles.trigger, openIndex === index && styles.active)}
                onClick={() => toggle(index)}
              >
                <span className={styles.question}>{faq.question}</span>
                <div className={styles.iconWrapper}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.contentWrapper}
                  >
                    <div className={styles.answer}>
                      <p>{faq.answer}</p>
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
