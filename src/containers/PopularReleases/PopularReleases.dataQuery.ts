import {
  getReleasesByArtist,
  ReleasesByArtistRequest,
  SearchResponse,
} from 'src/apiCalls/release';

const QUERY_NAME = 'discogs';

const DataQueryFn = (payload: ReleasesByArtistRequest): Promise<SearchResponse> => {
  return getReleasesByArtist(payload);
};

const DataQueryOptions = {
  staleTime: 5000,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
};

const dataQuery = {
  name: QUERY_NAME,
  fn: DataQueryFn,
  options: DataQueryOptions,
};

export default dataQuery;
