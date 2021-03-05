/**
 * 用于清洗从服务端或客户端接口返回的数据：删除部分数据、修改属性名、转化部分数据等，一般可定义成纯函数形式
 * 由于该项目的所有接口返回都是由笔者定义的，所以并没有需要清洗的数据
 */

import { IGoods } from '@/typings/goods'

export function goodsTranslator (list: Array<IGoods>) {
  return list.map(goods => {
    goods.price = (Number(goods.price)).toFixed(2)
    return goods
  })
}
