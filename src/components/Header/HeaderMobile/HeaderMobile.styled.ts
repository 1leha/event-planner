import { styled } from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: tomato; */
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[7]}px;
`;
