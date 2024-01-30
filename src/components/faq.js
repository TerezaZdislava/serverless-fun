import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SvgIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Faq() {
  const { t } = useTranslation();
  let [question, setquestion] = useState(null);
  const expandQuestion = (questionIndex) => {
    if (question === questionIndex) {
      setquestion(null);
    } else {
      setquestion(questionIndex);
    }
  };

  return (
    <section className="faq" id="faq">
      <h1>{t('home.faq.headline')}</h1>
      <div className="container">
        <div className="box-left">
          <div className="question">
            <div className="top">
              <h2>{t('home.faq.q1')}</h2>
              <button onClick={() => expandQuestion(1)}>
                {question === 1 ? (
                  <SvgIcon component={ExpandLessIcon} />
                ) : (
                  <SvgIcon component={ExpandMoreIcon} />
                )}
              </button>
            </div>
            {question === 1 && <span>{t('home.faq.a1')}</span>}
          </div>
          <div className="question">
            <div className="top">
              <h2>{t('home.faq.q2')}</h2>
              <button onClick={() => expandQuestion(2)}>
                {question === 2 ? (
                  <SvgIcon component={ExpandLessIcon} />
                ) : (
                  <SvgIcon component={ExpandMoreIcon} />
                )}
              </button>
            </div>
            {question === 2 && <span>{t('home.faq.a2')}</span>}
          </div>
          <div className="question">
            <div className="top">
              <h2>{t('home.faq.q3')}</h2>
              <button onClick={() => expandQuestion(3)}>
                {question === 3 ? (
                  <SvgIcon component={ExpandLessIcon} />
                ) : (
                  <SvgIcon component={ExpandMoreIcon} />
                )}
              </button>
            </div>
            {question === 3 && <span>{t('home.faq.a3')}</span>}
          </div>
        </div>
        <div className="box-right">
          <div className="question">
            <div className="top">
              <h2>{t('home.faq.q4')}</h2>
              <button onClick={() => expandQuestion(4)}>
                {question === 4 ? (
                  <SvgIcon component={ExpandLessIcon} />
                ) : (
                  <SvgIcon component={ExpandMoreIcon} />
                )}
              </button>
            </div>
            {question === 4 && <span>{t('home.faq.a4')}</span>}
          </div>
          <div className="question">
            <div className="top">
              <h2>{t('home.faq.q5')}</h2>
              <button onClick={() => expandQuestion(5)}>
                {question === 5 ? (
                  <SvgIcon component={ExpandLessIcon} />
                ) : (
                  <SvgIcon component={ExpandMoreIcon} />
                )}
              </button>
            </div>
            {question === 5 && <span>{t('home.faq.a3')}</span>}
          </div>
          <div className="question">
            <div className="top">
              <h2>{t('home.faq.q6')}</h2>
              <button onClick={() => expandQuestion(6)}>
                {question === 6 ? (
                  <SvgIcon component={ExpandLessIcon} />
                ) : (
                  <SvgIcon component={ExpandMoreIcon} />
                )}
              </button>
            </div>
            {question === 6 && <span>{t('home.faq.a6')}</span>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
