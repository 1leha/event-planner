import { BackLink } from 'components/common/BackLink';
import { AppForm } from 'components/common/Form';
import { format } from 'date-fns';
import { useLocation } from 'react-router';

export const EditEvent = () => {
  const path = useLocation();
  const {
    id,
    title,
    description,
    location,
    image,
    category,
    priority,
    startedAt,
  } = path.state.cardData;

  const eventDate = format(new Date(startedAt), 'yyyy-MM-dd');
  const eventTime = format(new Date(startedAt), 'HH:mm');

  const cardData = {
    title,
    description,
    date: eventDate,
    time: eventTime,
    location,
    category,
    image,
    priority,
  };
  console.log('location', location);

  return (
    <div>
      <BackLink to="/" />
      <AppForm id={id} inputValue={cardData} />
    </div>
  );
};
