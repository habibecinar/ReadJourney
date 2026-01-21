import styles from './Books.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ←
      </button>
      
      <span className={styles.pageInfo}>
        {currentPage} / {totalPages}
      </span>
      
      <button
        className={styles.paginationButton}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
