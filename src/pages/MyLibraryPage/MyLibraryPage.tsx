import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchLibraryBooks, addBookToLibrary, removeBookFromLibrary, setCurrentBook } from '../../features/books/booksSlice';
import AddBookForm from '../../components/features/AddBookForm/AddBookForm';
import Modal from '../../components/common/Modal/Modal';
import BookDetailsModal from '../../components/common/Modal/BookDetailsModal';
import SuccessModal from '../../components/common/Modal/SuccessModal';
import { UserBook, AddBookData } from '../../types/book.types';
import styles from './MyLibraryPage.module.css';
import bookIcon from '../../assets/icons/📚.png';

const MyLibraryPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { library } = useAppSelector((state) => state.books);
  const [selectedBook, setSelectedBook] = useState<UserBook | null>(null);
  const [showBookModal, setShowBookModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'all' | 'unread' | 'in-progress' | 'done'>('all');

  useEffect(() => {
    dispatch(fetchLibraryBooks());
  }, [dispatch]);

  const handleAddBook = async (data: AddBookData) => {
    try {
      await dispatch(addBookToLibrary(data)).unwrap();
      setShowSuccessModal(true);
      toast.success('Book added successfully!');
    } catch (error) {
      toast.error(error as string);
    }
  };

  const handleBookClick = (book: UserBook) => {
    setSelectedBook(book);
    setShowBookModal(true);
  };

  const handleStartReading = () => {
    if (!selectedBook) return;
    dispatch(setCurrentBook(selectedBook));
    navigate(`/reading/${selectedBook._id}`);
    setShowBookModal(false);
  };

  const handleRemoveBook = async (bookId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await dispatch(removeBookFromLibrary(bookId)).unwrap();
      toast.success('Book removed from library');
    } catch (error) {
      toast.error(error as string);
    }
  };

  const filteredBooks =
    statusFilter === 'all'
      ? library.books
      : library.books.filter((book) => book.status === statusFilter);

  return (
    <div className={styles.libraryPage}>
      <h1 className={styles.title}>My Library</h1>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <AddBookForm onSubmit={handleAddBook} isLoading={library.isLoading} />
          <div className={styles.info}>
            <h3>Build your library</h3>
            <p>Add books and track your reading progress</p>
            <button
              onClick={() => navigate('/recommended')}
              className={styles.recommendedLink}
            >
              ← Discover new books
            </button>
          </div>
        </div>
        <div className={styles.booksSection}>
          <div className={styles.filterBar}>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className={styles.statusFilter}
            >
              <option value="all">All books</option>
              <option value="unread">Unread</option>
              <option value="in-progress">In progress</option>
              <option value="done">Finished</option>
            </select>
          </div>

          <div className={styles.booksGrid}>
            {library.isLoading ? (
              <p>Loading library...</p>
            ) : filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div
                  key={book._id}
                  className={styles.bookCard}
                  onClick={() => handleBookClick(book)}
                >
                  <button
                    className={styles.deleteButton}
                    onClick={(e) => handleRemoveBook(book._id, e)}
                    aria-label="Remove book"
                  >
                    ×
                  </button>
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
                <img src={bookIcon} alt="Books" className={styles.emptyIcon} />
                <p>No books found</p>
                <p className={styles.emptyHint}>
                  To get started, create a library and add the books you intend to read.
                </p>
              </div>
            )}
          </div>
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
            onStartReading={handleStartReading}
            isInLibrary={true}
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
          variant="book"
        />
      </Modal>
    </div>
  );
};

export default MyLibraryPage;
