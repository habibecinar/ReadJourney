import { ReadingProgress } from '../../../types/book.types';
import styles from './Statistics.module.css';

interface StatisticsProps {
  progress: ReadingProgress[];
  totalPages: number;
}

const Statistics = ({ progress, totalPages }: StatisticsProps) => {
  const calculateTotalPagesRead = () => {
    return progress.reduce((total, entry) => {
      return total + (entry.finishPage - entry.startPage);
    }, 0);
  };

  const calculateProgress = () => {
    const pagesRead = calculateTotalPagesRead();
    return Math.min(Math.round((pagesRead / totalPages) * 100), 100);
  };

  const calculateAverageSpeed = () => {
    if (progress.length === 0) return 0;
    const totalSpeed = progress.reduce((sum, entry) => sum + entry.speed, 0);
    return Math.round(totalSpeed / progress.length);
  };

  const progressPercentage = calculateProgress();
  const averageSpeed = calculateAverageSpeed();

  return (
    <div className={styles.statistics}>
      <div className={styles.mainStat}>
        <div className={styles.circleProgress}>
          <svg className={styles.circleSvg} viewBox="0 0 120 120">
            <circle
              className={styles.circleBackground}
              cx="60"
              cy="60"
              r="54"
              fill="none"
              strokeWidth="12"
            />
            <circle
              className={styles.circleFill}
              cx="60"
              cy="60"
              r="54"
              fill="none"
              strokeWidth="12"
              strokeDasharray={`${(progressPercentage / 100) * 339.292} 339.292`}
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className={styles.percentage}>
            <span className={styles.percentageNumber}>{progressPercentage}</span>
            <span className={styles.percentageSign}>%</span>
          </div>
        </div>
        <p className={styles.mainLabel}>Reading Progress</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.icon}>📖</div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{calculateTotalPagesRead()}</span>
            <span className={styles.statLabel}>Pages read</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.icon}>⚡</div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{averageSpeed}</span>
            <span className={styles.statLabel}>Pages per minute</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.icon}>📚</div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{progress.length}</span>
            <span className={styles.statLabel}>Reading sessions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
