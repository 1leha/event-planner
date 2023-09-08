import { Formik, FormikProps } from 'formik';
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
import { priorityList } from 'settings/prioritys';
import { parse } from 'date-fns';
import { useCategories } from 'helpers/hooks/useCategories';
import {
  useAddEventMutation,
  useEditEventMutation,
} from 'redux/events/events.api';
import { useNavigate } from 'react-router-dom';

interface IProps {
  id?: string;
  inputValue?: TInputSchema;
}

const initialValues: TInputSchema = {
  title: '',
  description: '',
  date: '2023-05-13',
  time: '',
  location: '',
  category: '',
  image: '',
  priority: '',
};

export const AppForm = ({ id, inputValue }: IProps) => {
  const { categoriesData } = useCategories();
  const categories = categoriesData.map(el => el.category);
  const navigate = useNavigate();

  // const { currentTime, currentDate } = useDateTime();

  const [addEvent, { isLoading }] = useAddEventMutation();
  const [editEvent, { isLoading: isEditLoading }] = useEditEventMutation();

  const handlerSubmit = (formValues: TInputSchema, actions: any) => {
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

    if (id) {
      editEvent({ id, data: payload });
    } else {
      addEvent(payload);
    }
    actions.resetForm();
    actions.setSubmitting(false);
    navigate('/', { replace: true });
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

                <DateField name="date" label="Select date" />

                <TimeField name="time" label="Select time" />

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
                  // setDefaultValue
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
              </SC.Wrapper>

              <SC.Button type="submit" variant="primary">
                {inputValue ? 'Edit event' : 'Add event'}
              </SC.Button>
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
