## Project goal

Is to practice reactjs, through building an app to view and search releases from Discogs [Discogs search api](https://www.discogs.com/)

### Visit App Homepage [Here](https://ki-repo.github.io/discogs-search-app/)

### Planned items:

- [x] Fetch releases from discogs.
- [x] List and search capabilities. 
- [x] Add pagination options.
- [x] To use React Query for data fetching, caching and updating data.
- [x] Use React Hooks, lazy and Suspense APIs.
- [x] Use [styled components](https://styled-components.com/) as a CSS-in-js library.
- [x] Autodeploy the app on github pages using github Actions.
    - used github secrets and deploy scripts to automate the deployment of the app to github pages.
- [x] Work on Accessibility and Responsivness.
    - the app is fully responsive, i used a mix of flexbox and grids for elements in order to maintain responsivness.
    - after opening the website, just press a tab and start type directly.
    - also you can move between elements with keyboard.
- [x] Works well over slow networks
    - i used react query to cache queireis by id, so the pagination response is also cached for defined period.
- [x] The app is progressively ready but not with full capabilities and with more effort can work offline through caching react query quireies into localstorage

## Run the app

1. to install project dependencies

```sh
npm install
```

2. to build the project

```sh
npm run build
```

3. to start the server, then navigate to `localhost:3000`

```sh
npm run start
```

# Project structure

```
build/                      web app build
src/                        project source code
|  apiCalls/                Main app API call functions along with interfaces for payload and response
|  containers/              Main app pages the represent core features
|  shared/components        App UI components that doesn't have any bussiness logic
|  shared/features          UI Components that depends on a feature and can be reused based on props
|  hooks/                   Reusable hooks used within the app
|  provides/                Set of provides that can be used within the app (currently there are none)
|  utils/                   a set of helper functions to extend some base functionality
|  styles/                  styles folder containing fonts and theme variables
|  app.tsx                  Main Component for the web app
+- ...                      app configuration files
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task                   | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run build`        | build app and export to `build` folder  |
| `npm run start`        | Run server on `http://localhost:3000/`  |
| `npm run test`         | run tests                               |
| `npm run test:cypress` | run e2e tests                           |
| `npm run predeploy`    | build app to publish it to github pages |
| `npm run deploy`       | publish app to github pages             |

# Secondary tasks

Husky is used as a pre-commit hook to lint changes according to prettier rules after every commit.

# Notes:

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
