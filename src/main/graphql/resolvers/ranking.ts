import { adapteResolver } from '../../adpters'
import { makeLoadLastRankingController } from '../../factories'

export default {
  Query: {
    lastRanking: async (): Promise<any> =>
      (await adapteResolver(makeLoadLastRankingController()))
  }
}
