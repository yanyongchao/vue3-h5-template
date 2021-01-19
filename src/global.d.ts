import {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    specialError?: boolean;
  }
  export interface AxiosResponse {
    success?: boolean;
    errorMsg?: string;
  }
};

declare global {
  interface AnyObject {
    [propName: string]: any;
  }
  interface Window {
    $store: any;
  }
}
