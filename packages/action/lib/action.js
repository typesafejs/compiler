const core = require('@actions/core')
const Process = require('./process')

/**
 * Action functions
 */
class Action {
  
  /**
   * @returns {Promise<void>}
   */
  async compile() {
    console.info('cwd: ' + process.cwd())
    await Process.spawn('npx yarn install')
    await Process.spawn('npx lerna bootstrap')
    const result = await Process.spawn('npx lerna exec -- tsc --project jsconfig.json')
  
    if (result.exitCode !== 0) {
      core.setFailed(result.stderr)
    }  
  }
}

module.exports = Action