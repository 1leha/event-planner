import { Button } from 'components/common/Button';
import * as SC from './GaleryCard.styled';
import { useMediaQuery } from '@yamada-ui/use-media-query';
import { breakPoint } from 'settings/breakpoints';
import { useNavigate, useParams } from 'react-router';
import {
  useDeleteEventMutation,
  useGetEventbyIdQuery,
} from 'redux/events/events.api';
import { format } from 'date-fns';

export const GaleryCard = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const { data, isError, isLoading, isSuccess } = useGetEventbyIdQuery(
    String(eventId)
  );
  const [deleteEvent, { isLoading: isDeleting }] = useDeleteEventMutation();

  const [mobile] = useMediaQuery([`(max-width: ${breakPoint.tablet}px)`]);

  const eventDate = data ? format(new Date(data.startedAt), 'dd.MM') : '';
  const eventTime = data ? format(new Date(data.startedAt), 'HH:mm') : '';

  const deleteEventHandler = () => {
    deleteEvent(eventId);
    navigate('/', { replace: true });
  };

  const editEventHandler = () => {
    navigate('edit', { state: { cardData: data } });
  };

  return (
    <SC.Card>
      <SC.Thumb>
        {data?.image ? (
          <SC.Image src={data?.image} alt={data?.title} />
        ) : (
          <SC.NoImage />
        )}
      </SC.Thumb>

      <SC.CardWrapper>
        <SC.Description>{data?.description}</SC.Description>
        <SC.InfoWrapper>
          <SC.Infoitem>{data?.category}</SC.Infoitem>
          <SC.Infoitem type="priority" priority={data?.priority}>
            {data?.priority}
          </SC.Infoitem>
          <SC.Infoitem>{data?.location}</SC.Infoitem>
          <SC.Infoitem type="date">{`${eventDate} at ${eventTime}`}</SC.Infoitem>
        </SC.InfoWrapper>
        <SC.ButtonWrapper>
          <Button size="s" width={mobile ? 108 : ''} onClick={editEventHandler}>
            Edit
          </Button>
          <Button
            size="s"
            variant="primary"
            width={mobile ? 108 : ''}
            onClick={deleteEventHandler}
          >
            Delete event
          </Button>
        </SC.ButtonWrapper>
      </SC.CardWrapper>
    </SC.Card>
  );
};
