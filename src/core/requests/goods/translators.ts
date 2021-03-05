import { IGoods } from '@/typings/goods'

export function goodsTranslator (list: Array<IGoods>) {
  return list.map(goods => {
    goods.price = (Number(goods.price)).toFixed(2)
    return goods
  })
}
