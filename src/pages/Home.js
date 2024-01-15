import Articles from '../components/articles';
import Faq from '../components/faq';
import { imagesArray } from '../data/images';
import '../styles/home.scss';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="about">
        <div className="background"></div>
        <div className="content">
          <div className="text">
            <h1>Healthy menu</h1>
            <h1>tailored to you needs</h1>
            <h2>Free, online and in 5 minutes</h2>
            <span>
              Get your healthy menu online, easily and within 5 minutes. The
              menu will be tailored exactly for you. Just fill out a short
              questionnaire where we will ask about your activity, figure type,
              goals or food preferences.
            </span>
            <span>Try our app and get your healthy menu for free.</span>
            <button
              className="button-primary"
              onClick={() => navigate('/form')}
            >
              Get healthy menu for free
            </button>
          </div>
          <div className="images">
            <img className="img1" src={imagesArray[1]} alt={imagesArray[0]} />
            <img className="img2" src={imagesArray[9]} alt={imagesArray[1]} />
            <img className="img3" src={imagesArray[4]} alt={imagesArray[1]} />
            <img className="img4" src={imagesArray[7]} alt={imagesArray[1]} />
          </div>
        </div>
      </section>
      <section className="about-mobile">
        <div className="background"></div>
        <div className="images">
          <img className="img1" src={imagesArray[1]} alt={imagesArray[0]} />
          <img className="img2" src={imagesArray[9]} alt={imagesArray[1]} />
          <img className="img4" src={imagesArray[4]} alt={imagesArray[1]} />
        </div>
        <div className="content">
          <div className="text">
            <h1>Healthy menu</h1>
            <h1>tailored to you needs</h1>
            <h2>Free, online and in 5 minutes</h2>
            <span>
              Get your healthy menu online, easily and within 5 minutes. The
              menu will be tailored exactly for you. Just fill out a short
              questionnaire where we will ask about your activity, figure type,
              goals or food preferences.
            </span>
            <span>Try our app and get your healthy menu for free.</span>
            <button
              className="button-primary"
              onClick={() => navigate('/form')}
            >
              Get healthy menu for free
            </button>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="images">
          <img
            className="img1 square"
            src={imagesArray[8]}
            alt={imagesArray[0]}
          />
          <div className="square1 square">
            <h1>3 mil.</h1>
            <span>daily menus sent</span>
          </div>
          <div className="square2 square">
            <h1>1 000+</h1>
            <span>happy clients</span>
          </div>
          <div className="square3 square">
            <h1>8 years</h1>
            <span>experience in nutrition</span>
          </div>
        </div>
        <div className="text-container">
          <div className="text">
            <h1>Experience, reliability, speed</h1>
            <p>
              We have been in the field of nutrition for more than 8 years,
              which is why we are able to identify the needs of our clients very
              quickly. That's also why I've already sent out millions of menus
              and worked with thousands of clients in my not-so-long existence.
            </p>
            <button className="button-primary">More about us</button>
          </div>
        </div>
      </section>
      <Faq />
      <Articles />
    </div>
  );
}

export default Home;
