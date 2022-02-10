import Stack from '@mui/material/Stack';
import {DateTime} from 'luxon';
import type {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import React from 'react';
import Header from '../comps/header';
import SingleDaySchedule from '../comps/single-day-schedule';
import type {Game} from '../lib/model';
import {getGamesByDate} from '../lib/ingest/basketball';

type AsyncReturnType<T extends (...args: any) => any> = ReturnType<T> extends Promise<infer U> ? U : ReturnType<T>;

interface PageProps {
  games: AsyncReturnType<typeof getGamesByDate>;
}

const Home = ({games}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Header/>
      <main>
        <Stack spacing={2}>
          {Object.entries(games)
            .map(([date, games], i) => (<SingleDaySchedule games={games} date={DateTime.fromISO(date)} key={i}/>))
          }
        </Stack>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async ({res}) => {
  const oneHour = 60 * 60;
  res.setHeader('Cache-Control', `public, s-maxage=${oneHour * 6}, stale-while-revalidate=${oneHour}`);
  function filterGamesToTheNextWeek(gamesByDate: Record<string, Game[]>): Record<string, Game[]> {
    const startOfToday = DateTime.now().setZone('America/New_York').startOf('day');
    const entries = Object.entries(gamesByDate)
      .filter(([date]) => {
        const gameTime = DateTime.fromISO(date).setZone('America/New_York');
        const sevenDaysFromNow = startOfToday
          .setZone('America/New_York')
          .plus({days: 7})
          .startOf('day');
        return startOfToday <= gameTime && gameTime <= sevenDaysFromNow;
      });
    return Object.fromEntries(entries);
  }

  const games = await getGamesByDate();
  return {
    props: {games: filterGamesToTheNextWeek(games)}
  };
};

export default Home;
