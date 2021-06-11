import React, { ReactElement } from 'react';
import { PaginationResponse, PAGINATION_SIZE } from '../../../apiCalls/release';
import { PaginationControl, PaginationInfo, PaginationWrapper } from './Pagination.css';
/**
 * This component is used as a Pagination component
 */

export interface PaginationProps {
  PaginationCallBack: Function;
  paginationInfo: PaginationResponse;
}
const Pagination = ({
  PaginationCallBack,
  paginationInfo,
}: PaginationProps): ReactElement => {
  if (paginationInfo.totalItems <= PAGINATION_SIZE) {
    return <></>;
  }
  return (
    <PaginationWrapper>
      <PaginationControl
        tabIndex={3}
        isDisabled={!paginationInfo.first}
        onClick={() => {
          paginationInfo.first && PaginationCallBack(paginationInfo.first, 1);
        }}
      >
        {'<<'} first
      </PaginationControl>
      <PaginationControl
        tabIndex={4}
        isDisabled={!paginationInfo.previous}
        onClick={() => {
          paginationInfo.previous &&
            PaginationCallBack(
              paginationInfo.previous,
              paginationInfo.pageId - 1
            );
        }}
      >
        {'<'}previous
      </PaginationControl>

      <PaginationInfo>
        Page {paginationInfo.pageId} of {paginationInfo.totalPages}
      </PaginationInfo>
      <PaginationControl
        tabIndex={5}
        isDisabled={!paginationInfo.next}
        onClick={() => {
          paginationInfo.next &&
            PaginationCallBack(paginationInfo.next, paginationInfo.pageId + 1);
        }}
      >
        next {'>'}
      </PaginationControl>
      <PaginationControl
        tabIndex={6}
        isDisabled={!paginationInfo.last}
        onClick={() => {
          paginationInfo.last &&
            PaginationCallBack(paginationInfo.last, paginationInfo.totalPages);
        }}
      >
        last {'>>'}
      </PaginationControl>
    </PaginationWrapper>
  );
};

export default Pagination;
