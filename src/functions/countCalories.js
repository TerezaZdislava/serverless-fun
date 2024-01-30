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

  // const maleCountCalories = () => {
  //   const result =
  //     66.5 +
  //     13.8 * (formdata.weight - (formdata.fat / 100) * formdata.weight) +
  //     5 * 180 -
  //     6.8 * formdata.age * ((goal + sport + job) / 3);
  //   console.log(result);
  //   return result;
  // };

  // const femaleCountCalories = () => {
  //   const result = 655 + 9.6 * formdata.weight + 1.8 * 170 - 4.7 * formdata.age;
  //   console.log(result);
  //   return result;
  // };

  const defaultCountCalories = () => {
    const result =
      (((formdata.weight - (formdata.fat / 100) * formdata.weight) * 21.6 +
        370) *
        ((goal + sport + job + gender) / 4)) /
      1789;

    console.log(result);

    return Math.round(1700 * result);
  };

  console.log(defaultCountCalories());
  return defaultCountCalories();
}

export default CountCalories;
