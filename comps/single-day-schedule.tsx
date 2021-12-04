import GameCard from "./game-card";
import styles from '../styles/single-day-schedule.module.scss'
import type { Game } from "../lib/model";
import { DateTime } from "luxon";
import { formatDate, isDefined } from "../lib/utils";

export default function SingleDaySchedule({ games, date }: { date?: DateTime, games: Game[] }) {
  return (
    <>
      <section className={styles.day}>
        {isDefined(date) && (<h2>{formatDate(date)}</h2>)}
        <div>
          {games.map((game, i) => (<GameCard game={game} showDate={!isDefined(date)} key={i} />))}
        </div>
      </section>
    </>
  );
}
