import { drizzle } from 'drizzle-orm/node-postgres'
import { DATABASE_CONFIG } from '@roadsyster/config'
import * as schema from './schema.ts'
export const db = drizzle(DATABASE_CONFIG.URL, { schema })
