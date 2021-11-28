import React from 'react'
import styles from '../styles/game-card.module.css'
import TeamCard from './team-card'
import type { Game } from '../lib/model'
import NetworkLogo from './network-logo'
import { DateTime } from 'luxon'

const formatDate = (date: DateTime): string => {
    const formatOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric', minute: 'numeric', timeZoneName: 'short'
    };
    return date.setZone('America/Chicago').toLocaleString(formatOptions);
}

export default function GameCard({ game }: { game: Game }) {
    const classes = (game.topTenMatchup) ? [styles.gameCard, styles.highlight] : [styles.gameCard];
    return (
        <div className={classes.join(' ')}>
            <div className={styles.body}>
                <div className={styles.away}>
                    <TeamCard team={game.away} />
                </div>
                <div className={styles.home}>
                    <TeamCard team={game.home} />
                </div>
                <div className={styles.time}>
                    <NetworkLogo name={game.nationalNetwork} />
                    {formatDate(DateTime.fromISO(game.date))}
                </div>
            </div>
            <div className={styles.footer}>
                <div>
                    {game.competitionDescription}
                </div>
                <div>
                    {game.location.arena}, {game.location.city}, {game.location.state}
                </div>
            </div>
        </div >
    );
}
