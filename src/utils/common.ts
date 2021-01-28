/**
 * @func 获取随机数
 * @author yyc
 */
export const getRandom = () => {
  return Math.random().toString(16).substring(2)
}

/**
 * @func
 * @param {object} query 当前对象
 * @param {string} keyName 属性名
 * @author yyc
 */
export const hasKey = (query: AnyObject, keyName: string) => {
  return !!query[keyName]
}
