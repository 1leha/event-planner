import { useMediaQuery } from '@yamada-ui/use-media-query';
import * as SC from './Button.styled';
import { IButton } from './interface';

export const Button = ({
  children,
  size,
  variant,
  width,
  icon,
  ...restProps
}: IButton) => {
  const [mobile] = useMediaQuery('(max-width: 767px)');

  return (
    <SC.Button
      size={size}
      width={width}
      variant={variant}
      icon={icon}
      {...restProps}
    >
      <SC.Wrapper>
        {icon && <SC.Icon>{icon}</SC.Icon>}
        {(!mobile && children) || (!icon && children)}
      </SC.Wrapper>
    </SC.Button>
  );
};
