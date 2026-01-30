import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.description}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className={styles.suggestion}>
          It might have been moved or deleted.
        </p>
        <div className={styles.actions}>
          <Link to="/recommended" className={styles.primaryButton}>
            Go to Recommended Books
          </Link>
          <Link to="/" className={styles.secondaryButton}>
            Back to Home
          </Link>
        </div>
        <div className={styles.decoration}>📚</div>
      </div>
    </div>
  );
};

export default NotFoundPage;
