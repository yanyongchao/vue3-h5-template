/**
 * 不带promise方法的取值
 * 获取sessionStorage
 */
export const getSessionStorage = (key: string) => {
  const storage: any = window.sessionStorage.getItem(key)
  try {
    return JSON.parse(storage)
  } catch (err) {
    return storage
  }
}

/**
 * 不带promise方法的取值
 * 获取sessionStorage
 */
export const setSessionStorage = (key: string, value: any) => {
  if (typeof value === 'object') {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  } else {
    window.sessionStorage.setItem(key, value)
  }
}

/**
 * 不带promise方法的取值
 * 获取localStorage
 */
export const getLocalStorage = (key: string) => {
  const storage: any = window.localStorage.getItem(key)
  try {
    return JSON.parse(storage)
  } catch (err) {
    return storage
  }
}

/**
 * 不带promise方法的取值
 * 设置localStorage
 */
export const setLocalStorage = (key: string, value: any) => {
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}
