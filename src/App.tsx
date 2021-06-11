import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { GlobalStyle, MainAppSt } from './App.css';
import Header from './shared/components/Header/Header';

// Lazy loaded Pages , this can be moved along with routing to do better dynamic importing.
const PopularReleasesPage = React.lazy(
  () => import('./containers/PopularReleases/PopularReleases')
);

const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Header />
        <MainAppSt>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + '/popular'}
                  render={() => <PopularReleasesPage />}
                />
                <Redirect to={process.env.PUBLIC_URL + '/popular'} />
              </Switch>
            </Suspense>
          </QueryClientProvider>
        </MainAppSt>
      </Router>
    </React.Fragment>
  );
}

export default App;
