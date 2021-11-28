import GameCard from "./game-card";
import styles from '../styles/single-day-schedule.module.css'
import type { Game } from "../lib/model";
import { DateTime } from "luxon";

const formatDate = (date: DateTime): string => {
  const formatOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', day: 'numeric', month: 'short'
  };
  return date.setZone('America/New_York').toLocaleString(formatOptions);
}

export default function SingleDaySchedule({ games, date }: { date: DateTime, games: Game[] }) {
  return (
    <>
      <section className={styles.day}>
        <h2>{formatDate(date)}</h2>
        {games.map((game, i) => (<GameCard game={game} key={i} />))}
      </section>
    </>
  );
}
