import { IGoods } from '@/typings/goods'

export default class Goods {
  public id: number;
  public goodsName: string;
  public createTime: string;
  public price: string;
  public discountPrice: string;
  public goodsImg: string;
  public creator: string;

  constructor (goods: IGoods) {
    this.id = goods.id
    this.goodsName = goods.goodsName
    this.createTime = goods.createTime
    this.price = goods.price
    this.discountPrice = goods.discountPrice
    this.goodsImg = goods.goodsImg
    this.creator = goods.creator
  }

  get isDiscountGoods () {
    return this.price === this.discountPrice
  }
}
