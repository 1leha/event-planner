import { useMediaQuery } from '@yamada-ui/use-media-query';
import * as SC from './OptionsHeader.styled';

interface IProps {
  title: string;
  icon: JSX.Element;
  iconOnLeftIfMobile?: boolean;
  isSelected?: boolean;
}
export const OptionsHeader = ({
  title,
  icon,
  iconOnLeftIfMobile,
  isSelected,
}: IProps) => {
  const [mobile] = useMediaQuery(['(max-width: 767px)']);

  const isRevers = String(!!(mobile && iconOnLeftIfMobile));

  return (
    <SC.HeaderWrapper revers={isRevers} active={String(!!isSelected)}>
      {title}
      {icon}
    </SC.HeaderWrapper>
  );
};
