export function getTimeStamp() {
  return Math.round(new Date().getTime()/1000.0)
}

/**
@param {number} timestamp - epoch value
@description Converts number to date and removes milliseconds when present.
@returns {string} Date as formatted Wed Jul 28 1993
*/
export function convertTime (timeStamp) {
  timeStamp=timeStamp.toString()
  timeStamp = timeStamp.length > 10 ? parseInt(timeStamp.slice(0,10),10) : parseInt(timeStamp,10)
  return new Date(timeStamp *1000).toDateString()
}

export function capitalize (str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}
