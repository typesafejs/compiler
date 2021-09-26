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
      console.info(result.stderr)
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
    const process = ChildProcess.spawn(commandArray[0], commandArray.splice(1))
    return new Promise((resolve) => {
      let stdout = ''
      let stderr = ''
      process.stdout.on('data', (data) => {
        stdout += data.toString()
      });
      
      process.stderr.on('data', (data) => {
        stderr += data.toString()
      });

      process.on('exit', (code) => {
        if (code === null) {
          code = 0
        }
        console.info("Exited command: " + this.command)
        resolve(new Result(code, stdout, stderr))
      })
    })
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

