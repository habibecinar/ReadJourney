import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchRecommendedBooks } from '../../features/books/booksSlice';
import styles from './RecommendedPage.module.css';

const RecommendedPage = () => {
  const dispatch = useAppDispatch();
  const { recommended } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchRecommendedBooks({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div className={styles.recommendedPage}>
      <h1 className={styles.title}>Recommended Books</h1>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div className={styles.filters}>
            <h2>Filters</h2>
            <p>Filter functionality coming soon...</p>
          </div>
          <div className={styles.info}>
            <h3>Start your reading journey</h3>
            <p>Discover amazing books tailored for you</p>
          </div>
        </div>
        <div className={styles.booksGrid}>
          {recommended.isLoading ? (
            <p>Loading books...</p>
          ) : recommended.books.length > 0 ? (
            recommended.books.map((book) => (
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
              </div>
            ))
          ) : (
            <p>No books found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedPage;
