import { Arg, Query, Resolver } from 'type-graphql'
import Greeting from '../models/greeting'

import DB from '../repositories/db'

@Resolver()
class GreetingResolver {
  @Query((returns) => Greeting, { nullable: true })
  async greeting(@Arg('to', { nullable: false }) to: string): Promise<Greeting> {
    // Just a query to test the DB
    const pi = await DB.raw('SELECT PI()')
    return new Greeting(`Hello, ${to}! at ${pi.rows[0].pi}`)
  }
}

export default GreetingResolver
