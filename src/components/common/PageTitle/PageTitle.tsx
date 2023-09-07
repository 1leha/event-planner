import * as SC from './PageTitle.styled';

interface IProps {
  children: string;
}

export const PageTitle = ({ children }: IProps) => {
  return <SC.Title>{children}</SC.Title>;
};
