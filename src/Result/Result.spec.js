const test = require('tape')

const isFunction = require('../core/isFunction')
const Result = require('.')

test('Result crock', t => {
  t.ok(isFunction(Result), 'is a function')
  t.end()
})