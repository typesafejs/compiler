#!/usr/bin/env node
const TSC = require('../lib/tsc')

const tsc = new TSC()
tsc.declare(process.argv.slice(2))
