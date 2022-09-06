'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rcs.cjs.production.min.js')
} else {
  module.exports = require('./rcs.cjs.development.js')
}
