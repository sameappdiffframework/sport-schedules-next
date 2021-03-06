import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'normalize.css';
import 'sakura.css';
import type {AppProps} from 'next/app';
import superjson from 'superjson';
import {DateTime} from 'luxon';
import Head from 'next/head';
import React from 'react';
import Footer from '../comps/footer';

superjson.registerCustom<DateTime, string>({
    isApplicable: DateTime.isDateTime,
    serialize: value => value.toISO(),
    deserialize: DateTime.fromISO
  }, 'luxon.DateTime'
);

export default function MyApp({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <title>Sport Schedules - Next.js</title>
      <meta name="description" content="Generated by create next app"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Component {...pageProps} />
    <Footer/>
  </>;
}
