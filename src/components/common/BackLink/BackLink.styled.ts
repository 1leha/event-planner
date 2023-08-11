import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;

  margin-bottom: ${p => p.theme.space[9]}px;
  color: ${p => p.theme.colors.accent};

  text-decoration: none;
`;
