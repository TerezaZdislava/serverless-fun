// import { Ingredient } from '../interface/meal';
import TaskIcon from '@mui/icons-material/Task';
import SvgIcon from '@mui/icons-material/Task';
import '../styles/menu.scss';
import { useTranslation } from 'react-i18next';

function Meal({ meal }) {
  const { t } = useTranslation();
  return (
    <>
      <h5 className="headline">{meal?.name}</h5>
      <div className="meal">
        <section className="left">
          <div className="info">
            <div className="icon-background">
              <SvgIcon component={TaskIcon} />
            </div>
            <div className="text">
              <span>{t('menu.dificulty')}</span>
              <h4>Easy</h4>
            </div>
            <div className="text">
              <span>{t('menu.prep')}</span>
              <h4>15 min</h4>
            </div>
            <div className="text">
              <span>{t('menu.cooking')}</span>
              <h4>0 min</h4>
            </div>
            <div className="text">
              <span>{t('menu.total')}</span>
              <h4>15 min</h4>
            </div>
          </div>
          <div className="ingredients">
            <h2>{t('menu.ingredients')}</h2>
            {meal?.ingredients?.map(function (elm, i) {
              return (
                <div className="ingredient" key={i}>
                  <h4>{elm.grams} g</h4>
                  <span>{elm.name}</span>
                </div>
              );
            })}
          </div>
        </section>
        <section className="right">
          <img src={meal?.image} alt={meal?.image} />
          <h2>{t('menu.instructions')}</h2>
          <p>{meal?.steps}</p>
        </section>
      </div>
    </>
  );
}

export default Meal;
