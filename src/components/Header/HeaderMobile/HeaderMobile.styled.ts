import { styled } from 'styled-components';

export const HeaderMobile = styled.header`
  background-color: ${p => p.theme.colors.bg};
  height: 168px;

  padding: ${p => p.theme.space[7]}px;

  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.accent};

  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  /* background-color: tomato; */
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[7]}px;
`;
