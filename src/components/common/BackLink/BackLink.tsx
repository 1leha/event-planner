import { SVG } from 'img';
import * as SC from './BackLink.styled';

export const BackLink = (props: any) => {
  return (
    <SC.Wrapper {...props}>
      <SVG.ArrowBackIcon />
      Back
    </SC.Wrapper>
  );
};
