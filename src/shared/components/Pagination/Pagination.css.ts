import styled from 'styled-components';

interface PaginationControlProps {
  isDisabled?: boolean;
}
/** Pagination component*/
export const PaginationWrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: row;
  padding: 0.4rem;
  @media (max-width: 40rem) {
    flex-direction: column;
  }
`;

export const PaginationControl = styled.div<PaginationControlProps>`
  flex: 1 1 auto;
  border: 1px solid;
  text-align: center;
  margin: 0.4rem;
  align-self: center;
  color: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  border-color: ${({ isDisabled }) => (isDisabled ? 'gray' : 'red')};
  color: ${({ isDisabled }) => (isDisabled ? 'gray' : 'black')};
  &:hover {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }
  @media (max-width: 40rem) {
    width: 100%;
  }
`;
