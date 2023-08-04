import { Logo } from 'components/common/Logo';
import * as SC from './HeaderStandart.styled';
import { Box } from 'components/common/Box';

export const HeaderStandart = () => {
  return (
    <SC.Wrapper>
      <Logo />

      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <input type="te xt" />
        <select name="lang">
          <option>En</option>
          <option>Ua</option>
        </select>
      </Box>
    </SC.Wrapper>
  );
};
