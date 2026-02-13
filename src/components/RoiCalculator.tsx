'use client';

import { useState, useMemo } from 'react';
import { packages } from '@/data/packages';
import styles from './RoiCalculator.module.css';
import clsx from 'clsx';
import { DollarSign, TrendingUp } from 'lucide-react';

export default function RoiCalculator() {
  const [currentRevenue, setCurrentRevenue] = useState<number>(5000);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('intermediate');
  const [projectedGrowth, setProjectedGrowth] = useState<number>(30); // Percentage

  const selectedPackage = packages.find(p => p.id === selectedPackageId) || packages[1];

  const calculations = useMemo(() => {
    const revenueIncrease = currentRevenue * (projectedGrowth / 100);
    const newRevenue = currentRevenue + revenueIncrease;
    
    // Costs
    const retainer = selectedPackage.retainer;
    const commission = revenueIncrease * (selectedPackage.commission / 100);
    const totalInvestment = retainer + commission;
    
    // Returns
    const netProfitIncrease = revenueIncrease - totalInvestment;
    const roiPercentage = totalInvestment > 0 ? (netProfitIncrease / totalInvestment) * 100 : 0;
    
    return {
      revenueIncrease,
      newRevenue,
      retainer,
      commission,
      totalInvestment,
      netProfitIncrease,
      roiPercentage
    };
  }, [currentRevenue, selectedPackage, projectedGrowth]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className={styles.section} id="calculadora">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Calculadora de ROI</h2>
          <p className={styles.subtitle}>
            Proyecta tu retorno de inversión. La transparencia es nuestra base.
          </p>
        </div>

        <div className={styles.calculatorCard}>
          <div className={styles.inputs}>
            <div className={styles.inputGroup}>
              <label>Facturación Mensual Actual (USD)</label>
              <div className={styles.inputWrapper}>
                <DollarSign size={20} className={styles.inputIcon} />
                <input 
                  type="number" 
                  value={currentRevenue} 
                  onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                  className={styles.input}
                  min="0"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Meta de Crecimiento ({projectedGrowth}%)</label>
              <input 
                type="range" 
                min="10" 
                max="200" 
                value={projectedGrowth} 
                onChange={(e) => setProjectedGrowth(Number(e.target.value))}
                className={styles.slider}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Selecciona tu Paquete</label>
              <div className={styles.packageSelect}>
                {packages.map(pkg => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={clsx(styles.pkgBtn, selectedPackageId === pkg.id && styles.activePkg)}
                  >
                    {pkg.name} ({pkg.commission}%)
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultHeader}>
              <h3>Proyección Mensual</h3>
              <div className={styles.roiBadge}>
                {calculations.roiPercentage.toFixed(0)}% ROI Estimado
              </div>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metric}>
                <span>Nueva Facturación Estimada</span>
                <strong className={styles.good}>{formatCurrency(calculations.newRevenue)}</strong>
              </div>
              <div className={styles.metric}>
                <span>Incremento de Facturación</span>
                <strong className={styles.good}>+ {formatCurrency(calculations.revenueIncrease)}</strong>
              </div>
              
              <div className={styles.divider}></div>
              
              <div className={styles.metric}>
                <span>Inversión Fija (Retainer)</span>
                <strong>{formatCurrency(calculations.retainer)}</strong>
              </div>
              <div className={styles.metric}>
                <span>Comisión ({selectedPackage.commission}%)</span>
                <strong>{formatCurrency(calculations.commission)}</strong>
              </div>
              <div className={styles.metric}>
                <span>Inversión Total</span>
                <strong className={styles.neutral}>{formatCurrency(calculations.totalInvestment)}</strong>
              </div>
            </div>

            <div className={styles.netResult}>
              <span>Ganancia Neta Adicional (Después de Inversión)</span>
              <div className={styles.finalAmount}>
                {formatCurrency(calculations.netProfitIncrease)}
                {calculations.netProfitIncrease > 0 ? <TrendingUp size={24} /> : null}
              </div>
            </div>
            
            <p className={styles.disclaimer}>
              * Estimaciones basadas en proyecciones. Los resultados reales pueden variar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
