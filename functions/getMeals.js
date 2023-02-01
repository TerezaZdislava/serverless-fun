const { MongoClient } = require('mongodb');
require('dotenv').config();
const mongoClient = new MongoClient(process.env.ATLAS_URI);
const clientPromise = mongoClient.connect();

const handler = async (event) => {
  const params = JSON.parse(event.body);
  const numberOfMeals = params.meals;
  const diet = params.diet;
  console.log(numberOfMeals, diet);
  let menu = {};
  console.log(1);
  try {
    const database = await (await clientPromise).db(process.env.DATABASE);
    const collection = database.collection('meals');
    console.log(2);

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

//-------------------------------------------------------------------start

// const dbo = require('./db/conn');

// exports.handler = async function (event, context, callback) {
//   console.log('1');
//   const params = JSON.parse(event.body);
//   const numberOfMeals = params.meals;
//   const diet = params.diet;
//   console.log(numberOfMeals, diet);
//   console.log('2');
//   let menu = {};
//   console.log('3');
//   const db = await dbo.connectToDatabase();

//   let breakfast = await db
//     .collection('meals')
//     .aggregate([
//       { $match: { type: { $in: ['breakfast'] } } },
//       { $match: { diets: { $in: [diet] } } },
//       { $sample: { size: 1 } },
//     ])
//     .toArray();
//   menu.breakfast = breakfast[0];
//   console.log('menu.breakfast ' + menu.breakfast);

// if (numberOfMeals === 5) {
//   let snack = await db
//     .collection('meals')
//     .aggregate([
//       { $match: { type: { $in: ['snack'] } } },
//       { $match: { diets: { $in: [diet] } } },
//       { $sample: { size: 1 } },
//     ])
//     .toArray();
//   menu.snack = snack[0];
// }

// let lunch = await db
//   .collection('meals')
//   .aggregate([
//     { $match: { type: { $in: ['lunch'] } } },
//     { $match: { diets: { $in: [diet] } } },
//     { $sample: { size: 1 } },
//   ])
//   .toArray();
// menu.lunch = lunch[0];

// if (numberOfMeals === 5) {
//   let snack2 = await db
//     .collection('meals')
//     .aggregate([
//       { $match: { type: { $in: ['snack'] } } },
//       { $match: { diets: { $in: [diet] } } },
//       { $sample: { size: 1 } },
//     ])
//     .toArray();
//   menu.snack2 = snack2[0];
// }

// let dinner = await db
//   .collection('meals')
//   .aggregate([
//     { $match: { type: { $in: ['dinner'] } } },
//     { $match: { diets: { $in: [diet] } } },
//     { $sample: { size: 1 } },
//   ])
//   .toArray();
// menu.dinner = dinner[0];
// console.log('5');
// const response = {
//   statusCode: 200,
//   body: menu ? JSON.stringify(menu) : {},
// };
// return response;

//--------------------------------------------------konec
// const result = await db
//   .collection('meals')
//   .aggregate([
//     { $match: { type: { $in: ['breakfast'] } } },
//     { $match: { diets: { $in: [diet] } } },
//     { $sample: { size: 1 } },
//   ])
//   .toArray();
// const response = {
//   statusCode: 200,
//   body: JSON.stringify(result[0]),
// };
// return response;
//--------------------------------------------------

// let diet = req.query.diet;
// let numberOfMeals = req.query.numberOfMeals;

// try {
//   let db_connect = await connectToDatabase();
//   let diet = 'vegetarian';
//   console.log(diet);
//   let menu = {};
//   let breakfast = await db_connect
//     .collection('meals')
//     .aggregate([
//       // { $match: { type: { $in: ['breakfast'] } } },
//       // { $match: { diets: { $in: [diet] } } },
//       { $sample: { size: 1 } },
//     ])
//     .toArray();
//   menu.breakfast = breakfast[0];
//   console.log(menu.breakfast);
//   // const res = await meals.find({});
//   const res = {
//     message: 'blablaaa',
//   };
//   return {
//     statusCode: 200,
//     body: JSON.stringify(menu.breakfast),
//   };
// } catch (e) {
//   console.error(e);
//   return {
//     statusCode: 500,
//     body: JSON.stringify(e),
//   };
// }

// recordRoutes.route('/record').get(async function (req, res) {
//   let db_connect = dbo.getDb();
//   let diet = req.query.diet;
//   let numberOfMeals = req.query.numberOfMeals;
//   let menu = {};

//   let breakfast = await db_connect
//     .collection('meals')
//     .aggregate([
//       { $match: { type: { $in: ['breakfast'] } } },
//       { $match: { diets: { $in: [diet] } } },
//       { $sample: { size: 1 } },
//     ])
//     .toArray();
//   menu.breakfast = breakfast[0];

//   if (numberOfMeals == 5) {
//     let snack = await db_connect
//       .collection('meals')
//       .aggregate([
//         { $match: { type: { $in: ['snack'] } } },
//         { $match: { diets: { $in: [diet] } } },
//         { $sample: { size: 1 } },
//       ])
//       .toArray();
//     menu.snack = snack[0];
//   }

//   let lunch = await db_connect
//     .collection('meals')
//     .aggregate([
//       { $match: { type: { $in: ['lunch'] } } },
//       { $match: { diets: { $in: [diet] } } },
//       { $sample: { size: 1 } },
//     ])
//     .toArray();
//   menu.lunch = lunch[0];

//   if (numberOfMeals == 5) {
//     let snack2 = await db_connect
//       .collection('meals')
//       .aggregate([
//         { $match: { type: { $in: ['snack'] } } },
//         { $match: { diets: { $in: [diet] } } },
//         { $sample: { size: 1 } },
//       ])
//       .toArray();
//     menu.snack2 = snack2[0];
//   }

//   let dinner = await db_connect
//     .collection('meals')
//     .aggregate([
//       { $match: { type: { $in: ['dinner'] } } },
//       { $match: { diets: { $in: [diet] } } },
//       { $sample: { size: 1 } },
//     ])
//     .toArray();
//   menu.dinner = dinner[0];

//   res.json(menu);
// });

// app.use(`/.netlify/functions/api`, recordRoutes);
// module.exports = recordRoutes;
