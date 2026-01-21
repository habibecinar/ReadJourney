import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { fetchRecommended } from '@store/slices/booksSlice';
import Dashboard from '@components/Dashboard/Dashboard';
import Filters from '@components/Dashboard/Filters';
import { QuoteBlock, InfoBlock } from '@components/Dashboard/InfoBlocks';
import BookCard from '@components/Books/BookCard';
import BookModal from '@components/Books/BookModal';
import Pagination from '@components/Books/Pagination';
import { Book } from '@/types/book.types';
import { ROUTES } from '@utils/constants';
import styles from '@components/Books/Books.module.css';
import '@styles/pages.css';

const RecommendedPage = () => {
  const dispatch = useAppDispatch();
  const { recommended, isLoading, pagination } = useAppSelector(state => state.books);
  const [filters, setFilters] = useState<{ title?: string; author?: string }>({});
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchRecommended({ 
      filters, 
      page: pagination.currentPage, 
      limit: 10 
    }));
  }, [dispatch, filters, pagination.currentPage]);

  const handleFilter = (newFilters: { title?: string; author?: string }) => {
    setFilters(newFilters);
  };

  const handlePageChange = (page: number) => {
    dispatch(fetchRecommended({ filters, page, limit: 10 }));
  };

  const handleBookClick = (bookId: string) => {
    const book = recommended.find(b => b._id === bookId);
    if (book) {
      setSelectedBook(book);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const handleAddToLibrary = (bookId: string) => {
    // TODO: Implement add to library functionality
    console.log('Add to library:', bookId);
    handleCloseModal();
  };

  return (
    <div className="pageLayout">
      <div className="container">
        <div className="pageContent">
          <Dashboard>
            <Filters onFilter={handleFilter} />
            <InfoBlock
              text="Start your reading journey! Explore"
              linkText="recommended books"
              linkTo={ROUTES.RECOMMENDED}
            />
            <QuoteBlock />
          </Dashboard>

          <main className="mainContent">
            <h1 className="pageTitle">Recommended</h1>

            {isLoading ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <p style={{ color: 'var(--color-text-secondary)' }}>Loading books...</p>
              </div>
            ) : recommended.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyStateIcon}>📚</div>
                <p className={styles.emptyStateText}>No books found</p>
                <p className={styles.emptyStateSubtext}>
                  Try adjusting your filters to see more results
                </p>
              </div>
            ) : (
              <>
                <div className={styles.booksGrid}>
                  {recommended.map((book) => (
                    <BookCard
                      key={book._id}
                      book={book}
                      onClick={() => handleBookClick(book._id)}
                    />
                  ))}
                </div>

                {pagination.totalPages > 1 && (
                  <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {selectedBook && (
        <BookModal
          book={selectedBook}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddToLibrary={handleAddToLibrary}
        />
      )}
    </div>
  );
};

export default RecommendedPage;
