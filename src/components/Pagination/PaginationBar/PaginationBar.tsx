import React, { ReactNode, useEffect } from 'react';
import * as SC from './PaginationBar.styled';
import { SVG } from 'img';
import { useAppSearchParams } from 'helpers/hooks/useAppSearchParams';
import { filterSearchParam } from 'helpers/filterSearchParam';
import { useTotalPages } from 'helpers/hooks/useTotalPages';

interface IProps {
  itemsPerPage: number;
}

export const PaginationBar = ({ itemsPerPage }: IProps) => {
  const { search, category, limit, order, sortBy, page, setSearchParams } =
    useAppSearchParams();

  const { eventsLength, refetch, isLoading, totalPages } = useTotalPages({
    category,
    search,
    itemsPerPage,
  });

  useEffect(() => {
    setSearchParams(
      filterSearchParam({
        search,
        category,
        page: 1,
        limit,
        order,
        sortBy,
      })
    );
    refetch();
  }, [
    category,
    limit,
    order,
    page,
    refetch,
    search,
    setSearchParams,
    sortBy,
    totalPages,
  ]);

  const onChange = (current: unknown): void => {
    setSearchParams(
      filterSearchParam({
        search,
        category,
        page: current,
        limit,
        order,
        sortBy,
      })
    );
  };

  const itemRender = (current: number, type: string, element: ReactNode) => {
    const isActive = current === Number(page);

    if (type === 'page') {
      return <SC.Button isactive={String(isActive)}>{current}</SC.Button>;
    }

    if (type === 'jump-prev') {
      return <SC.Button>...</SC.Button>;
    }

    if (type === 'jump-next') {
      return <SC.Button>...</SC.Button>;
    }

    if (type === 'prev') {
      return (
        <SC.Button>
          <SC.LeftArrow />
        </SC.Button>
      );
    }

    if (type === 'next') {
      return (
        <SC.Button>
          <SC.RightArrow />
        </SC.Button>
      );
    }

    return element;
  };

  return (
    <>
      {!isLoading && (
        <SC.PaginationWrapper>
          <SC.PaginationBar
            total={eventsLength}
            defaultCurrent={Number(page)}
            current={Number(page)}
            pageSize={itemsPerPage}
            onChange={onChange}
            hideOnSinglePage
            showPrevNextJumpers
            showLessItems={true}
            itemRender={itemRender}
            prevIcon={<SVG.CevronPagginationIcon />}
          />
        </SC.PaginationWrapper>
      )}
    </>
  );
};
