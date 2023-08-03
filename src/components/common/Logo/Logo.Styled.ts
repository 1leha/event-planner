import { SVG } from 'img';
import { styled } from 'styled-components';

export const Logo = styled(SVG.AppLogo)`
  color: ${p => p.theme.colors.accent};
`;
