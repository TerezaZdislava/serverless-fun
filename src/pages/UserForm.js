import { useState } from 'react';
import Activity from '../components/form/Activity';
import BodyFat from '../components/form/BodyFat';
import Diets from '../components/form/Diets';
import Personal from '../components/form/Personal';
import StepperWrapper from '../components/form/StepperWrapper';
import DefaultFormDataInt from '../interface/formData';
import '../styles/form.scss';
import { isNonEmptyString, isNotNil } from 'ramda-adjunct';
import { useTranslation } from 'react-i18next';

function UserForm({ sendformToParent }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState(false);
  const [formData, setFormData] = useState(DefaultFormDataInt);

  const validate = () => {
    switch (step) {
      case 0:
        if (
          isNonEmptyString(formData.gender) &&
          isNonEmptyString(formData.goal) &&
          isNotNil(formData.weight)
        ) {
          return true;
        }
        return false;
      case 1:
        return true;
      case 2:
        if (
          isNonEmptyString(formData.sport) &&
          isNonEmptyString(formData.job)
        ) {
          return true;
        }
        return false;
      case 3:
        return true;
      default:
        return true;
    }
  };

  const view = () => {
    switch (step) {
      case 0:
        return (
          <Personal
            errors={errors}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 1:
        return <Diets formData={formData} setFormData={setFormData} />;
      case 2:
        return (
          <Activity
            errors={errors}
            formData={formData}
            setFormData={setFormData}
          />
        );
      default:
        return <BodyFat formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      setErrors(false);
      setStep(step + 1);
    } else {
      setErrors(true);
    }
    if (step === 3) {
      sendformToParent(formData);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors(false);
  };

  return (
    <div className="formContainer">
      <StepperWrapper step={step + 1} />
      {view()}
      <div className="buttons">
        {step > 0 && (
          <button className="button-secondary back" onClick={handleBack}>
            {t('form.back')}
          </button>
        )}
        <button className="button-primary" onClick={handleSubmit}>
          {step < 3 ? t('form.next') : t('form.submit')}
        </button>
      </div>
    </div>
  );
}

export default UserForm;
