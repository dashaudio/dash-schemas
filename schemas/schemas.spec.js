const AJV = require('ajv')
const assert = require('assert')

const schemas = require('../build/schemas')

describe('Schema index', function() {
  it('should contain an app schema', () => {
    assert(schemas.app)
  })

  it('should contain a schema bundle', () => {
    assert(schemas.bundle)
  })

  // TODO: Fill this out and
})
