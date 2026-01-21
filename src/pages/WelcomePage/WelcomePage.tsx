import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import logoDesktop from '@assets/images/Logodesktop.png';
import logoMobile from '@assets/images/Logomobile.png';
import styles from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className={styles.welcomePage}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img 
            src={logoDesktop} 
            alt="Read Journey" 
            className={styles.logoDesktop}
          />
          <img 
            src={logoMobile} 
            alt="Read Journey" 
            className={styles.logoMobile}
          />
        </div>
        
        <h1 className={styles.title}>
          Expand your mind, reading <span style={{ color: 'var(--color-accent)' }}>a book</span>
        </h1>
        
        <p className={styles.description}>
          Discover new worlds and adventures by reading books that inspire and enrich your life
        </p>
        
        <div className={styles.buttons}>
          <Link to={ROUTES.REGISTER} className={`${styles.button} ${styles.buttonPrimary}`}>
            Register
          </Link>
          <Link to={ROUTES.LOGIN} className={`${styles.button} ${styles.buttonSecondary}`}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
