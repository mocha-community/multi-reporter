const { resolve } = require('path')
const Mocha = require('mocha')

function getReporterClass (name) {
  let Reporter = Mocha.reporters[name]
  if (Reporter) {
    return Reporter
  }

  try {
    Reporter = require(name)
  } catch (ignored) {
    Reporter = require(resolve(process.cwd(), name))
  }
  return Reporter
}

module.exports = getReporterClass
