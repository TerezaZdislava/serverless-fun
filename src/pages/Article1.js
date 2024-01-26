import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/components/article.scss';
import { useNavigate } from 'react-router-dom';

function Article1() {
  const articleId = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(articleId);
    axios
      .post('/.netlify/functions/getArticlesContent', articleId)
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [articleId]);

  console.log(articleId);
  return (
    <section className="article">
      {!isLoading && (
        <>
          <h1>{data.title}</h1>
          <img src={data?.image} alt={data.articleId} />
          <p>{data.text}</p>
          <button className="button-secondary" onClick={() => navigate('/')}>
            Go to homepage
          </button>
        </>
      )}
    </section>
  );
}

export default Article1;
