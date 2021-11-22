import React from 'react'
import styles from '../styles/game-card.module.css'
import Image from 'next/image'
import TeamCard from './team-card'
import espn from '../public/logos/espn.png'

export interface Team {
    abbreviation: string;
    nickname: string;
    city: string;
    rank: number;
    sport: string;
    logo: StaticImageData,
    record: {
        wins: number;
        losses: number;
        ties?: number;
        division: string;
        divisionRank: number
    }
}

export interface Game {
    code?: string;
    competition: string;
    league: string;
    status: 'tbd' | 'future' | 'complete' | 'active';
    home: Team;
    away: Team;
    date: Date;
    location: {
        arena: string;
        city: string;
    }
}

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
                    <Image src={espn} />
                    {formatDate(game.date)}
                </div>
            </div>
            <div className={styles.footer}>
                <div>
                    {game.competition}
                </div>
                <div>
                    {game.location.arena}, {game.location.city}
                </div>
            </div>
        </div >
    );
}
