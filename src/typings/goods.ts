export interface IGoods {
  id: number;
  goodsName: string;
  goodsDesc: string;
  createTime: string;
  price: number;
  discountPrice: number;
  goodsImg: string;

  [propName: string]: any;
}
