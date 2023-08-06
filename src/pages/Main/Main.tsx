import { Container } from 'components/common/Container';

import { useGetEventsQuery } from 'redux/events/events.api';

export const Main = () => {
  const { data, error, isLoading } = useGetEventsQuery(null);

  const clickHandler = () => {};

  return (
    <div>
      {isLoading && <div>LOADING</div>}
      <Container>
        <ul>
          {data?.map(event => {
            return <li key={event.id}>{event.title}</li>;
          })}
        </ul>
      </Container>
    </div>
  );
};
