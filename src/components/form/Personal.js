import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTranslation } from 'react-i18next';

function Personal({ formData, setFormData, errors }) {
  const { t } = useTranslation();
  const handleWeightChange = (weight) => {
    setFormData({
      ...formData,
      weight: parseInt(weight),
    });
  };

  const handleAgeChange = (age) => {
    setFormData({
      ...formData,
      age: parseInt(age),
    });
  };

  const genderChange = (event) => {
    setFormData({
      ...formData,
      gender: event.target.value,
    });
  };

  const goalChange = (event) => {
    setFormData({
      ...formData,
      goal: event.target.value,
    });
  };

  return (
    <form className="formPart">
      <section className="question">
        {errors && <span className="error">Required *</span>}
        <h4>{t('form.questions.personal.sex.q')}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.gender}
          value={formData.gender}
          onChange={genderChange}
        >
          <FormControlLabel
            value="male"
            control={<Radio color="secondary" />}
            label={t('form.questions.personal.sex.a1')}
          />
          <FormControlLabel
            value="female"
            control={<Radio color="secondary" />}
            label={t('form.questions.personal.sex.a2')}
          />
          <FormControlLabel
            value="other"
            control={<Radio color="secondary" />}
            label={t('form.questions.personal.sex.a3')}
          />
        </RadioGroup>
      </section>
      <section className="question">
        {errors && <span className="error">Required *</span>}
        <h4>{t('form.questions.personal.goal.q')}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.goal}
          value={formData.goal}
          onChange={goalChange}
        >
          <FormControlLabel
            value="reduce"
            control={<Radio color="secondary" />}
            label={t('form.questions.personal.goal.a1')}
          />
          <FormControlLabel
            value="hold"
            control={<Radio color="secondary" />}
            label={t('form.questions.personal.goal.a2')}
          />
          <FormControlLabel
            value="gain"
            control={<Radio color="secondary" />}
            label={t('form.questions.personal.goal.a3')}
          />
        </RadioGroup>
      </section>
      <section className="question">
        {errors && (
          <span className="error">Weight must be between 50 kg and 150 kg</span>
        )}
        <h4>{t('form.questions.personal.weight.q')}</h4>
        <div>
          <input
            min={50}
            max={150}
            className="user-input"
            type="number"
            value={formData.weight}
            onChange={(e) => handleWeightChange(e.target.value)}
          />
        </div>
      </section>
      <section className="question">
        {errors && (
          <span className="error">Age must be between 18 and 99 years</span>
        )}
        <h4>{t('form.questions.personal.age.q')}</h4>
        <div>
          <input
            min={18}
            max={99}
            className="user-input"
            type="number"
            value={formData.age}
            onChange={(e) => handleAgeChange(e.target.value)}
          />
        </div>
      </section>
    </form>
  );
}
export default Personal;
