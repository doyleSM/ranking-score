import { adaptResolver } from '../../adpters'
import { makeLoadLastRankingController } from '../../factories'

export default {
  Query: {
    lastRanking: async () => await adaptResolver(makeLoadLastRankingController())
  }
}
