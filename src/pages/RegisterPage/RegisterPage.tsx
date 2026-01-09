import { Link } from 'react-router-dom';
import RegisterForm from '@components/Auth/RegisterForm';
import { ROUTES } from '@utils/constants';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
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
            📚
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.formWrapper}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>📚</div>
            <span className={styles.logoText}>Read Journey</span>
          </div>

          <h1 className={styles.title}>Expand your mind, reading <span style={{ color: 'var(--color-accent)' }}>a book</span></h1>
          <p className={styles.subtitle}>
            Create an account to start tracking your reading journey
          </p>

          <RegisterForm />

          <p className={styles.linkText}>
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} className={styles.link}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
