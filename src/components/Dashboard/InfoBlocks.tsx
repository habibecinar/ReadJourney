import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

const QuoteBlock = () => {
  return (
    <div className={styles.quoteBlock}>
      <p className={styles.quoteText}>
        "Books are a uniquely portable magic."
      </p>
      <p className={styles.quoteAuthor}>— Stephen King</p>
    </div>
  );
};

interface InfoBlockProps {
  text: string;
  linkText: string;
  linkTo: string;
}

const InfoBlock = ({ text, linkText, linkTo }: InfoBlockProps) => {
  return (
    <div className={styles.infoBlock}>
      <p className={styles.infoText}>
        {text}{' '}
        <Link to={linkTo} className={styles.infoLink}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export { QuoteBlock, InfoBlock };
