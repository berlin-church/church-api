import 'reflect-metadata'
import * as Hapi from '@hapi/hapi'
import config from 'config'
import { ApolloServer } from 'apollo-server-hapi'

import bootstrapSchema from './schema'

const start = async () => {
  const server = new Hapi.Server({
    port: config.get('api.port'),
    routes: {
      cors: {
        origin: ['http://localhost:3000'],
      },
    },
  })

  // GraphQL setup
  const schema = await bootstrapSchema()
  const apolloServer = new ApolloServer({
    schema,
    playground: true,
  })
  await apolloServer.applyMiddleware({
    app: server,
  })

  await server.start()
  console.log(`Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

start()
