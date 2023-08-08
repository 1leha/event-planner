import { Formik, Form, Field, FormikProps } from 'formik';
import { Button } from '../Button';
import * as SC from './Form.styled';
import {
  TInputSchema,
  formInputSchema,
} from 'helpers/validation/formInputSchema';
import { TextField } from '../TextField';
import { MultilinedField } from '../MultilinedField';

// interface IProps {
//   title: string;
//   description?: string;
//   date: string;
//   time: string;
//   location: string;
//   category: string;
//   image: string;
//   priority: string;
// }

interface IProps {
  inputValue?: TInputSchema;
}

const initialValues: TInputSchema = {
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
  category: '',
  image: '',
  priority: '',
};

export const AppForm = ({ inputValue }: IProps) => {
  // console.log('inputValues', inputValue);

  const handlerSubmit = (formValues: TInputSchema, actions: any) => {
    // console.log('formValues', formValues);

    actions.resetForm();

    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={inputValue ?? initialValues}
      onSubmit={handlerSubmit}
      validationSchema={formInputSchema}
    >
      {(formik: FormikProps<TInputSchema>) => {
        const fieldResetHandler = (name: string) => {
          // console.log('name', name);
          formik.setFieldValue(name, '');
        };

        return (
          <Form>
            <SC.Wrapper>
              <TextField
                type="text"
                name="title"
                placeholder="title"
                label="title"
              />

              <MultilinedField
                name="description"
                // placeholder="Description"
                label="Description"
              />
              {/* <TextField type="date" name="date" />
              <TextField type="time" name="time" /> */}
              <TextField
                type="text"
                name="location"
                placeholder="location"
                label="Location"
                id="location"
              />
              <Button type="submit" variant="primary">
                Add event
              </Button>
            </SC.Wrapper>
          </Form>
        );
      }}
    </Formik>
  );
};
// const a = {
//   createdAt: '2023-08-03T08:52:54.889Z',
//   image: 'https://loremflickr.com/640/480/fashion',
//   priority: 'priority 1',
//   category: 'category 1',
//   title: 'Associate',
//   startedAt: '2014-11-04T08:02:15.947Z',
//   location: 'Stephonborough',
//   description: 'value-added',
//   id: '1',
// };