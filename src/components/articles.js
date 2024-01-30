import '../styles/components/articles.scss';
import SvgIcon from '@mui/icons-material/MenuRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState, useEffect } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function Articles() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { t, i18n } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      console.log(window.innerWidth);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    axios
      .get('/.netlify/functions/getArticles')
      .then(function (response) {
        setArticles(response.data);
        setIsLoading(false);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <section className="news" id="news">
      <div className="text">
        <h1>{t('home.articles.headline')}</h1>
      </div>
      <CarouselProvider
        naturalSlideWidth={windowWidth > 1000 ? 600 : 250}
        naturalSlideHeight={600}
        visibleSlides={windowWidth > 1000 ? 3 : 1}
        infinite={true}
        totalSlides={6}
        isIntrinsicHeight={600}
        style={{ position: 'relative', overflow: 'visible' }}
      >
        <Slider>
          {!isLoading &&
            articles.map((article, i) => (
              <Slide index={i} key={i}>
                <img
                  src={article?.image}
                  onClick={() =>
                    navigate(
                      `/articles/${article.articleId}/${i18n.resolvedLanguage}`,
                    )
                  }
                  alt={article.title}
                  style={{ objectFit: 'cover', width: '100%' }}
                />
                <h3
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                  }}
                >
                  {article.title}
                </h3>
              </Slide>
            ))}
        </Slider>
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '0',
          }}
        >
          <ButtonBack
            style={{
              marginRight: '30px',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
            }}
          >
            <SvgIcon component={ArrowBackIosIcon} />
          </ButtonBack>
          <ButtonNext
            style={{
              marginRight: '30px',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
            }}
          >
            <SvgIcon component={ArrowForwardIosIcon} />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </section>
  );
}

export default Articles;
