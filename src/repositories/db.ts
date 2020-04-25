import Knex from 'knex'

const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile.js')[environment]

export default Knex(config)
