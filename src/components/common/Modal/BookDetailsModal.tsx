import { Book } from '../../../types/book.types';
import styles from './BookDetailsModal.module.css';

interface BookDetailsModalProps {
  book: Book;
  onAddToLibrary?: () => void;
  onStartReading?: () => void;
  isInLibrary?: boolean;
}

const BookDetailsModal = ({
  book,
  onAddToLibrary,
  onStartReading,
  isInLibrary = false,
}: BookDetailsModalProps) => {
  return (
    <div className={styles.bookDetails}>
      <div className={styles.bookCover}>
        {book.imageUrl ? (
          <img src={book.imageUrl} alt={book.title} />
        ) : (
          <div className={styles.placeholder}>📖</div>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>{book.author}</p>
        <p className={styles.pages}>{book.totalPages} pages</p>

        {onAddToLibrary && !isInLibrary && (
          <button onClick={onAddToLibrary} className={styles.addButton}>
            Add to library
          </button>
        )}

        {onStartReading && isInLibrary && (
          <button onClick={onStartReading} className={styles.startButton}>
            Start reading
          </button>
        )}
      </div>
    </div>
  );
};

export default BookDetailsModal;
