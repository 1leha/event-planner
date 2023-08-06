import { Logo } from 'components/common/Logo';
import * as SC from './HeaderStandart.styled';
import { Box } from 'components/common/Box';
import { SearchField } from 'components/SearchField';

export const HeaderStandart = () => {
  return (
    <SC.Wrapper>
      <Logo />

      <Box
        style={{
          display: 'flex',
          gap: 24,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SearchField />
        <select name="lang">
          <option>En</option>
          <option>Ua</option>
        </select>
      </Box>
    </SC.Wrapper>
  );
};
