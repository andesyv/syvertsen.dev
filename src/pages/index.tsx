import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Syvertsen.dev'}</title>
        <html lang='en' />
        <meta name="description" content={'Syvertsen.dev'} />
      </Helmet>
      <App />
    </>
  );
};
