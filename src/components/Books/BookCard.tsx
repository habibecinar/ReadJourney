import { Book } from '@/types/book.types';
import styles from './Books.module.css';

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

const BookCard = ({ book, onClick }: BookCardProps) => {
  return (
    <div className={styles.bookCard} onClick={onClick}>
      <img
        src={book.imageUrl || 'https://via.placeholder.com/200x300?text=No+Cover'}
        alt={book.title}
        className={styles.bookCover}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x300?text=No+Cover';
        }}
      />
      <div className={styles.bookInfo}>
        <h3 className={styles.bookTitle}>{book.title}</h3>
        <p className={styles.bookAuthor}>{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
