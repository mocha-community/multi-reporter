const readJSONFileSync = require('./readJSONFileSync')

const DEFAULT_CONFIG_PATH = '.reporters.json'

function readConfig (options) {
  const reporterOptions = options.reporterOptions || {}
  const { config } = reporterOptions
  const path = config || DEFAULT_CONFIG_PATH
  return readJSONFileSync(path)
}

module.exports = readConfig
