import { Logo } from 'components/common/Logo';
import * as SC from './HeaderStandart.styled';
import { Box } from 'components/common/Box';
import { SearchField } from 'components/SearchField';
// import { LangSelector } from 'components/common/LangSelector';
// import { appLang } from 'settings/language';

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
        {/* <LangSelector options={appLang} readOnly type="text" name="lang" /> */}
      </Box>
    </SC.Wrapper>
  );
};
