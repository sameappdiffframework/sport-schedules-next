import type {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import Head from 'next/head';
import type {ParsedUrlQuery} from 'node:querystring';
import React from 'react';
import Header from '../comps/header';
import SingleDaySchedule from '../comps/single-day-schedule';
import type {Game, Team} from '../lib/model';
import {isDefined} from '../lib/utils';
import {getTeamSchedules} from '../lib/ingest/basketball';

const Home = ({schedule, team}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>
      <main>
        <h2>{team.nickname} schedule</h2>
        <SingleDaySchedule games={schedule}/>
      </main>
    </>
  );
};

interface TeamPath extends ParsedUrlQuery {
  team: string;
}

type PageProps = { team: Team, schedule: Game[] };

export const getServerSideProps: GetServerSideProps<PageProps, TeamPath> = async (context) => {
  const teamAbbreviation = context.params?.team;
  if (isDefined(teamAbbreviation)) {
    const [teams, teamSchedules] = await getTeamSchedules();
    const team: Team | undefined = teams.find(t => t.abbreviation.toLowerCase() === teamAbbreviation);
    const schedule: Game[] | undefined = teamSchedules.get(teamAbbreviation);
    if (!isDefined(team)) {
      throw new Error(`no team found for ${teamAbbreviation}`);
    } else if (!isDefined(schedule)) {
      throw new Error(`no games found for ${teamAbbreviation}`);
    } else {
      return {props: {team: team, schedule: schedule}};
    }
  } else {
    throw new Error('no team defined');
  }
};

export default Home;
