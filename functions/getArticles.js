const { MongoClient } = require('mongodb');
require('dotenv').config();
const mongoClient = new MongoClient(process.env.ATLAS_URI);
const clientPromise = mongoClient.connect();

const handler = async () => {
  try {
    const database = await (
      await clientPromise
    ).db(process.env.DATABASE_ARTICLES);
    const collection = database.collection('articles');
    const articles = await collection.aggregate().toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(articles),
    };
  } catch (error) {
    console.log(5);
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
