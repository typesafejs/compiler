#!/usr/bin/env node
const Linter = require('../lib/linter')

const linter = new Linter()
linter.lint(process.argv.slice(2))
