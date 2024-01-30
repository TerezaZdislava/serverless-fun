import Card from '../components/card';
import '../styles/menu.scss';
import Meal from '../components/meal';
import { useNavigate } from 'react-router-dom';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Menu({ menu, goal, calories, diet }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [result, setResult] = useState([]);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  function modifyGoalNames(goal) {
    switch (goal) {
      case 'reduce':
        return t('menu.reduce');
      case 'gain':
        return t('menu.gain');
      default:
        return t('menu.hold');
    }
  }

  function modifyDietNames(diet) {
    switch (diet) {
      case 'vegan':
        return t('menu.diets.vegan');
      case 'vegetarian':
        return t('menu.diets.vegetarian');
      case 'lactoseFree':
        return t('menu.diets.lactoseFree');
      case 'glutenFree':
        return t('menu.diets.glutenFree');
      default:
        return t('menu.noDiets');
    }
  }

  function getCount(elm) {
    let count;
    if (Object.keys(elm).includes('gramsPerPiece')) {
      count = elm.grams / elm.gramsPerPiece;
    } else {
      count = elm.grams;
    }
    if (count < 1) {
      count = 1;
    }
    return Math.ceil(count);
  }

  function getids() {
    let result = [];
    let namesArray = [];

    //creat set of names
    Object.values(menu).forEach((meal) => {
      meal.ingredients.forEach((elm) => {
        namesArray.push(elm.name);
      });
    });
    namesArray.sort();
    const nameList = new Set(namesArray);

    //create result
    nameList.forEach((name) => {
      let newElm = {
        name: name,
        count: 0,
        metric: '',
      };
      Object.values(menu).forEach((meal) => {
        meal.ingredients.forEach((elm) => {
          if (elm.name === name) {
            newElm.metric = elm.unit;
            newElm.count = newElm.count + getCount(elm);
          }
        });
      });
      result.push(newElm);
    });
    // console.log(result);
    setResult(result);
  }

  return (
    <div className="menuComponent">
      {menu ? (
        <div className="menuContainer">
          <span>{t('menu.headlineTop')}</span>
          <h1>{t('menu.headlineBig')}</h1>
          <Card
            goal={modifyGoalNames(goal)}
            calories={calories}
            diet={modifyDietNames(diet)}
          />
          <Box>
            <Tabs
              value={tabIndex}
              style={{ marginBottom: '30px' }}
              onChange={handleTabChange}
              centered
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#14274d',
                  height: '5px',
                  borderRadius: '3px',
                },
                '& .MuiTab-root': {
                  color: '#1a1a1a',
                  fontFamily: 'Fira-sans, sans-serif',
                  textTransform: 'capitalize',
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
                '& .Mui-selected': { color: '#14274d' },
              }}
            >
              <Tab label={t('menu.menu')} />
              <Tab label={t('menu.shoppingList')} onClick={() => getids()} />
            </Tabs>
          </Box>
          {tabIndex === 0 && (
            <>
              <span>{t('menu.meals.breakfast')}</span>
              {<Meal meal={menu.breakfast} />}
              {menu.snack ? (
                <>
                  <span>{t('menu.meals.snack')}</span>
                  {<Meal meal={menu.snack} />}
                </>
              ) : null}
              <span>{t('menu.meals.lunch')}</span>
              {<Meal meal={menu.lunch} />}
              {menu.snack2 ? (
                <>
                  <span>{t('menu.meals.snack')}</span>
                  {<Meal meal={menu.snack2} />}
                </>
              ) : null}
              <span>{t('menu.meals.dinner')}</span>
              {<Meal meal={menu.dinner} />}
            </>
          )}
          {tabIndex === 1 && (
            <>
              <div className="shopping-list">
                {result.map(function (elm, i) {
                  return (
                    <div className="ingredient" key={i}>
                      <span style={{ marginRight: '10px' }}>{elm.name}</span>
                      <span>
                        {elm.count} {elm.metric}
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="noData">
          <h1>{t('menu.noData.headline')}</h1>
          <h4>{t('menu.noData.text')}</h4>
          <div className="buttons">
            <button className="button-secondary" onClick={() => navigate('/')}>
              {t('menu.noData.buttonHome')}
            </button>
            <button
              className="button-primary"
              onClick={() => navigate('/form')}
            >
              {t('menu.noData.buttonForm')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
