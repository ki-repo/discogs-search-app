import React, { Fragment, ReactElement, useCallback, useState } from 'react';
import { CardsWrapper } from 'src/shared/components/CardsWrapper.css';
import ReleaseCard from 'src/shared/features/ReleaseCard/ReleaseCard';
import { useQuery } from 'react-query';
import dataQuery from './PopularReleases.dataQuery';
import { ReleaseInfo } from 'src/apiCalls/release';
import Pagination from 'src/shared/components/Pagination/Pagination';
import SearchInput from 'src/shared/components/SearchInput/SearchInput';
/**
 * This component is used for Showing popular Releases
 */
const PopularReleases = (): ReactElement => {
  const [artistName, setArtistName] = useState('');
  const [filterValue, setFilterValue] = useState<string>();
  const [paginatedPageId, setPaginatedPageID] = useState<number>(1);
  const { isLoading, isError, data } = useQuery(
    [
      `${dataQuery.name}-${artistName}-${paginatedPageId}`,
      {
        artistName: artistName,
        paginatedRequest: filterValue,
      },
    ],
    () =>
      dataQuery.fn({
        artistName: artistName,
        paginatedRequest: filterValue,
      }),
    {
      ...dataQuery.options,
    }
  );

  const handleArtistFilterChange = useCallback(
    (artistName: string) => {
      setFilterValue(undefined);
      setArtistName(artistName);
    },
    [setArtistName]
  );

  const handlePaginationChange = useCallback(
    (paginationFilter: string, newPageId: number) => {
      setFilterValue(paginationFilter);
      setPaginatedPageID(newPageId);
    },
    [setFilterValue, setPaginatedPageID]
  );

  return (
    <Fragment>
      <h1>Music Releases</h1>

      <SearchInput
        filterKey="artist"
        label="Filter Artist"
        placeHolder={
          artistName.trim().length === 0 ? 'Random Artists...' : artistName
        }
        onChange={handleArtistFilterChange}
      ></SearchInput>
      {!data && isLoading ? <div>Loading</div> : null}
      {!data && isError ? <div>error</div> : null}
      {data && data.paginationInfo.totalItems === 0 ? (
        <h1>No Releases Found for this artist</h1>
      ) : null}
      {data?.paginationInfo ? (
        <Pagination
          paginationInfo={data?.paginationInfo}
          PaginationCallBack={handlePaginationChange}
        ></Pagination>
      ) : null}
      <CardsWrapper>
        {data?.releases.map((release: ReleaseInfo) => (
          <ReleaseCard
            key={release.id}
            country={release.country}
            coverImg={release.coverImg}
            id={release.id}
            title={release.title}
            year={release.year}
          />
        ))}
      </CardsWrapper>
    </Fragment>
  );
};

export default PopularReleases;
