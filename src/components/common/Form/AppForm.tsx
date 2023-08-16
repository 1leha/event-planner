import { Formik, FormikProps } from 'formik';
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
import { BackLink } from '../BackLink';
import { priorityList } from 'settings/prioritys';
import { parse } from 'date-fns';
import { useCategories } from 'helpers/hooks/useCategories';
import { useAddEventMutation } from 'redux/events/events.api';
// import { useDateTime } from 'helpers/hooks/useDateTime';

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
  const { categories } = useCategories();
  // const { currentTime, currentDate } = useDateTime();

  const [addEvent, { isLoading }] = useAddEventMutation();

  const handlerSubmit = (formValues: TInputSchema, actions: any) => {
    // console.log('formValues', formValues);

    const {
      title,
      description,
      date,
      time,
      location,
      category,
      image,
      priority,
    } = formValues;

    // console.log(
    //   'date+time parse:',
    //   parse(
    //     `${formValues.date}:${formValues.time}`,
    //     'yyyy-MM-dd:HH:mm',
    //     new Date()
    //   )
    // );

    const eventDate = parse(`${date}:${time}`, 'yyyy-MM-dd:HH:mm', new Date());
    const payload = {
      title,
      description,
      startedAt: eventDate,
      location,
      category: category.toLowerCase(),
      priority: priority.toLowerCase(),
      image,
    };

    console.log('payload', payload);
    addEvent(payload);
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
        // console.log(formik.errors);
        return (
          <>
            {isLoading && <div>Loading....</div>}
            <BackLink to="/" />
            <SC.Title>
              {inputValue ? 'Edit event' : 'Create new event'}
            </SC.Title>
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
                />

                <SelectField
                  name="category"
                  placeholder="Select category"
                  label="Category"
                  options={categories}
                  setDefaultValue
                />

                <TextField
                  type="text"
                  name="image"
                  placeholder="Select picture"
                  label="Add picture"
                  disabled
                />

                <SelectField
                  name="priority"
                  placeholder="Select priority"
                  label="Priority"
                  options={priorityList}
                  readOnly
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
