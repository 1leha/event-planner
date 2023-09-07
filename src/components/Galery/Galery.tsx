import { PageTitle } from 'components/common/PageTitle';
import * as SC from './Galery.styled';
import { GaleryCard } from './GaleryCard';

export const Galery = () => {
  return (
    <SC.GaleryWrapper>
      <div>
        <PageTitle>Galery Opening</PageTitle>
        <GaleryCard />
      </div>
    </SC.GaleryWrapper>
  );
};
