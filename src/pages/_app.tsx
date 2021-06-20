import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
