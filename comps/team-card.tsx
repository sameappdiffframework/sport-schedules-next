import Image from 'next/image'
import React from 'react'
import type { Team } from '../lib/model'
import porLogo from '../public/logos/por.png'
import styles from '../styles/team-card.module.css'


export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className={styles.team}>
      <div className={styles.logo}>
        <Image src={porLogo} alt={team.nickname} height={50} />
      </div>
      <div className={styles.teamInfo}>
        <div className={styles.name}>{team.nickname}</div>
        <div className={styles.stats}>
          {team.record.wins}-{team.record.losses}
          {team.record.ties !== undefined && <>-{team.record.ties}</>}
          ,&nbsp;
          {team.record.conferenceRank}th in {team.record.conference}
          <br />
          Power Rank: {team.powerRank}
        </div>
      </div>
    </div>
  )
}