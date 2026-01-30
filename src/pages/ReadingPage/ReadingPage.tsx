import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import styles from './ReadingPage.module.css';

const ReadingPage = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const currentBook = useAppSelector((state) => state.books.currentBook);

  useEffect(() => {
    // Load book details
    console.log('Loading book:', bookId);
  }, [bookId]);

  return (
    <div className={styles.readingPage}>
      <h1 className={styles.title}>Reading Progress</h1>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div className={styles.readingControl}>
            <h2>Start Reading</h2>
            <p>Reading control coming soon...</p>
          </div>
          <div className={styles.details}>
            <h3>Reading Details</h3>
            <p>Statistics and diary coming soon...</p>
          </div>
        </div>
        <div className={styles.bookSection}>
          {currentBook ? (
            <div className={styles.currentBook}>
              <div className={styles.bookCover}>
                {currentBook.imageUrl ? (
                  <img src={currentBook.imageUrl} alt={currentBook.title} />
                ) : (
                  <div className={styles.placeholder}>📖</div>
                )}
              </div>
              <h2 className={styles.bookTitle}>{currentBook.title}</h2>
              <p className={styles.bookAuthor}>{currentBook.author}</p>
              <p className={styles.totalPages}>{currentBook.totalPages} pages</p>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>Select a book from your library to start reading</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;
