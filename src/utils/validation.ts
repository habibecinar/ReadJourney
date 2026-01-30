import * as yup from 'yup';

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .matches(emailPattern, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(emailPattern, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters'),
});

export const addBookSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .min(1, 'Title is required'),
  author: yup
    .string()
    .required('Author is required')
    .min(1, 'Author is required'),
  totalPages: yup
    .number()
    .required('Total pages is required')
    .positive('Total pages must be positive')
    .integer('Total pages must be an integer')
    .min(1, 'Total pages must be at least 1'),
});

export const readingPageSchema = yup.object().shape({
  page: yup
    .number()
    .required('Page number is required')
    .positive('Page number must be positive')
    .integer('Page number must be an integer')
    .min(1, 'Page number must be at least 1'),
});

export const filterSchema = yup.object().shape({
  title: yup.string().optional(),
  author: yup.string().optional(),
});
