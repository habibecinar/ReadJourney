import styles from './SuccessModal.module.css';
import thumbsUpIcon from '../../../assets/icons/👍.png';
import bookIcon from '../../../assets/icons/📚.png';

interface SuccessModalProps {
  message: string;
  onClose: () => void;
  variant?: 'thumbsUp' | 'book';
}

const SuccessModal = ({ message, onClose, variant = 'thumbsUp' }: SuccessModalProps) => {
  const icon = variant === 'book' ? bookIcon : thumbsUpIcon;
  
  return (
    <div className={styles.success}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt="Success" className={styles.icon} />
      </div>
      <p className={styles.message}>{message}</p>
      <button onClick={onClose} className={styles.button}>
        Got it!
      </button>
    </div>
  );
};

export default SuccessModal;
