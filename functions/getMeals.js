const { MongoClient } = require('mongodb');
require('dotenv').config();
const mongoClient = new MongoClient(process.env.ATLAS_URI);
const clientPromise = mongoClient.connect();

const handler = async (event) => {
  const params = JSON.parse(event.body);
  const numberOfMeals = params.meals;
  const diet = params.diet;
  const lang = params.lang;

  let menu = {};
  try {
    const database = await (await clientPromise).db(process.env.DATABASE);
    const collection = database.collection(`meals-${lang}`);
    // console.log(2);

    const breakfast = await collection
      .aggregate([
        { $match: { type: { $in: ['breakfast'] } } },
        { $match: { diets: { $in: [diet] } } },
        { $sample: { size: 1 } },
      ])
      .toArray();
    menu.breakfast = breakfast[0];

    if (numberOfMeals === 5) {
      const snack = await collection
        .aggregate([
          { $match: { type: { $in: ['snack'] } } },
          { $match: { diets: { $in: [diet] } } },
          { $sample: { size: 1 } },
        ])
        .toArray();
      menu.snack = snack[0];
    }

    const lunch = await collection
      .aggregate([
        { $match: { type: { $in: ['lunch'] } } },
        { $match: { diets: { $in: [diet] } } },
        { $sample: { size: 1 } },
      ])
      .toArray();
    menu.lunch = lunch[0];

    if (numberOfMeals === 5) {
      const snack2 = await collection
        .aggregate([
          { $match: { type: { $in: ['snack'] } } },
          { $match: { diets: { $in: [diet] } } },
          { $sample: { size: 1 } },
        ])
        .toArray();
      menu.snack2 = snack2[0];
    }

    const dinner = await collection
      .aggregate([
        { $match: { type: { $in: ['dinner'] } } },
        { $match: { diets: { $in: [diet] } } },
        { $sample: { size: 1 } },
      ])
      .toArray();
    menu.dinner = dinner[0];

    return {
      statusCode: 200,
      body: JSON.stringify(menu),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
