import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              JD Consultores
            </Link>
            <p className={styles.tagline}>
              Potenciamos tu facturación con estrategias de growth partner, sistemas de ventas e inteligencia artificial.
            </p>
          </div>

          <div className={styles.links}>
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><Link href="#soluciones">Soluciones</Link></li>
              <li><Link href="#paquetes">Paquetes</Link></li>
              <li><Link href="#nosotros">Nosotros</Link></li>
              <li><Link href="#faq">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Contacto</h3>
            <ul>
              <li>
                <Mail size={18} />
                <span>contacto@jdconsultores.com</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>
          
          <div className={styles.social}>
            <h3>Síguenos</h3>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} JD Consultores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
