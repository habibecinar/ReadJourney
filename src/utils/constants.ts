export const API_BASE_URL = 'https://readjourney.b.goit.study/api';

export const ROUTES = {
  HOME: '/',
  REGISTER: '/register',
  LOGIN: '/login',
  RECOMMENDED: '/recommended',
  LIBRARY: '/library',
  READING: '/reading',
} as const;

export const BOOK_STATUS = {
  UNREAD: 'unread',
  IN_PROGRESS: 'in-progress',
  DONE: 'done',
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MOBILE_LIMIT: 2,
  TABLET_LIMIT: 8,
  DESKTOP_LIMIT: 10,
} as const;

export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  EMAIL_INVALID: 'Invalid email format',
  PASSWORD_MIN: 'Password must be at least 7 characters',
  NAME_REQUIRED: 'Name is required',
} as const;

export const STORAGE_KEYS = {
  TOKEN: 'readjourney_token',
  USER: 'readjourney_user',
} as const;
