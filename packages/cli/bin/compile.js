#!/usr/bin/env node
const Compiler = require('../lib/tsc')

const compiler = new Compiler()
compiler.compile(process.argv.slice(2))
