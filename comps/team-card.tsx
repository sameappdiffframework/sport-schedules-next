import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react'
import type { Team } from '../lib/model'
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
    <Grid container>
      <Grid item xs={3}>
        <TeamLogo team={team}/>
      </Grid>
      <Grid item xs={7}>
        <Stack>
          <Typography variant="h4">{team.nickname}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {team.record.wins}-{team.record.losses}
            {team.record.ties !== undefined && <>-{team.record.ties}</>},&nbsp;
            {ordinal(team.record.conferenceRank)} in {team.record.conference}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Power Rank: {team.powerRank}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}
