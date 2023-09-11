import styled from 'styled-components';

interface IProps {
  revers?: string;
  active?: string;
}

export const HeaderWrapper = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: ${p => (p.revers === 'true' ? 'flex-end' : 'space-between')};
  flex-direction: ${p => (p.revers === 'true' ? 'row-reverse' : 'row')};
  gap: ${p => p.theme.space[3]}px;

  padding: ${p => p.theme.space[6]}px;

  margin-bottom: ${p => p.theme.space[0]}px;

  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes.m};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: normal;

  color: ${p =>
    p.active === 'true' ? p.theme.colors.accent : p.theme.colors.text};

  border-bottom-color: ${p => p.theme.colors.divider};
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;
