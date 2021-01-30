import { GoodsService } from '@/core/requests/quote'

class GoodsInteractor {
  private static _instance: GoodsInteractor

  public static getInstance (): GoodsInteractor {
    if (!this._instance) {
      this._instance = new GoodsInteractor(new GoodsService())
    }
    return this._instance
  }

  // eslint-disable-next-line no-useless-constructor
  constructor (private quoteService: GoodsService) {}

  async getQuoteList () {
    return await this.quoteService.getQuoteList()
  }
}

export default GoodsInteractor.getInstance()
