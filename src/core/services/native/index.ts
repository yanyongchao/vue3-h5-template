import { invoke, register } from './jsBridge'
import { ImageSelectParams } from '@/typings/native'

export interface INativeService {
  imageSelectFunc(params: any): Promise<any>;
}

class NativeService implements INativeService {
  public isAndroid: boolean;
  public isIOS: boolean;

  constructor () {
    const ua = navigator.userAgent.toLowerCase()
    this.isAndroid = ua.indexOf('android') >= 0
    this.isIOS = ua.indexOf('iphone') >= 0 || ua.indexOf('ipad') >= 0
  }

  async imageSelectFunc (params: Partial<ImageSelectParams>) {
    await invoke('imageSelectFunc', params)
    return register('returnImagesForJs')
  }
}

export default NativeService
