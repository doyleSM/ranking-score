import { RankingScore } from '../../domain/entities'

export class RankingScoreViewModel {
  player!: Player
  score!: number
  matchDate!: string
  heroes!: Hero[]

  static map (entity: RankingScore): RankingScoreViewModel {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString()
    }
  }

  static mapCollection (entities: RankingScore[]): RankingScoreViewModel[] {
    return entities.map(entity => RankingScoreViewModel.map(entity))
  }
}

interface Player {
  name: string
  country: string
}

interface Hero {
  name: string
  level: number
}
