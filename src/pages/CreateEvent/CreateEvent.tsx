import { BackLink } from 'components/common/BackLink';
import { AppForm } from 'components/common/Form';
import { useLocation } from 'react-router';

export const CreateEvent = () => {
  const { state } = useLocation();
  return (
    <div>
      <BackLink to={state.from} />
      <AppForm />
    </div>
  );
};
