import styled from 'styled-components';

interface IProps {
  isopen: string;
}

export const Wrapper = styled.div<IProps>`
  width: 100%;

  padding: ${p => p.theme.space[6]}px;

  position: absolute;
  top: calc(80px + ${p => p.theme.space[6]}px);
  left: 0;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.textField};

  box-shadow: ${p => p.theme.shadows.standart};

  transition: ${p => p.theme.transitions.standart};

  box-sizing: border-box;

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  z-index: 100;
`;

export const OptionList = styled.ul<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${p => p.theme.space[6]}px;

  list-style: none;
  width: 100%;
  height: fit-content;

  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;

  color: ${p => p.theme.colors.text};

  box-sizing: border-box;
`;

export const OptionItem = styled.li`
  display: block;
  position: relative;

  list-style: none;
  width: 100%;

  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;

  color: ${p => p.theme.colors.text};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[6]}px;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 0;
    top: calc(100% + ${p => p.theme.space[6]}px);

    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.divider};
  }

  &:hover {
    color: ${p => p.theme.colors.hover};
  }

  box-sizing: border-box;

  cursor: pointer;
`;
