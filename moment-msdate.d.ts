import moment = require('moment')

declare module 'moment' {
  interface Moment {
    toOADate(): number
  }

  const fromOADate = (oaDate: number, offset?: number | string): Moment => {}
}

export = moment