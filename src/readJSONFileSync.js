const { readFileSync } = require('fs')

function readJSONFileSync (path) {
  const data = readFileSync(path, 'utf8')
  return JSON.parse(data)
}

module.exports = readJSONFileSync
