'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import styles from './ContactForm.module.css';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', revenue: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>¿Listo para Escalar?</h2>
          <p className={styles.subtitle}>
            Agenda una llamada estratégica gratuita. Analizaremos tu caso 
            y te diremos si podemos ayudarte.
          </p>
        </div>

        <div className={styles.formCard}>
          {status === 'success' ? (
            <div className={styles.successMessage}>
              <h3>¡Mensaje Enviado!</h3>
              <p>Nos pondremos en contacto contigo en menos de 24 horas.</p>
              <Button onClick={() => setStatus('idle')} variant="outline">Enviar otro mensaje</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@empresa.com"
                />
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="company">Empresa / Marca</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    required 
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre del negocio"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="revenue">Facturación Actual</label>
                  <select 
                    id="revenue" 
                    name="revenue" 
                    required 
                    value={formData.revenue}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona...</option>
                    <option value="0-1k">Menos de $1k USD</option>
                    <option value="1k-5k">$1k - $5k USD</option>
                    <option value="5k-10k">$5k - $10k USD</option>
                    <option value="10k+">Más de $10k USD</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">¿Cuál es tu mayor obstáculo?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos brevemente..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Enviando...' : (
                  <>Enviar Solicitud <Send size={18} className="ml-2" /></>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
