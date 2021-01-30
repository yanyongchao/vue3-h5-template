import { http } from '@/core/services'
import { IGoods } from '@/typings/goods'

export class GoodsService {
  public async getQuoteList (): Promise<IGoods[]> {
    // eslint-disable-next-line no-useless-catch
    const { list } = await http.request({
      url: '/goods',
      data: {}
    })
    return list
  }
}
