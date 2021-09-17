const Path = require('path')
const TypeScript = require('typescript')

/**
 *
 */
class TypeSafe {
  /**
   * @param {string[]} fileNames
   * @returns {void}
   */
  compile (fileNames) {
    const options = this._config()
    const program = TypeScript.createProgram(fileNames, options)
    const emitResult = program.emit()

    const allDiagnostics = TypeScript
      .getPreEmitDiagnostics(program)
      .concat(emitResult.diagnostics)

    allDiagnostics.forEach(diagnostic => {
      if (diagnostic.file) {
        const { line, character } = TypeScript.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start)
        const message = TypeScript.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
        console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`)
      } else {
        console.log(TypeScript.flattenDiagnosticMessageText(diagnostic.messageText, '\n'))
      }
    })

    const exitCode = emitResult.emitSkipped ? 1 : 0
    console.log(`Process exiting with code '${exitCode}'.`)
    process.exit(exitCode)
  }

  /**
   * @returns {void}
   */
  declarations () {

  }

  /**
   * @returns {any}
   */
  _config () {
    const typesPath = Path.join(__dirname, '/../node_modules/@types')
    console.info('TypeSafe.js types Path: ' + typesPath)
    return {
      allowJs: true,
      checkJs: true,
      module: 'commonjs',
      noEmit: true,
      typeRoots: ['./@types', typesPath],
      target: TypeScript.ScriptTarget.ES2021
    }
  }
}

module.exports = TypeSafe
