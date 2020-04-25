import { buildSchema } from 'type-graphql'

import GreetingResolver from '../resolvers/greetingResolver'

export default async function bootstrapSchema() {
  return buildSchema({
    resolvers: [GreetingResolver],
    emitSchemaFile: true,
  })
}
