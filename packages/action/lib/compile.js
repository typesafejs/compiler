const Process = require('@typesafejs/shared/lib/process')

/**
 * Runs the main routine
 * @returns {Promise<void>}
 */
async function main() {
  console.info('cwd: ' + process.cwd())
  await Process.spawn('npx lerna exec -- tsc --project jsconfig.json')
}

main()
