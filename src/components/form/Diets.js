import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useTranslation } from 'react-i18next';

function Diet({ formData, setFormData }) {
  const { t } = useTranslation();
  const numberOfMealsChange = (event) => {
    setFormData({
      ...formData,
      numberOfMeals: parseInt(event.target.value),
    });
  };

  const dietChange = (event) => {
    setFormData({
      ...formData,
      diet: event.target.value,
    });
  };

  return (
    <form className="formPart">
      <section className="question">
        <h4>{t('form.questions.food.diet.q')}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.diet}
          value={formData.diet}
          onChange={dietChange}
        >
          <FormControlLabel
            value="vegan"
            control={<Radio color="secondary" />}
            label={t('form.questions.food.diet.a1')}
          />
          <FormControlLabel
            value="vegetarian"
            control={<Radio color="secondary" />}
            label={t('form.questions.food.diet.a2')}
          />
          <FormControlLabel
            value="lactoseFree"
            control={<Radio color="secondary" />}
            label={t('form.questions.food.diet.a3')}
          />
          <FormControlLabel
            value="glutenFree"
            control={<Radio color="secondary" />}
            label={t('form.questions.food.diet.a4')}
          />
        </RadioGroup>
      </section>
      <section className="question">
        <h4>{t('form.questions.food.meals.q')}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.numberOfMeals}
          value={formData.numberOfMeals}
          onChange={numberOfMealsChange}
        >
          <FormControlLabel
            value="3"
            control={<Radio color="secondary" />}
            label={t('form.questions.food.meals.a1')}
          />
          <FormControlLabel
            value="5"
            control={<Radio color="secondary" />}
            label={t('form.questions.food.meals.a2')}
          />
        </RadioGroup>
      </section>
    </form>
  );
}
export default Diet;
