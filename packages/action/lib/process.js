const ChildProcess = require('child_process')
/**
 * Handles running processes
 */
class Process {
  /**
   * @param {string} command
   * @returns {Promise<Result>}
   */
  static async spawn(command) {
    const process = new Process(command)
    const result = await process.run()
    if (result.stdout.length > 0) {
      console.info(result.stdout)
    }

    if (result.stderr.length > 0) {
      console.error(result.stderr)
    }
    return result
  }

  /**
   * 
   * @param {string} command 
   */ 
  constructor(command) {
    this.command = command
  }
  /**
   * 
   * @returns {Promise<Result>}
   */
  async run() {
    const commandArray = this.command.split(' ')
    const result = ChildProcess.spawnSync(commandArray[0], commandArray.splice(1))
    if (result.status === null) {
      result.status = 0
    }
    return new Result(result.status, result.stdout.toString(), result.stderr.toString())
  }

}

/**
 *
 */
class Result {
  /**
   * 
   * @param {number} exitCode 
   * @param {string} stdout 
   * @param {string} stderr 
   */
  constructor(exitCode, stdout, stderr) {
    this.exitCode = exitCode
    this.stdout = stdout
    this.stderr = stderr
  }
}

module.exports = Process

