const assert = require('assert')
const Ajv = require('ajv')
const schema = require('../build/app.json')
const ajv = new Ajv()

describe('App Schema', function() {
  it('should validate a basic app data model', () => {


    const app = {
      name: 'My App'
    }
    const valid = ajv.validate(schema, app)
    assert(valid, ajv.errorsText(ajv.errors))
    // if (!valid) console.log(ajv.errors)

  })
})
