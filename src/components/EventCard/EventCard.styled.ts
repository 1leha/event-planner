import { styled } from 'styled-components';

interface IAdditionalInfoItem {
  priority?: string;
}

export const Card = styled.li`
  position: relative;

  width: 272px;
  height: 480px;

  box-shadow: ${p => p.theme.shadows.standart};

  list-style: none;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.card};

  box-sizing: border-box;
  overflow: hidden;
`;

export const AdditionalInfoWrapper = styled.div`
  position: absolute;
  top: ${p => p.theme.space[5]}px;
  left: ${p => p.theme.space[5]}px;

  display: inline-flex;
  gap: ${p => p.theme.space[5]}px;
`;

export const AdditionalInfoItem = styled.span<IAdditionalInfoItem>`
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-top: 6px;
  padding-bottom: 6px;

  font-size: ${p => p.theme.fontSizes.s};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.cardDescription};

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

  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.category};
`;

export const Thumb = styled.div`
  width: 100%;
  height: 328px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.thumbBG};

  box-sizing: border-box;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const Info = styled.div`
  position: relative;
  top: -40px;

  width: 100%;
  height: 100%;

  transform: translateY(0);
  transition: ${p => p.theme.transitions.standart};

  box-sizing: border-box;
  overflow: hidden;

  ${Card}:hover & {
    transform: translateY(-56px);
  }
`;

export const TimeLocationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;

  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontSizes.regular};
  line-height: ${p => p.theme.lineHeights.cardDate};

  color: ${p => p.theme.colors.accent};

  background-color: ${p => p.theme.colors.cardDateBG};
`;

export const DescriptionWrapper = styled.div`
  padding: ${p => p.theme.space[6]}px;

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[6]}px;
  justify-content: space-between;

  background-color: ${p => p.theme.colors.white};
`;

export const Title = styled.h3`
  margin: 0;

  color: ${p => p.theme.colors.cardTitle};
  font-size: ${p => p.theme.fontSizes.m};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.cardTitle};
`;

export const Description = styled.div`
  margin: 0;
  height: 80px;

  color: ${p => p.theme.colors.cardDescription};
  font-size: ${p => p.theme.fontSizes.s};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.cardDescription};
`;
