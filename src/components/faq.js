import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SvgIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import data from '../data/faq.json';

function Faq() {
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
      <h1>Frequently asked questions</h1>
      <div className="container">
        <div className="box-left">
          {data.map(function (elm, i) {
            if (i % 2 === 0)
              return (
                <div className="question" key={elm.id}>
                  <div className="top">
                    <h2>{elm.q}</h2>
                    <button onClick={() => expandQuestion(elm.id)}>
                      {question === elm.id ? (
                        <SvgIcon component={ExpandLessIcon} />
                      ) : (
                        <SvgIcon component={ExpandMoreIcon} />
                      )}
                    </button>
                  </div>
                  {question === elm.id && <span>{elm.a}</span>}
                </div>
              );
            else return null;
          })}
        </div>
        <div className="box-right">
          {data.map(function (elm, i) {
            if (i % 2)
              return (
                <div className="question" key={elm.id}>
                  <div className="top">
                    <h2>{elm.q}</h2>
                    <button onClick={() => expandQuestion(elm.id)}>
                      {question === elm.id ? (
                        <SvgIcon component={ExpandLessIcon} />
                      ) : (
                        <SvgIcon component={ExpandMoreIcon} />
                      )}
                    </button>
                  </div>
                  {question === elm.id && <span>{elm.a}</span>}
                </div>
              );
            else return null;
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
