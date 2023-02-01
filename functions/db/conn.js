// const MongoClient = require('mongodb').MongoClient;
// const MONGODB_URI =
//   'mongodb+srv://me:Teruse666@jidelnicek.djbghxk.mongodb.net/?retryWrites=true&w=majority';
// let cachedDb = null;

// async function connectToDatabase() {
//   console.log('4');
//   if (cachedDb) {
//     console.log('cachedDb');
//     return cachedDb;
//   }

//   const client = await MongoClient.connect(MONGODB_URI);
//   console.log('client ' + client);
//   const db = await client.db('food');
//   console.log('db ' + db);
//   cachedDb = db;
//   return db;
// }

// exports.connectToDatabase = connectToDatabase;

// const { MongoClient } = require("mongodb");
// const mongoClient = new MongoClient('mongodb+srv://me:Teruse666@jidelnicek.djbghxk.mongodb.net/?retryWrites=true&w=majority');
// const clientPromise = mongoClient.connect();

// const handler = async (event) => {
//   try {
//       const database = (await clientPromise).db('food');
//       const collection = database.collection('jidelnicek');
//       const results = await collection.aggregate([
//         { $match: { type: { $in: ['breakfast'] } } },
//         { $match: { diets: { $in: ['vegan'] } } },
//         { $sample: { size: 1 } },
//       ])
//       .toArray();
//       return {
//           statusCode: 200,
//           body: JSON.stringify(results),
//       }
//   } catch (error) {
//       return { statusCode: 500, body: error.toString() }
//   }
// }

// module.exports = { handler }
