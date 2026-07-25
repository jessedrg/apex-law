import { neon } from "@neondatabase/serverless"

// neon() creates a lightweight HTTP-based SQL function.
// Works in both Node.js serverless (Vercel) and Edge runtimes.
export const sql = neon(process.env.DATABASE_URL!)
