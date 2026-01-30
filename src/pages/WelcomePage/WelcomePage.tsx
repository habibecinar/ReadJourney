import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className={styles.welcomePage}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Expand your mind, reading <span className={styles.highlight}>a book</span>
            </h1>
            <p className={styles.subtitle}>
              Books are a gateway to knowledge and wisdom. Start your reading journey today!
            </p>
            <div className={styles.buttons}>
              <Link to="/register" className={styles.registerBtn}>
                Registration
              </Link>
              <Link to="/login" className={styles.loginBtn}>
                Log In
              </Link>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.bookIcon}>📚</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
