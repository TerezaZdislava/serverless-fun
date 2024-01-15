import { articles } from '../data/articles';
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

function Articles() {
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

  return (
    <section className="news" id="news">
      <div className="text">
        <h1>New articles</h1>
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
          {articles.map((article, i) => (
            <Slide index={i} key={i}>
              <img
                src={article.image}
                alt={article.h1}
                style={{ objectFit: 'cover', width: '100%' }}
              />
              <h3
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                }}
              >
                {article.h1}
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
