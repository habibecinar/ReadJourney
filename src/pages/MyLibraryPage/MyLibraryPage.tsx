import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchLibraryBooks } from '../../features/books/booksSlice';
import styles from './MyLibraryPage.module.css';

const MyLibraryPage = () => {
  const dispatch = useAppDispatch();
  const { library } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchLibraryBooks());
  }, [dispatch]);

  return (
    <div className={styles.libraryPage}>
      <h1 className={styles.title}>My Library</h1>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div className={styles.addBook}>
            <h2>Add Book</h2>
            <p>Add book form coming soon...</p>
          </div>
          <div className={styles.info}>
            <h3>Build your library</h3>
            <p>Add books and track your reading progress</p>
          </div>
        </div>
        <div className={styles.booksGrid}>
          {library.isLoading ? (
            <p>Loading library...</p>
          ) : library.books.length > 0 ? (
            library.books.map((book) => (
              <div key={book._id} className={styles.bookCard}>
                <div className={styles.bookCover}>
                  {book.imageUrl ? (
                    <img src={book.imageUrl} alt={book.title} />
                  ) : (
                    <div className={styles.placeholder}>📖</div>
                  )}
                </div>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>{book.author}</p>
                <span className={`${styles.status} ${styles[book.status]}`}>
                  {book.status.replace('-', ' ')}
                </span>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>Your library is empty</p>
              <p className={styles.emptyHint}>Add books to start tracking your reading journey</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLibraryPage;
