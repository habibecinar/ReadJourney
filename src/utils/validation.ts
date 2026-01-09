import * as yup from 'yup';
import { VALIDATION_MESSAGES } from './constants';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const registerSchema = yup.object().shape({
  name: yup.string().required(VALIDATION_MESSAGES.NAME_REQUIRED),
  email: yup
    .string()
    .matches(emailPattern, VALIDATION_MESSAGES.EMAIL_INVALID)
    .required(VALIDATION_MESSAGES.REQUIRED),
  password: yup
    .string()
    .min(7, VALIDATION_MESSAGES.PASSWORD_MIN)
    .required(VALIDATION_MESSAGES.REQUIRED),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailPattern, VALIDATION_MESSAGES.EMAIL_INVALID)
    .required(VALIDATION_MESSAGES.REQUIRED),
  password: yup
    .string()
    .min(7, VALIDATION_MESSAGES.PASSWORD_MIN)
    .required(VALIDATION_MESSAGES.REQUIRED),
});

export const addBookSchema = yup.object().shape({
  title: yup.string().required(VALIDATION_MESSAGES.REQUIRED),
  author: yup.string().required(VALIDATION_MESSAGES.REQUIRED),
  totalPages: yup
    .number()
    .positive('Total pages must be positive')
    .required(VALIDATION_MESSAGES.REQUIRED),
});

export const filterBooksSchema = yup.object().shape({
  title: yup.string(),
  author: yup.string(),
});

export const readingPageSchema = yup.object().shape({
  page: yup
    .number()
    .positive('Page number must be positive')
    .required(VALIDATION_MESSAGES.REQUIRED),
});
