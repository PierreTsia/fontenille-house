const contentful = require('contentful')
require('dotenv').config()

const config = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}

const client = contentful.createClient(config)

export default client
