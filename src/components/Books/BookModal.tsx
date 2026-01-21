import { useEffect } from 'react';
import { Book } from '@/types/book.types';
import styles from './BookModal.module.css';

interface BookModalProps {
  book: Book;
  isOpen: boolean;
  onClose: () => void;
  onAddToLibrary?: (bookId: string) => void;
}

const BookModal = ({ book, isOpen, onClose, onAddToLibrary }: BookModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAddToLibrary = () => {
    if (onAddToLibrary) {
      onAddToLibrary(book._id);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className={styles.modalBody}>
          <div className={styles.bookCover}>
            <img 
              src={book.imageUrl} 
              alt={book.title}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/300x450?text=No+Cover';
              }}
            />
          </div>

          <div className={styles.bookDetails}>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookAuthor}>{book.author}</p>

            {book.totalPages && (
              <div className={styles.bookInfo}>
                <span className={styles.infoLabel}>Pages:</span>
                <span className={styles.infoValue}>{book.totalPages}</span>
              </div>
            )}

            {book.recommend && (
              <div className={styles.recommendation}>
                <p className={styles.recommendLabel}>Why you should read:</p>
                <p className={styles.recommendText}>{book.recommend}</p>
              </div>
            )}

            {onAddToLibrary && (
              <button 
                className={styles.addBtn}
                onClick={handleAddToLibrary}
              >
                Add to Library
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
