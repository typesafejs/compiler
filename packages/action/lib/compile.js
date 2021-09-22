const Process = require('./process')

/**
 * Runs the main routine
 * @returns {Promise<void>}
 */
async function main() {
  console.info('cwd: ' + process.cwd())
  await Process.spawn('npx yarn install')
  await Process.spawn('npx lerna bootstrap')
  await Process.spawn('npx lerna exec -- tsc --project jsconfig.json')
}

main()
