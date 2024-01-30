import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/components/article.scss';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Article() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();

  console.log(params);
  useEffect(() => {
    console.log(params);
    axios
      .post('/.netlify/functions/getArticlesContent', params)
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [params]);

  return (
    <section className="article">
      {!isLoading && (
        <>
          <h1>{data.title}</h1>
          <img src={data?.image} alt={data.articleId} />
          <p>{data.text}</p>
          <button className="button-secondary" onClick={() => navigate('/')}>
            {t('home.articles.button')}{' '}
          </button>
        </>
      )}
    </section>
  );
}

export default Article;
