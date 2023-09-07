import { useLocation } from 'react-router';

export const EditEvent = () => {
  const location = useLocation();

  console.log('location', location);

  return <div>EditEvent</div>;
};
