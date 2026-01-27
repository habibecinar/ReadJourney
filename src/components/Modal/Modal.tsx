import { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Icon from '@components/Icon/Icon';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'small' | 'medium' | 'large';
}

const Modal = ({ isOpen, onClose, children, title, size = 'medium' }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        className={`${styles.modal} ${styles[size]}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <Icon name="close" size={24} />
        </button>

        {title && (
          <h2 className={styles.title}>{title}</h2>
        )}

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(
    modalContent,
    document.body
  );
};

export default Modal;
