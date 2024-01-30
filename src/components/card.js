import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import '../styles/components/card.scss';
import { SvgIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Card({ goal, calories, diet }) {
  const { t } = useTranslation();
  const data = [
    {
      icon: FlagRoundedIcon,
      name: t('menu.goal'),
      selected: goal,
    },
    {
      icon: ElectricBoltRoundedIcon,
      name: t('menu.calories'),
      selected: calories,
    },
    {
      icon: RestaurantRoundedIcon,
      name: t('menu.diet'),
      selected: diet,
    },
  ];
  return (
    <div className="cardsContainer">
      {data.map(function (card, i) {
        return (
          <div className="card" key={i}>
            <div className="icon-background">
              <SvgIcon component={card.icon} />
            </div>
            <div className="text">
              <span className="top-headline">{card.name}</span>
              <h2>{card.selected}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
