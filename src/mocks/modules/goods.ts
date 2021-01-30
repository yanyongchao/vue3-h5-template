import Mock, { Random } from 'mockjs'
import MockAdapter from 'axios-mock-adapter'

const GOODS_TPL = {
  id: () => Random.integer(0),
  goodsName: () => Random.string(6),
  goodsDesc: () => Random.cparagraph(2),
  createTime: () => Random.datetime(),
  price: () => Random.integer(20, 50),
  discountPrice: () => Random.integer(10, 20),
  goodsImg: () => Random.image('200x100', '#02adea', 'Vue'),
  creator: () => Random.name()
}

export default function init (mock: MockAdapter) {
  mock.onPost('/goods').reply(async () => {
    const total = 10
    return [
      200,
      Mock.mock({
        data: {
          [`list|${total}`]: [GOODS_TPL]
        },
        success: true
      })
    ]
  })
}
