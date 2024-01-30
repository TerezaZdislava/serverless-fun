import mapFormResults from './mapFormResults';

function CountCalories(formdata) {
  let gender = mapFormResults({ name: 'gender', val: formdata.gender });
  let goal = mapFormResults({ name: 'goal', val: formdata.goal });
  let sport = mapFormResults({
    name: 'sport',
    val: formdata.sport,
  });
  let job = mapFormResults({
    name: 'job',
    val: formdata.job,
  });

  console.log(formdata);
  console.log(job);
  console.log(goal);
  console.log(gender);
  console.log(sport);

  const result =
    (((formdata.weight - (formdata.fat / 100) * formdata.weight) * 21.6 + 370) *
      ((goal + gender + sport + job) / 4)) /
    1789;

  return Math.round(1700 * result);
}

export default CountCalories;
