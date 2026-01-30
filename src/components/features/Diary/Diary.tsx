import { ReadingProgress } from '../../../types/book.types';
import styles from './Diary.module.css';

interface DiaryProps {
  progress: ReadingProgress[];
  onDeleteProgress: (readingId: string) => void;
}

const Diary = ({ progress, onDeleteProgress }: DiaryProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const calculateDuration = (start: string, finish: string) => {
    const startDate = new Date(start);
    const finishDate = new Date(finish);
    const diff = finishDate.getTime() - startDate.getTime();
    const minutes = Math.floor(diff / 60000);
    return minutes;
  };

  const calculatePercentage = (finishPage: number, totalPages: number) => {
    return Math.round((finishPage / totalPages) * 100);
  };

  if (!progress || progress.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No reading sessions yet</p>
        <p className={styles.hint}>Start reading to track your progress</p>
      </div>
    );
  }

  return (
    <div className={styles.diary}>
      <div className={styles.entries}>
        {progress.map((entry) => (
          <div key={entry._id} className={styles.entry}>
            <div className={styles.header}>
              <div className={styles.dateInfo}>
                <span className={styles.date}>{formatDate(entry.startReading)}</span>
                <span className={styles.percentage}>
                  {calculatePercentage(entry.finishPage, 300)}%
                </span>
              </div>
              <button
                onClick={() => onDeleteProgress(entry._id)}
                className={styles.deleteButton}
                aria-label="Delete reading session"
              >
                ×
              </button>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.label}>Time:</span>
                <span className={styles.value}>
                  {calculateDuration(entry.startReading, entry.finishReading)} min
                </span>
              </div>

              <div className={styles.stat}>
                <span className={styles.label}>Pages:</span>
                <span className={styles.value}>
                  {entry.finishPage - entry.startPage} pages
                </span>
              </div>

              <div className={styles.stat}>
                <span className={styles.label}>Speed:</span>
                <span className={styles.value}>{entry.speed} p/min</span>
              </div>
            </div>

            <div className={styles.timeline}>
              <span className={styles.time}>{formatTime(entry.startReading)}</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${calculatePercentage(entry.finishPage, 300)}%` }}
                />
              </div>
              <span className={styles.time}>{formatTime(entry.finishReading)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
