import GameCard from "./game-card";
import styles from '../styles/single-day-schedule.module.css'
import type { Game } from "../lib/model";

const formatDate = (date: Date): string => {
  const formatOptions: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York', weekday: 'short', day: 'numeric', month: 'short'
  };
  return date.toLocaleString('en-US', formatOptions);
}

export default function SingleDaySchedule({ games, date }: { date: Date, games: Game[] }) {
  return (
    <>
      <section className={styles.day}>
        <h2>{formatDate(date)}</h2>
        {games.map((game, i) => (<GameCard game={game} key={i} />))}
      </section>
    </>
  );
}
