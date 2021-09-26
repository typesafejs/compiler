const Process = require('./process')

/**
 * Runs the main routine
 * @returns {Promise<void>}
 */
async function main() {
  console.info('now 2 cwd: ' + process.cwd())
  await Process.spawn('npx yarn add -W @actions/core')
  console.info("Done with install of actions/core")
  await Process.spawn('npx yarn install')
  await Process.spawn('npx lerna bootstrap')
  const result = await Process.spawn('npx lerna exec -- tsc --project jsconfig.json')

  const core = require('@actions/core')
  if (result.exitCode !== 0) {
    core.setFailed(result.stderr)
  }
}

main()
