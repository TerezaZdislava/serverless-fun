import mapFormResults from './mapFormResults';

function CountCalories(formdata) {
  let goal = mapFormResults({ name: 'goal', val: formdata.goal });
  let sport = mapFormResults({
    name: 'sport',
    val: formdata.sport,
  });
  let job = mapFormResults({
    name: 'job',
    val: formdata.job,
  });

  const maleCountCalories = () => {
    const basic =
      66.5 +
      13.8 * (formdata.weight - (formdata.fat / 100) * formdata.weight) +
      5 * 180 -
      6.8 * formdata.age;
    const result = basic * (1 + (goal + sport + job));
    return result;
  };

  const femaleCountCalories = () => {
    const basic =
      655 +
      9.6 * (formdata.weight - (formdata.fat / 100) * formdata.weight) +
      1.8 * 170 -
      4.7 * formdata.age;
    const result = basic * (1 + (goal + sport + job));
    return result;
  };

  const defaultCountCalories = () => {
    const result =
      (((formdata.weight - (formdata.fat / 100) * formdata.weight) * 21.6 +
        370) *
        (1 + (goal + sport + job))) /
      1789;

    return Math.round(1700 * result);
  };

  switch (formdata.gender) {
    case 'female':
      return femaleCountCalories();
    case 'male':
      return maleCountCalories();
    default:
      return defaultCountCalories();
  }
}

export default CountCalories;
