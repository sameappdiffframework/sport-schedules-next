import React from 'react'
import type { Team } from '../lib/model';

const SIZE = 50;

export default function TeamLogo({ team }: { team: Team }) {
  return (
    <img src={`/logos/${team.abbreviation.toLowerCase()}.png`}
      alt={team.nickname}
      width={SIZE}
      height={SIZE}
    />
  )
}