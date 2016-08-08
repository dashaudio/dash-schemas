const AJV = require('ajv')
const assert = require('assert')

const schemas = [
  require('./app.json'),
  require('./track.json')
]

describe('App Schema', function() {
  const validator = new AJV({ schemas })

  it('should validate a basic app data model', () => {
    const app = {
      name: 'My App',
      track: {
        title: 'title'
      }
    }

    assert(validator.validate('app.json', app), validator.errorsText(validator.errors))
  })
})
