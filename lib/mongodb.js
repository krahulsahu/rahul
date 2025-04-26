import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongoose) => mongoose)
      .catch((error) => {
        console.error("❌ MongoDB connection failed:", error.message);
        throw new Error("Failed to connect to MongoDB."); // custom error for caller
      });
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ Successfully connected to MongoDB.");
    return cached.conn;
  } catch (error) {
    console.error("❌ Connection error during await:", error.message);
    throw error; // rethrow so the API knows connection failed
  }
}
