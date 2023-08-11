import { format } from 'date-fns';

export const useDateTime = () => {
  const timeNow = new Date();

  const currentTime = format(timeNow, 'HH:mm');
  const currentDate = format(timeNow, 'yyyy-MM-dd');
  return { currentTime, currentDate };
};
