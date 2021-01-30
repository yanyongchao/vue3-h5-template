export interface IValidateRules {
  [propName: string]: AnyObject[];
}

export interface IValidateError {
  field: string;
  message: string;
}
