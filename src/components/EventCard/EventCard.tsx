import { IEvents } from 'helpers/interfaces/events';
import * as SC from './EventCard.styled';
import { SVG } from 'img';
import { format } from 'date-fns';
import { Box } from 'components/common/Box';
import { toUpperFirstLetter } from 'helpers/toUpperFirsLetter';
import { Button } from 'components/common/Button';
import { useLocation, useNavigate } from 'react-router-dom';

interface ICard {
  eventData: IEvents;
}
export const EventCard = ({ eventData }: ICard) => {
  const {
    id,
    title,
    description,
    image,
    location,
    startedAt,
    category,
    priority,
  } = eventData;

  const navigate = useNavigate();
  const path = useLocation();

  const eventDate = format(new Date(startedAt), 'dd.MM');
  const eventTime = format(new Date(startedAt), 'HH:mm');

  const onClickHandler = () => {
    navigate(id, { state: { from: path } });
  };

  return (
    <SC.Card onClick={onClickHandler}>
      <SC.AdditionalInfoWrapper>
        <SC.AdditionalInfoItem>{category}</SC.AdditionalInfoItem>
        <SC.AdditionalInfoItem priority={priority}>
          {priority}
        </SC.AdditionalInfoItem>
      </SC.AdditionalInfoWrapper>
      <SC.Thumb>
        {image ? <SC.Image src={image} alt={title} /> : <SVG.NoImage />}
      </SC.Thumb>
      <SC.Info>
        <SC.TimeLocationWrapper>
          <span>
            {eventDate} at {eventTime}
          </span>
          <span>{location}</span>
        </SC.TimeLocationWrapper>
        <SC.DescriptionWrapper>
          <SC.Title>{toUpperFirstLetter(title)}</SC.Title>
          <SC.Description>{description}</SC.Description>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Button
              size="m"
              variant="primary"
              width={114}
              onClick={onClickHandler}
            >
              More Info
            </Button>
          </Box>
        </SC.DescriptionWrapper>
      </SC.Info>
    </SC.Card>
  );
};
