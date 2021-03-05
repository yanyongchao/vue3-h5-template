import { GoodsService } from '@/core/requests/goods'
import Goods from './entities'

class GoodsInteractor {
  private static _instance: GoodsInteractor

  public static getInstance (): GoodsInteractor {
    if (!this._instance) {
      this._instance = new GoodsInteractor()
    }
    return this._instance
  }

  async getGoodsList () {
    const list = await GoodsService.getGoodsList()
    return list.map(item => new Goods(item))
  }
}

export default GoodsInteractor.getInstance()
