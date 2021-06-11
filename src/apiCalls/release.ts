import { client } from 'src/utils/apiClient';

export interface PaginationResponse {
  pageId: number;
  totalPages: number;
  totalItems: number;
  first?: string;
  last?: string;
  previous?: string;
  next?: string;
}

export interface ReleaseInfo {
  id: number;
  coverImg: string;
  title: string;
  year: string;
  country: string;
}

export interface SearchResponse {
  paginationInfo: PaginationResponse;
  releases: ReleaseInfo[];
}

export const PAGINATION_SIZE = 50;
const DEFAULT_PAGE_INDEX = 1;

export interface ReleasesByArtistRequest {
  artistName: string;
  paginatedRequest?: string;
}


// a function to make an api call and format reponse
export const getReleasesByArtist = async (
  payload: ReleasesByArtistRequest
): Promise<SearchResponse> => {
  const requestUrl = payload.paginatedRequest
    ? payload.paginatedRequest
    : `https://api.discogs.com/database/search?type=release&artist=${payload.artistName}&page=${DEFAULT_PAGE_INDEX}&per_page=${PAGINATION_SIZE}`;
  const data = await client(requestUrl, {
    headers: {
      Authorization: `Discogs key=${process.env.REACT_APP_DISCOGS_CONSUMER_KEY}, secret=${process.env.REACT_APP_DISCOGS_SECRET_KEY}`,
    },
  });
  const paginationResults: PaginationResponse = {
    pageId: data.pagination.page,
    totalItems: data.pagination.items,
    totalPages: data.pagination.pages,
    next: data.pagination.urls?.next,
    previous: data.pagination.urls?.prev,
    first: data.pagination.urls?.first,
    last: data.pagination.urls?.last,
  };
  const results: SearchResponse = {
    paginationInfo: paginationResults,
    releases: [],
  };

  results.releases = data.results.map((item: any) => {
    return {
      id: item.id,
      coverImg: item.cover_image,
      title: item.title,
      year: item.year,
      country: item.country,
    };
  });

  return results;
};
