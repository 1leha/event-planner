import { Galery } from 'components/Galery';
import { BackLink } from 'components/common/BackLink';
import { useLocation } from 'react-router';

export const EventDetails = () => {
  const path = useLocation();

  return (
    <>
      <BackLink to={path.state.from} />
      <Galery />
    </>
  );
};
