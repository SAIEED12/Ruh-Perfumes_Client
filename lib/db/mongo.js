import { MongoClient, ObjectId } from "mongodb";

// Cached MongoDB client for Better Auth, carts and customer lookups. The cache
// survives Next.js hot reloads so dev does not open a new pool on every edit.
// The fallback URI lets `next build` load this module without a .env file;
// no connection is opened until a query actually runs.

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const dbName = process.env.MONGODB_DB || "ruh_perfumes";
const globalForMongo = globalThis;

const client =
  globalForMongo.__ruhMongoClient ??
  new MongoClient(uri, {
    serverApi: {
      version: "1",
      strict: false,
      deprecationErrors: true,
    },
  });

if (!globalForMongo.__ruhMongoClient) globalForMongo.__ruhMongoClient = client;

export const mongoClient = client;
export const db = client.db(dbName);
export const getCollection = (name) => db.collection(name);
export const newHexId = () => new ObjectId().toHexString();
