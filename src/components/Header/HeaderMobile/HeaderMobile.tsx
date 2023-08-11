import { Logo } from 'components/common/Logo';
import * as SC from './HeaderMobile.styled';
import { Box } from 'components/common/Box';
import { SearchField } from 'components/SearchField';
import { LangSelector } from 'components/common/LangSelector';
import { appLang } from 'settings/language';

export const HeaderMobile = () => {
  return (
    <SC.Wrapper>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 48,
        }}
      >
        <Logo />
        <LangSelector options={appLang} />
      </Box>

      <SearchField />
    </SC.Wrapper>
  );
};
