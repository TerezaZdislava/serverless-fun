import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {
  femFatImages,
  maleFatImages,
  otherFatImages,
} from '../../data/fatImages';

function BodyFat({ formData, setFormData, formquestions }) {
  function handleChange(event, newValue) {
    // console.log(newValue);
    setFormData({
      ...formData,
      bodyFat: newValue,
    });
  }

  function imgSrc() {
    if (formData.gender === 'Male') {
      return maleFatImages[formData.bodyFat - 1];
    }
    if (formData.gender === 'Female') {
      return femFatImages[formData.bodyFat - 1];
    } else {
      return otherFatImages[formData.bodyFat - 1];
    }
  }

  return (
    <form className="formPart">
      <h4>{formquestions.q}</h4>
      <img src={imgSrc()} alt={`f${formData.bodyFat}`} />
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
