import { http } from '@/core/services'
import { IGoods } from '@/typings/goods'
import { goodsTranslator } from './translators'

export class GoodsService {
  public static async getGoodsList (): Promise<IGoods[]> {
    // eslint-disable-next-line no-useless-catch
    const { list } = await http.request({
      url: '/goods',
      data: {}
    })
    return goodsTranslator(list)
  }
}
