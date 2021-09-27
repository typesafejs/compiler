const Path = require('path')
const TypeScript = require('typescript')

/**
 *
 */
class TSC {
  /**
   * @param {string[]} fileNames
   * @returns {void}
   */
  compile (fileNames) {
    const options = this._config()
    const program = TypeScript.createProgram(fileNames, options)
    const emitResult = program.emit()

    const allDiagnostics = TypeScript.getPreEmitDiagnostics(program).concat(emitResult.diagnostics)

    allDiagnostics.forEach(diagnostic => {
      if (diagnostic.file) {
        // @ts-ignore
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
   * @param {string[]} fileNames
   * @returns {void}
   */
  declare (fileNames) {
    const options = this._declarationConfig()
    const program = TypeScript.createProgram(fileNames, options)
    const emitResult = program.emit()

    const allDiagnostics = TypeScript
      .getPreEmitDiagnostics(program)
      .concat(emitResult.diagnostics)

    allDiagnostics.forEach(diagnostic => {
      if (diagnostic.file) {
        // @ts-ignore
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
      target: TypeScript.ScriptTarget.ES2021,
      typeRoots: ['./@types', typesPath]
    }
  }
  /**
   * @returns {any}
   */
  _declarationConfig () {
    const typesPath = Path.join(process.cwd(), 'node_modules/@types')
    console.info('TypeSafe.js types Path: ' + typesPath)
    return {
      allowJs: true,
      checkJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      module: 'commonjs',
      outDir: './types',
      target: TypeScript.ScriptTarget.ES2021,
      typeRoots: ['./@types', typesPath]
    }
  }
}

module.exports = TSC
