export interface Game {
  code: string;
  description: string;
  competitionDescription: string;
  league: string;
  status: GameStatus;
  home: Team;
  away: Team;
  date: string;
  location: {
    arena: string;
    city: string;
    state: string;
  },
  nationalNetwork?: string;
  topTenMatchup: boolean;
}

export interface Team {
  abbreviation: string;
  nickname: string;
  city: string;
  powerRank: number;
  sport: string;
  record: TeamRecord;
}

export interface TeamRecord {
  wins: number;
  losses: number;
  ties?: number;
  conference: string;
  conferenceRank: number
}

export type GameStatus = 'tbd' | 'complete' | 'future' | 'active'

export interface MetaInfo {
  _meta: {
    buildDate: string;
  }
}

export type TeamSchedules = { teamSchedules: Record<string, Game[]> } & MetaInfo;
export type Teams = { teams: Team[] } & MetaInfo;
export type GamesByDate = { gamesByDate: Record<string, Game[]> } & MetaInfo;
