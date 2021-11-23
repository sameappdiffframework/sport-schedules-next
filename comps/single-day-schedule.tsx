import GameCard from "./game-card";
import type { Game } from './game-card'
import styles from '../styles/single-day-schedule.module.css'

const formatDate = (date: Date): string => {
  const formatOptions: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York', weekday: 'short', day: 'numeric', month: 'short'
  };
  return date.toLocaleString(undefined, formatOptions);
}

export default function SingleDaySchedule({ games, date }: { date: Date, games: Game[] }) {
  return (
    <>
      <h2>{formatDate(date)}</h2>
      <section className={styles.day}>
        {games.map((game, i) => (<GameCard game={game} key={i} />))}
      </section>
    </>
  );
}
