import styled from 'styled-components';
import { SVG } from 'img';

export const ArrowUp = styled(SVG.ArrowMenuIcon)`
  transform: rotateZ(0);
`;
export const ArrowDown = styled(SVG.ArrowMenuIcon)`
  transform: rotateZ(180deg);
`;

export const getSortOptions = (sortCriteria: string[]) => {
  let id = 0;
  let param = '';

  const sortOptions = sortCriteria.reduce((acc, criteria): any => {
    switch (criteria) {
      case 'name':
        param = 'title';
        break;
      case 'data':
        param = 'startedAt';
        break;

      default:
        param = criteria;
        break;
    }

    const sortOrder = ['asc', 'desc'];
    const sortGroup = sortOrder.map(order => {
      const sortIcon = order === 'desc' ? <ArrowDown /> : <ArrowUp />;

      const element = { id, name: criteria, param, order, icon: sortIcon };
      id += 1;
      return element;
    });
    return [...acc, ...sortGroup];
  }, []);

  return sortOptions;
};
