import { invoke, register } from './jsBridge'
import { ImageSelectParams } from '@/typings/native'

export interface INativeService {
  imageSelectFunc(params: any): Promise<any>;
}

class NativeService implements INativeService {
  public static instance: NativeService

  public isAndroid: boolean;
  public isIOS: boolean;

  public static getInstance (): NativeService {
    if (!this.instance) {
      this.instance = new NativeService()
    }
    return this.instance
  }

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

export default NativeService.getInstance()
