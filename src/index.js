const { inherits } = require('util')
const Mocha = require('mocha')
const Base = Mocha.reporters.Base
const after = require('./after')
const readConfig = require('./readConfig')
const getReporterClass = require('./getReporterClass')

function MultiReporter (runner, options) {
  const [majorVersion] = Mocha.prototype.version.split('.')
  if (Number(majorVersion) >= 6) {
    const createStatsCollector = require('mocha/lib/stats-collector')
    createStatsCollector(runner)
  }

  Base.call(this, runner, options)

  const config = readConfig(options)
  this.reporters = Object.entries(config)
    .filter(([name, value]) => value)
    .map(([name, value]) => {
      const Reporter = getReporterClass(name)
      if (Reporter) {
        const reporterOptions = typeof value === 'object' ? value : {}
        return new Reporter(runner, { reporterOptions })
      } else {
        console.error(`The reporter "${name}" does not found.`)
      }
    })
    .filter(reporter => reporter)
}

inherits(MultiReporter, Base)

MultiReporter.prototype.done = function (failures, fn) {
  const doneableReporters = this.reporters
    .filter(({ done }) => typeof done === 'function')
  if (doneableReporters.length === 0) {
    return fn(failures)
  }

  const done = after(doneableReporters.length, () => fn(failures))
  doneableReporters.forEach(reporter => reporter.done(failures, done))
}

module.exports = MultiReporter
