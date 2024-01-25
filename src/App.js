import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Article1 from './pages/Article1';
import CountCalories from './functions/countCalories';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserForm from './pages/UserForm';

function App() {
  const [meals, setMeals] = useState();
  const [calories, setCalories] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const fetchData = async (formData) => {
    const result = await axios.post('/.netlify/functions/getMeals', {
      diet: formData.diet,
      meals: formData.numberOfMeals,
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
      <Route path="/articles/:articleId" element={<Article1 />} />
    </Routes>
  );
}

export default App;
