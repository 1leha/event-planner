import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 10px;
  padding-right: 10px;

  min-width: 220px;

  /* background-color: aqua; */

  @media screen and (min-width: 320px) {
    min-width: 271px;

    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 768px) {
    min-width: 688px;

    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 1320px) {
    min-width: 1280px;

    padding-left: 0;
    padding-right: 0;
  }
`;
