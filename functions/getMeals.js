const dbo = require('./db/conn');

exports.handler = async function (event, context, callback) {
  const params = JSON.parse(event.body);
  const numberOfMeals = params.meals;
  const diet = params.diet;
  // console.log(numberOfMeals, diet);

  let menu = {};

  const db = await dbo.connectToDatabase();

  let breakfast = await db
    .collection('meals')
    .aggregate([
      { $match: { type: { $in: ['breakfast'] } } },
      { $match: { diets: { $in: [diet] } } },
      { $sample: { size: 1 } },
    ])
    .toArray();
  menu.breakfast = breakfast[0];

  if (numberOfMeals === 5) {
    let snack = await db
      .collection('meals')
      .aggregate([
        { $match: { type: { $in: ['snack'] } } },
        { $match: { diets: { $in: [diet] } } },
        { $sample: { size: 1 } },
      ])
      .toArray();
    menu.snack = snack[0];
  }

  let lunch = await db
    .collection('meals')
    .aggregate([
      { $match: { type: { $in: ['lunch'] } } },
      { $match: { diets: { $in: [diet] } } },
      { $sample: { size: 1 } },
    ])
    .toArray();
  menu.lunch = lunch[0];

  if (numberOfMeals === 5) {
    let snack2 = await db
      .collection('meals')
      .aggregate([
        { $match: { type: { $in: ['snack'] } } },
        { $match: { diets: { $in: [diet] } } },
        { $sample: { size: 1 } },
      ])
      .toArray();
    menu.snack2 = snack2[0];
  }

  let dinner = await db
    .collection('meals')
    .aggregate([
      { $match: { type: { $in: ['dinner'] } } },
      { $match: { diets: { $in: [diet] } } },
      { $sample: { size: 1 } },
    ])
    .toArray();
  menu.dinner = dinner[0];

  const response = {
    statusCode: 200,
    body: JSON.stringify(menu),
  };
  return response;
};
