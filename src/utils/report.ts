import axios from 'axios'
import { LoggerUrl } from '@/config.json'

const APP_ID = 'vue3-h5-template'
class Report {
  public static instance: Report
  public static getInstance (): Report {
    if (!this.instance) {
      this.instance = new Report()
    }
    return this.instance
  }

  log (params: string) {
    const logData = {
      AppId: APP_ID,
      Content: params
    }
    console.log('logData', logData)
    axios.post(
      LoggerUrl,
      logData,
      {
        headers: {
          'content-type': 'application/json;charset=utf-8'
        }
      }
    ).then((res) => {
      console.log(res)
    })
  }
}

export default Report.getInstance()
