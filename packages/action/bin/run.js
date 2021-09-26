const Action = require('../lib/action')

console.info('ACTION RUN: ' + JSON.stringify(process.argv))
const action = new Action()
  
if (process.argv[2] === 'compile') {
  action.compile()
}