import * as yup from 'yup';
import { InferType } from 'yup';

export const formInputSchema = yup.object({
  title: yup.string().required('This field is required'),
  description: yup.string().min(5, 'Minimum 5 char').max(80, 'Max 80 char'),
  date: yup.string().required('This field is required'),
  time: yup.string().required('This field is required'),
  location: yup.string().required('This field is required'),
  category: yup.string().required('This field is required'),
  image: yup.string(),
  priority: yup.string().required('This field is required'),
});

export type TInputSchema = InferType<typeof formInputSchema>;
