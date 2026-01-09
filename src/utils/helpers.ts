export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const calculateReadingTime = (
  pagesRead: number,
  speed: number
): number => {
  if (speed === 0) return 0;
  return Math.round(pagesRead / speed);
};

export const calculateProgress = (
  currentPage: number,
  totalPages: number
): number => {
  if (totalPages === 0) return 0;
  return Math.round((currentPage / totalPages) * 100);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const getImageUrl = (url: string): string => {
  if (url.startsWith('http')) return url;
  return `${import.meta.env.VITE_API_BASE_URL}${url}`;
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
