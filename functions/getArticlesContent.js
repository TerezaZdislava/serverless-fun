const { MongoClient } = require('mongodb');
require('dotenv').config();
const mongoClient = new MongoClient(process.env.ATLAS_URI);
const clientPromise = mongoClient.connect();

const handler = async (event) => {
  const params = JSON.parse(event.body);
  const articleId = params.articleId.toString();
  const lang = params.lang.toString();

  console.log(lang);
  try {
    const database = await (
      await clientPromise
    ).db(process.env.DATABASE_ARTICLES);
    const collection = database.collection(`articles-content-${lang}`);

    const article = await collection.findOne({ articleId: articleId });

    return {
      statusCode: 200,
      body: JSON.stringify(article),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
