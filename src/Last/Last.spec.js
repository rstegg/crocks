const test = require('tape')

const isFunction = require('../core/isFunction')

const Last = require('.')

test('Last crock', t => {
  t.ok(isFunction(Last), 'is a function')
  t.end()
})