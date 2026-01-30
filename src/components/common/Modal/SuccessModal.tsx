import styles from './SuccessModal.module.css';

interface SuccessModalProps {
  message: string;
  onClose: () => void;
}

const SuccessModal = ({ message, onClose }: SuccessModalProps) => {
  return (
    <div className={styles.success}>
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>👍</span>
      </div>
      <p className={styles.message}>{message}</p>
      <button onClick={onClose} className={styles.button}>
        Got it!
      </button>
    </div>
  );
};

export default SuccessModal;
