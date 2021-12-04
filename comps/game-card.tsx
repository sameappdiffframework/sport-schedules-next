import React from 'react'
import styles from '../styles/game-card.module.scss'
import TeamCard from './team-card'
import type { Game } from '../lib/model'
import NetworkLogo from './network-logo'
import { DateTime } from 'luxon'
import { formatDate, formatTime } from '../lib/utils'

export default function GameCard({ game, showDate }: { game: Game, showDate?: boolean }) {
    const classes = (game.topTenMatchup) ? [styles.gameCard, styles.highlight] : [styles.gameCard];
    const gametime = DateTime.fromISO(game.date);
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
                    {showDate === true && <p>{formatDate(gametime)}</p>}
                    <p>{formatTime(gametime)}</p>
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
