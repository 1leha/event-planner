import { styled } from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: tomato; */
  width: 100%;
  display: flex;
  gap: ${p => p.theme.space[7]}px;
  justify-content: space-between;
  align-items: center;
`;
