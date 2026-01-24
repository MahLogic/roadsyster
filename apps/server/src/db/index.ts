import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "../env";
import * as auth_schema from "./schema/auth";

const DATABASE_URL = env.DATABASE_URL;

export const db = drizzle(DATABASE_URL, { schema: auth_schema });
