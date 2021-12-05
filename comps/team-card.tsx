import React from 'react'
import type { Team } from '../lib/model'
import styles from '../styles/team-card.module.scss'
import TeamLogo from './team-logo'

const ordinal = (num: number) => {
  const ordinalRules = new Intl.PluralRules("en", { type: "ordinal" });
  const suffixes: Record<Intl.LDMLPluralRule, string> = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
    // these should never occur in this context
    zero: '',
    many: ''
  };
  const suffix = suffixes[ordinalRules.select(num)];
  return (num + suffix);
}

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className={styles.team}>
      <div className={styles.logo}>
        <TeamLogo team={team} />
      </div>
      <div className={styles.teamInfo}>
        <div className={styles.name}>{team.nickname}</div>
        <div className={styles.stats}>
          {team.record.wins}-{team.record.losses}
          {team.record.ties !== undefined && <>-{team.record.ties}</>}
          ,&nbsp;
          {ordinal(team.record.conferenceRank)} in {team.record.conference}
          <br />
          Power Rank: {team.powerRank}
        </div>
      </div>
    </div>
  )
}