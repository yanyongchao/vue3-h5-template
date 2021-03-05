export interface ImageSelectParams {
  type: number;
  identityType: number;
  isCut: 1 | 2;
  cutType: number;
  width: number;
  height: number;
  isUpload: boolean;
  imgCount: number;
  isMultiple: boolean;
  extra: AnyObject;
}
