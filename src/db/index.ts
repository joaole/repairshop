import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

if (process.env.NODE_ENV === 'development') {
    config({ path: '.env.local' })
}
const sql = neon(process.env.NEON_DATABASE_URL!);
//logger
// const db = druzzle(sql, { logger: true });
const db = drizzle(sql);

export { db };