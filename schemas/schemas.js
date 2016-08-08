const schemas = {
  app: require('./app.json'),
  context: require('./context.json'),
  track: require('./track.json')
}

const collection = {
  all: Object.keys(schemas).map((key) => schemas[key])
}

module.exports = Object.assign(schemas, collection)
