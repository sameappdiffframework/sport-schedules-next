import GameCard from "./game-card";
import styles from '../styles/single-day-schedule.module.scss'
import type { Game } from "../lib/model";
import { DateTime } from "luxon";
import { formatDate, isDefined } from "../lib/utils";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function SingleDaySchedule({ games, date }: { date?: DateTime, games: Game[] }) {
  return (
    <>
      <section>
        {isDefined(date) && (<Typography variant="h2" gutterBottom>{formatDate(date)}</Typography>)}
        <Grid container spacing={2}>
          {games.map((game, i) => (
            <Grid item sm={6} xs={12} key={i}>
              <GameCard game={game} showDate={!isDefined(date)} key={i} />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
}
