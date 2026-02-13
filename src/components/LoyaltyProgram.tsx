import { Users, Award } from 'lucide-react';
import styles from './LoyaltyProgram.module.css';

export default function LoyaltyProgram() {
  return (
    <section className={styles.section} id="loyalty">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Crecemos Juntos</h2>
          <p className={styles.subtitle}>
            Programas exclusivos para nuestros socios más comprometidos.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Referral Program */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Users size={32} />
            </div>
            <h3 className={styles.cardTitle}>Programa de Referidos</h3>
            <p className={styles.cardDesc}>
              Gana comisiones recurrentes por cada empresa que refieras a JD Consultores.
            </p>
            <div className={styles.tiers}>
              <div className={styles.tierItem}>
                <span className={styles.tierBadge}>1 Referido</span>
                <span>$200 USD de crédito o cash</span>
              </div>
              <div className={styles.tierItem}>
                <span className={styles.tierBadge}>3 Referidos</span>
                <span>15% de comisión recurrente por 3 meses</span>
              </div>
              <div className={styles.tierItem}>
                <span className={styles.tierBadge}>5+ Referidos</span>
                <span>Partner Status: 10% de por vida</span>
              </div>
            </div>
          </div>

          {/* Loyalty Benefits */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Award size={32} />
            </div>
            <h3 className={styles.cardTitle}>Beneficios por Lealtad</h3>
            <p className={styles.cardDesc}>
              Premiamos tu permanencia. Mientras más tiempo trabajemos juntos, más beneficios obtienes.
            </p>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>Año 1: Estabilidad</h4>
                  <p>Precio de retainer bloqueado (sin aumentos por inflación).</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>Año 2: Crecimiento</h4>
                  <p>Upgrade gratuito de servicios (valor +$500) y reducción de comisión al 0.5%.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>Año 3+: Dominio</h4>
                  <p>Acceso al &quot;Inner Circle&quot; con networking exclusivo y consultoría directa trimestral.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
