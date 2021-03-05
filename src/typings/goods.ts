export interface IGoods {
  id: number;
  goodsName: string;
  goodsDesc: string;
  createTime: string;
  price: string;
  discountPrice: string;
  goodsImg: string;

  [propName: string]: any;
}
