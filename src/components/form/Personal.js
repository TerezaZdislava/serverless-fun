import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Personal({ formData, setFormData, formquestions, errors }) {
  const handleWeightChange = (weight) => {
    setFormData({
      ...formData,
      weight: parseInt(weight),
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
        <h4>{formquestions[0].q}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.gender}
          value={formData.gender}
          onChange={genderChange}
        >
          <FormControlLabel
            value={formquestions[0].a[0]}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[0]}
          />
          <FormControlLabel
            value={formquestions[0].a[1]}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[1]}
          />
          <FormControlLabel
            value={formquestions[0].a[2]}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[2]}
          />
        </RadioGroup>
      </section>
      <section className="question">
        {errors && <span className="error">Required *</span>}
        <h4>{formquestions[1].q}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.goal}
          value={formData.goal}
          onChange={goalChange}
        >
          <FormControlLabel
            value={formquestions[1].a[0]}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[0]}
          />
          <FormControlLabel
            value={formquestions[1].a[1]}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[1]}
          />
          <FormControlLabel
            value={formquestions[1].a[2]}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[2]}
          />
        </RadioGroup>
      </section>
      <section className="question">
        {errors && (
          <span className="error">Weight must be between 50 kg and 150 kg</span>
        )}
        <h4>{formquestions[2].q}</h4>
        <div>
          <input
            min={50}
            max={120}
            className="user-input"
            type="number"
            value={formData.weight}
            onChange={(e) => handleWeightChange(e.target.value)}
          />
        </div>
      </section>
    </form>
  );
}
export default Personal;
