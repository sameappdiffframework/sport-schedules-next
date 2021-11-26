import React from 'react'
import styles from '../styles/game-card.module.css'
import TeamCard from './team-card'
import type { Game } from '../lib/model'
import NetworkLogo from './network-logo'

const formatDate = (date: Date): string => {
    const formatOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'UTC', hour: 'numeric', minute: 'numeric', timeZoneName: 'short'
    };
    return date.toLocaleString(undefined, formatOptions);
}

export default function GameCard({ game }: { game: Game }) {
    return (
        <div className={styles.gameCard}>
            <div className={styles.body}>
                <div className={styles.away}>
                    <TeamCard team={game.away} />
                </div>
                <div className={styles.home}>
                    <TeamCard team={game.home} />
                </div>
                <div className={styles.time}>
                    <NetworkLogo name={game.nationalNetwork} />
                    {formatDate(new Date(game.date))}
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
