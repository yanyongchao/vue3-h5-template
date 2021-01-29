import { QuoteService, IQuoteService } from '@/core/requests/quote'

class QuoteInteractor {
  private static _instance: QuoteInteractor

  public static getInstance (): QuoteInteractor {
    if (!this._instance) {
      this._instance = new QuoteInteractor(new QuoteService())
    }
    return this._instance
  }

  // eslint-disable-next-line no-useless-constructor
  constructor (private quoteService: IQuoteService) {}

  async getQuoteList () {
    return await this.quoteService.getQuoteList()
  }
}

export default QuoteInteractor.getInstance()
