import GameCard from './game-card';
import type {Game} from '../lib/model';
import {DateTime} from 'luxon';
import {formatDate, isDefined} from '../lib/utils';
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function SingleDaySchedule({ games, date }: { date?: DateTime, games: Game[] }) {
  return (
    <>
      <section>
        {isDefined(date) && (<Typography variant="h2" gutterBottom>{formatDate(date)}</Typography>)}
        <Grid container spacing={4}>
          {games.map((game, i) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={i} justifyContent="space-between">
              <GameCard game={game} showDate={!isDefined(date)} key={i} />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
}
