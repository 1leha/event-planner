import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 10px;
  padding-right: 10px;

  min-width: 280px;

  /* background-color: aqua; */

  @media screen and (min-width: 320px) {
    min-width: 0;

    width: 271px;
  }

  @media screen and (min-width: 768px) {
    min-width: 0;

    width: 688px;
  }

  @media screen and (min-width: 1300px) {
    min-width: 0;

    width: 1280px;
  }
`;
