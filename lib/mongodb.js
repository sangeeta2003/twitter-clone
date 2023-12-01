// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local")
}

client = new MongoClient(uri, options)
  clientPromise = client.connect()

if (process.env.NODE_ENV === 'development') {
  global._mongoClientPromise = client.connect();
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best not to use a global variable.
  // Initialize client as needed.
}

  // In production mode, it's best to not use a global variable.
  


// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise