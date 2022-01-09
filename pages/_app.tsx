import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import superjson from 'superjson';
import {DateTime} from 'luxon';

superjson.registerCustom<DateTime, string>({
    isApplicable: DateTime.isDateTime,
    serialize: value => value.toISO(),
    deserialize: DateTime.fromISO
  }, 'luxon.DateTime'
);

export default function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
