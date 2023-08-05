import { useMediaQuery } from '@yamada-ui/use-media-query';
import * as SC from './Button.styled';
import { IButton } from './IButton';

export const Button = ({
  children,
  size,
  variant,
  fullWidth,
  icon,
}: IButton) => {
  const [mobile] = useMediaQuery('(max-width: 767px)');

  return (
    <SC.Button size={size} fullWidth={fullWidth} variant={variant} icon={icon}>
      <SC.Wrapper>
        {icon}
        {!mobile && children}
      </SC.Wrapper>
    </SC.Button>
  );
};
