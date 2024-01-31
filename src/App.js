import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Article from './pages/Article';
import CountCalories from './functions/countCalories';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserForm from './pages/UserForm';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const [meals, setMeals] = useState();
  const [calories, setCalories] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const fetchData = async (formData) => {
    const result = await axios.post('/.netlify/functions/getMeals', {
      diet: formData.diet,
      meals: formData.numberOfMeals,
      lang: i18n.resolvedLanguage,
    });
    setMeals(result.data);
    navigate('/menu');
  };

  function CountCal(formData) {
    const result = CountCalories(formData);
    setCalories(result);
  }

  function handleFormChange(formData) {
    CountCal(formData);
    fetchData(formData);
    setFormData(formData);
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/menu"
        element={
          <Menu
            menu={meals}
            goal={formData?.goal}
            calories={calories}
            diet={formData?.diet}
          />
        }
      />
      <Route
        path="/form"
        element={
          <UserForm
            sendformToParent={(e) => {
              handleFormChange(e);
            }}
          />
        }
      />
      <Route path={'/articles/:articleId/:lang'} element={<Article />} />
    </Routes>
  );
}

export default App;
