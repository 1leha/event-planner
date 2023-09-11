import { SVG } from 'img';
import { breakPoint } from 'settings/breakpoints';
import { styled } from 'styled-components';

interface IInfoItem {
  type?: 'date' | 'priority';
  priority?: string;
}

export const Card = styled.div`
  width: 271px;

  background-color: ${p => p.theme.colors.white};

  box-shadow: ${p => p.theme.shadows.standart};

  border-radius: ${p => p.theme.radii.galleryCard};

  box-sizing: border-box;

  @media screen and (min-width: ${breakPoint.tablet}px) {
    width: 688px;
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
    width: 628px;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;

  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[13]}px;

  box-sizing: border-box;

  @media screen and (min-width: ${breakPoint.tablet}px) {
    padding-left: ${p => p.theme.space[9]}px;
    padding-right: ${p => p.theme.space[9]}px;
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
  }
`;

export const Thumb = styled.div`
  width: 100%;
  height: 168px;

  margin-bottom: ${p => p.theme.space[9]}px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.thumbBG};

  border-radius: ${p => p.theme.radii.image};

  box-sizing: border-box;
  overflow: hidden;

  @media screen and (min-width: ${breakPoint.tablet}px) {
    height: 272px;
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
  }
`;

export const NoImage = styled(SVG.NoImage)`
  width: 70%;
  height: 70%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const Description = styled.div`
  margin: 0;

  margin-bottom: ${p => p.theme.space[9]}px;

  color: ${p => p.theme.colors.cardDescription};
  font-size: ${p => p.theme.fontSizes.s};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.cardDescription};
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
  flex-wrap: wrap;

  margin-bottom: ${p => p.theme.space[13]}px;

  @media screen and (min-width: ${breakPoint.desktop}px) {
    margin-bottom: ${p => p.theme.space[9]}px;
  }
`;

export const Infoitem = styled.div<IInfoItem>`
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;

  color: ${p => {
    switch (p.priority) {
      case 'high':
        return p.theme.colors.high;
      case 'medium':
        return p.theme.colors.medium;
      case 'low':
        return p.theme.colors.low;

      default:
        return p.theme.colors.accent;
    }
  }};

  font-size: ${p => p.theme.fontSizes.s};
  font-style: normal;
  font-weight: ${p =>
    p.type === 'date'
      ? p.theme.fontWeights.regular
      : p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.cardDescription};

  box-shadow: ${p => p.theme.shadows.standart};

  border-radius: ${p => p.theme.radii.category};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[9]}px;

  @media screen and (min-width: ${breakPoint.tablet}px) {
    justify-content: flex-end;
    gap: ${p => p.theme.space[6]}px;
  }

  @media screen and (min-width: ${breakPoint.desktop}px) {
  }
`;
