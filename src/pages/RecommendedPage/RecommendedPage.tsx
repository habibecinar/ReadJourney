import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchRecommendedBooks, addBookToLibrary } from '../../features/books/booksSlice';
import FiltersForm from '../../components/features/FiltersForm/FiltersForm';
import Pagination from '../../components/common/Pagination/Pagination';
import Modal from '../../components/common/Modal/Modal';
import BookDetailsModal from '../../components/common/Modal/BookDetailsModal';
import SuccessModal from '../../components/common/Modal/SuccessModal';
import { Book } from '../../types/book.types';
import styles from './RecommendedPage.module.css';

const RecommendedPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { recommended } = useAppSelector((state) => state.books);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showBookModal, setShowBookModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [filters, setFilters] = useState({ title: '', author: '' });

  useEffect(() => {
    dispatch(fetchRecommendedBooks({ page: 1, limit: 10, ...filters }));
  }, [dispatch, filters]);

  const handleFilterSubmit = (data: { title: string; author: string }) => {
    setFilters(data);
  };

  const handlePageChange = (page: number) => {
    dispatch(fetchRecommendedBooks({ page, limit: 10, ...filters }));
  };

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setShowBookModal(true);
  };

  const handleAddToLibrary = async () => {
    if (!selectedBook) return;

    try {
      await dispatch(
        addBookToLibrary({
          title: selectedBook.title,
          author: selectedBook.author,
          totalPages: selectedBook.totalPages,
        })
      ).unwrap();
      setShowBookModal(false);
      setShowSuccessModal(true);
      toast.success('Book added to library!');
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <div className={styles.recommendedPage}>
      <h1 className={styles.title}>Recommended Books</h1>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <FiltersForm onSubmit={handleFilterSubmit} />
          <div className={styles.info}>
            <h3>Start your reading journey</h3>
            <p>Discover amazing books tailored for you</p>
            <button
              onClick={() => navigate('/library')}
              className={styles.libraryLink}
            >
              Go to My Library →
            </button>
          </div>
        </div>
        <div className={styles.booksSection}>
          <div className={styles.booksGrid}>
            {recommended.isLoading ? (
              <p>Loading books...</p>
            ) : recommended.books.length > 0 ? (
              recommended.books.map((book) => (
                <div
                  key={book._id}
                  className={styles.bookCard}
                  onClick={() => handleBookClick(book)}
                >
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

          {recommended.totalPages > 1 && (
            <Pagination
              currentPage={recommended.currentPage}
              totalPages={recommended.totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>

      {/* Book Details Modal */}
      <Modal
        isOpen={showBookModal}
        onClose={() => setShowBookModal(false)}
        title="Book Details"
      >
        {selectedBook && (
          <BookDetailsModal
            book={selectedBook}
            onAddToLibrary={handleAddToLibrary}
          />
        )}
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      >
        <SuccessModal
          message="Good job! The book has been successfully added to your library."
          onClose={() => setShowSuccessModal(false)}
        />
      </Modal>
    </div>
  );
};

export default RecommendedPage;
