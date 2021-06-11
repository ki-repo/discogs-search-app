import { ReactElement } from 'react';
import { PageHeader, PageHeaderTitle } from './Header.css';

/**
 * This component is used as a header element for the app to navigate between pages
 */
const Header = (): ReactElement => {
  return (
    <PageHeader>
      <PageHeaderTitle> Discogs Music releases</PageHeaderTitle>
    </PageHeader>
  );
};

export default Header;
