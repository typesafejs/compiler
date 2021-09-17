const ESLint = require('eslint').ESLint
const Path = require('path')

/**
 *
 */
class Linter {
  /**
   * @param {string[]} paths
   * @returns {Promise<void>}
   */
  async lint (paths) {
    const eslintConfigFile = Path.join(__dirname, '../.eslintrc.json')
    const eslintPluginDir = Path.join(__dirname, '../node_modules')
    const eslintConfig = JSON.parse(require('fs').readFileSync(eslintConfigFile))
    console.info('Loading ESLint config from: ' + eslintConfigFile)
    const eslint = new ESLint({
      baseConfig: eslintConfig,
      resolvePluginsRelativeTo: eslintPluginDir,
      useEslintrc: false
    })

    // 2. Lint files.
    const results = await eslint.lintFiles(paths)

    // 3. Format the results.
    const formatter = await eslint.loadFormatter('stylish')
    const resultText = formatter.format(results)

    // 4. Output it.
    console.log(resultText)
  }
}

module.exports = Linter
