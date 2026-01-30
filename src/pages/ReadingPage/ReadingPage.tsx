import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { startReading, finishReading } from '../../features/books/booksSlice';
import { booksAPI } from '../../services/api/books.api';
import ReadingControl from '../../components/features/ReadingControl/ReadingControl';
import Diary from '../../components/features/Diary/Diary';
import Statistics from '../../components/features/Statistics/Statistics';
import Modal from '../../components/common/Modal/Modal';
import SuccessModal from '../../components/common/Modal/SuccessModal';
import styles from './ReadingPage.module.css';
import bookIcon from '../../assets/icons/📚.png';

const ReadingPage = () => {
  const { bookId } = useParams();
  const dispatch = useAppDispatch();
  const currentBook = useAppSelector((state) => state.books.currentBook);
  const [isReading, setIsReading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [viewMode, setViewMode] = useState<'diary' | 'statistics'>('diary');

  useEffect(() => {
    if (currentBook && currentBook.progress && currentBook.progress.length > 0) {
      const lastProgress = currentBook.progress[currentBook.progress.length - 1];
      setIsReading(lastProgress.status === 'active');
    }
  }, [currentBook]);

  const handleStartReading = async (page: number) => {
    if (!bookId) return;
    try {
      await dispatch(startReading({ bookId, page })).unwrap();
      setIsReading(true);
      toast.success('Reading session started!');
    } catch (error) {
      toast.error(error as string);
    }
  };

  const handleStopReading = async (page: number) => {
    if (!bookId || !currentBook) return;
    try {
      await dispatch(finishReading({ bookId, page })).unwrap();
      setIsReading(false);

      // Check if book is finished
      if (page >= currentBook.totalPages) {
        setShowSuccessModal(true);
      } else {
        toast.success('Reading session saved!');
      }
    } catch (error) {
      toast.error(error as string);
    }
  };

  const handleDeleteProgress = async (readingId: string) => {
    if (!bookId) return;
    try {
      await booksAPI.deleteReading(bookId, readingId);
      toast.success('Reading session deleted');
      // Reload book data
      window.location.reload();
    } catch (error) {
      toast.error('Failed to delete reading session');
    }
  };

  if (!currentBook) {
    return (
      <div className={styles.readingPage}>
        <div className={styles.emptyState}>
          <img src={bookIcon} alt="Books" className={styles.emptyIcon} />
          <p>No book selected</p>
          <p className={styles.hint}>Please select a book from your library to start reading</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.readingPage}>
      <h1 className={styles.title}>Reading Progress</h1>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <ReadingControl
            isReading={isReading}
            maxPages={currentBook.totalPages}
            onStart={handleStartReading}
            onStop={handleStopReading}
          />

          <div className={styles.detailsWrapper}>
            <div className={styles.detailsHeader}>
              <button
                onClick={() => setViewMode('diary')}
                className={`${styles.viewButton} ${viewMode === 'diary' ? styles.active : ''}`}
              >
                Diary
              </button>
              <button
                onClick={() => setViewMode('statistics')}
                className={`${styles.viewButton} ${viewMode === 'statistics' ? styles.active : ''}`}
              >
                Statistics
              </button>
            </div>

            {viewMode === 'diary' ? (
              <Diary
                progress={currentBook.progress || []}
                onDeleteProgress={handleDeleteProgress}
              />
            ) : (
              <Statistics
                progress={currentBook.progress || []}
                totalPages={currentBook.totalPages}
              />
            )}
          </div>
        </div>
        <div className={styles.bookSection}>
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
            {currentBook.status && (
              <span className={`${styles.status} ${styles[currentBook.status]}`}>
                {currentBook.status.replace('-', ' ')}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <SuccessModal
          message="🎉 Congratulations! You have finished reading this book!"
          onClose={() => setShowSuccessModal(false)}
          variant="book"
        />
      </Modal>
    </div>
  );
};

export default ReadingPage;
