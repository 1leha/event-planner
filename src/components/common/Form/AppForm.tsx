import { Formik, Form, FormikProps } from 'formik';
import { Button } from '../Button';
import * as SC from './Form.styled';
import {
  TInputSchema,
  formInputSchema,
} from 'helpers/validation/formInputSchema';
import { TextField } from '../TextField';
import { MultilinedField } from '../MultilinedField';
import { TimeField } from '../TimeField';
import { DateField } from '../DateField';
import { SelectField } from '../SelectField';
import { Link } from 'react-router-dom';
import { BackLink } from '../BackLink';
import { priorityList } from 'settings/prioritys';

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
    console.log('formValues', formValues);

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
        return (
          <>
            <BackLink to="/" />
            <SC.Title>Create new event </SC.Title>
            <SC.Form>
              <SC.Wrapper>
                <TextField
                  type="text"
                  name="title"
                  placeholder="Meet someone..."
                  label="Title"
                />

                <MultilinedField
                  name="description"
                  placeholder="Discuss something..."
                  label="Description"
                />

                <DateField name="date" />

                <TimeField name="time" />

                <TextField
                  type="text"
                  name="location"
                  placeholder="location"
                  label="Location"
                  id="location"
                />

                <SelectField
                  name="category"
                  placeholder="Select category"
                  label="Category"
                  options={priorityList}
                  readOnly
                  setDefaultValue
                />

                <Button type="submit" variant="primary">
                  {inputValue ? 'Edit event' : 'Add event'}
                </Button>
              </SC.Wrapper>
            </SC.Form>
          </>
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
