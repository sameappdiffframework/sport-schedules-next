import React from 'react'
import type { Team } from './game-card'
import Image from 'next/image'
import styles from '../styles/team-card.module.css'


export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className={styles.team}>
      <div className={styles.logo}>
        <Image src={team.logo} alt={team.nickname} height={50} />
      </div>
      <div className={styles.teamInfo}>
        <div className={styles.name}>{team.nickname}</div>
        <div className={styles.stats}>
          {team.record.wins}-{team.record.losses}
          {team.record.ties !== undefined && <>-{team.record.ties}</>},
          {team.record.divisionRank}th in {team.record.division}
          <br />
          Power Rank: {team.rank}
        </div>
      </div>
    </div>
  )
}