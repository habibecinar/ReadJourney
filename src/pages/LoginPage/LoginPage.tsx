import { Link } from 'react-router-dom';
import LoginForm from '@components/Auth/LoginForm';
import { ROUTES } from '@utils/constants';
import logoDesktop from '@assets/images/Logodesktop.png';
import logoMobile from '@assets/images/Logomobile.png';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.authPage}>
      <div className={styles.leftSection}>
        <div className={styles.imageWrapper}>
          <div style={{ 
            width: '100%', 
            height: '400px', 
            background: 'linear-gradient(135deg, #30B94D 0%, #1F1F1F 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '120px'
          }}>
            📖
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.formWrapper}>
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
            Expand your mind, reading <span className={styles.titleAccent}>a book</span>
          </h1>
          
          <LoginForm />

          <p className={styles.linkText}>
            Don't have an account?{' '}
            <Link to={ROUTES.REGISTER} className={styles.link}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
