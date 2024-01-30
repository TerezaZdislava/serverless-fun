import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {
  femFatImages,
  maleFatImages,
  otherFatImages,
} from '../../data/fatImages';
import { useTranslation } from 'react-i18next';

function BodyFat({ formData, setFormData }) {
  const { t } = useTranslation();
  function handleChange(e, newValue) {
    console.log(newValue);
    setFormData({
      ...formData,
      fat: newValue,
    });
  }

  function imgSrc() {
    if (formData.gender === 'male') {
      return maleFatImages[formData.fat - 1];
    }
    if (formData.gender === 'female') {
      return femFatImages[formData.fat - 1];
    } else {
      return otherFatImages[formData.fat - 1];
    }
  }

  return (
    <form className="formPart">
      <h4>{t('form.questions.fat.q')}</h4>
      <img src={imgSrc()} alt={`f${formData.fat}`} />
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Body fat"
          defaultValue={3}
          onChange={handleChange}
          color="secondary"
          step={1}
          min={1}
          max={5}
        />
      </Box>
    </form>
  );
}
export default BodyFat;
