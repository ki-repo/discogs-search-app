import React from 'react';
import * as reactQuery from 'react-query';
jest.mock('react-query');
import { waitFor } from '@testing-library/react';
import { shallow } from 'enzyme';
import PopularReleases from './PopularReleases';
// const mockedRouter = NextRouter as jest.Mocked<typeof NextRouter>;
const mockReplace = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch: () => ({ url: '/popular' }),
}));

test('should render successfully', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should show loading while the query being running is loading data', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should show error when query run fails', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should show list of Releases after showing data', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});


test('should filter Releases', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});

test('should populate Navigate', () => {
  //TODO add test details
  expect(true).toBeTruthy();
});
