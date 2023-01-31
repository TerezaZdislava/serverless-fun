const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI =
  'mongodb+srv://me:Teruse666@jidelnicek.djbghxk.mongodb.net/?retryWrites=true&w=majority';
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    console.log('cachedDb');
    return cachedDb;
  }

  const client = await MongoClient.connect(MONGODB_URI);
  const db = await client.db('food');
  cachedDb = db;
  return db;
}

exports.connectToDatabase = connectToDatabase;
