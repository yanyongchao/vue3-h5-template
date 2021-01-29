import { HttpService } from '@/core/services'
import { IQuote } from '@/typings/quote'

export interface IQuoteService {
  getQuoteList(): Promise<IQuote[] | any>;
}

export class QuoteService implements IQuoteService {
  public async getQuoteList (): Promise<IQuote[] | any> {
    // eslint-disable-next-line no-useless-catch
    const { list } = await HttpService.request({
      url: '/quote/getList',
      data: {}
    })
    return list
  }
}
