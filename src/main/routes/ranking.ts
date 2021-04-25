/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adapteRoute } from '../adpters'

import { makeLoadLastRankingController } from '../factories'

export default (router: Router): void => {
  router.get('/rankings/last', adapteRoute(makeLoadLastRankingController()))
}
