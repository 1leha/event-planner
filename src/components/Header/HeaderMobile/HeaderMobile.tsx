import { Logo } from 'components/common/Logo';
import * as SC from './HeaderMobile.styled';
import { Box } from 'components/common/Box';
import { SearchField } from 'components/SearchField';

export const HeaderMobile = () => {
  return (
    <SC.Wrapper>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        <select name="lang">
          <option>En</option>
          <option>Ua</option>
        </select>
      </Box>

      <SearchField />
    </SC.Wrapper>
  );
};
