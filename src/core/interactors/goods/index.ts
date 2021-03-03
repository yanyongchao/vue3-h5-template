import { GoodsService } from '@/core/requests/goods'

class GoodsInteractor {
  private static _instance: GoodsInteractor

  public static getInstance (): GoodsInteractor {
    if (!this._instance) {
      this._instance = new GoodsInteractor()
    }
    return this._instance
  }

  async getGoodsList () {
    return await GoodsService.getGoodsList()
  }
}

export default GoodsInteractor.getInstance()
