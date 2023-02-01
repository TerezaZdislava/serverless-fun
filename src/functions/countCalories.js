import mapFormResults from './mapFormResults';

function CountCalories(formdata) {
  let gender = mapFormResults({ name: 'gender', val: formdata.gender });
  let goal = mapFormResults({ name: 'goal', val: formdata.goal });
  let sportFrequency = mapFormResults({
    name: 'frequency',
    val: formdata.sportFrequency,
  });
  let jobActivity = mapFormResults({
    name: 'activity',
    val: formdata.jobActivity,
  });

  const result =
    (((formdata.weight - (formdata.bodyFat / 100) * formdata.weight) * 21.6 +
      370) *
      ((goal + gender + sportFrequency + jobActivity) / 4)) /
    1789;

  return Math.round(1700 * result);
}

export default CountCalories;
