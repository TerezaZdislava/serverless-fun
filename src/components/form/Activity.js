import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTranslation } from 'react-i18next';

function Activity({ formData, setFormData, errors }) {
  const { t } = useTranslation();
  const sportFrequencyChange = (event) => {
    setFormData({
      ...formData,
      sport: event.target.value,
    });
  };

  const jobActivityChange = (event) => {
    setFormData({
      ...formData,
      job: event.target.value,
    });
  };

  return (
    <form className="formPart">
      <section className="question">
        {errors && <span className="error">Required *</span>}
        <h4>{t('form.questions.activity.sport.q')}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.sport}
          value={formData.sport}
          onChange={sportFrequencyChange}
        >
          <FormControlLabel
            value="0"
            control={<Radio color="secondary" />}
            label={t('form.questions.activity.sport.a1')}
          />
          <FormControlLabel
            value="1"
            control={<Radio color="secondary" />}
            label={t('form.questions.activity.sport.a2')}
          />
          <FormControlLabel
            value="2"
            control={<Radio color="secondary" />}
            label={t('form.questions.activity.sport.a3')}
          />
          <FormControlLabel
            value="3"
            control={<Radio color="secondary" />}
            label={t('form.questions.activity.sport.a4')}
          />
        </RadioGroup>
      </section>
      <section className="question">
        {errors && <span className="error">Required *</span>}
        <h4>{t('form.questions.activity.job.q')}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.job}
          value={formData.job}
          onChange={jobActivityChange}
        >
          <FormControlLabel
            value="0"
            control={<Radio color="secondary" />}
            label={t('form.questions.activity.job.a1')}
          />
          <FormControlLabel
            value="1"
            control={<Radio color="secondary" />}
            label={t('form.questions.activity.job.a2')}
          />
          <FormControlLabel
            value="2"
            control={<Radio color="secondary" />}
            label={t('form.questions.activity.job.a3')}
          />
        </RadioGroup>
      </section>
    </form>
  );
}
export default Activity;
