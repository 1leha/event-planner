import { AppForm } from 'components/common/Form';

export const CreateEvent = () => {
  const initialValues = {
    title: 'New',
    description: 'asdhdhdghdb',
    date: '1121212',
    time: '1213',
    location: 'asasasasas',
    category: 'ddddf',
    image: '',
    priority: 'vvddf',
  };

  return (
    <div>
      <AppForm />
    </div>
  );
};
