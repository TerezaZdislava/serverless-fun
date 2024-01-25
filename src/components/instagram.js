import '../styles/components/instagram.scss';
import SvgIcon from '@mui/icons-material/MenuRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState, useEffect } from 'react';

function Instagram() {
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
    <section class="instagram">
      <a href="https://www.instagram.com/gethealthymenu/" target="blanc">
        <h2>
          Follow us on Instagram
          <SvgIcon component={InstagramIcon} />
        </h2>
      </a>
      <script src="https://snapwidget.com/js/snapwidget.js"></script>
      <iframe
        title="insta"
        src="https://snapwidget.com/embed/1056457"
        class="snapwidget-widget"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
        style={{
          border: 'none',
          overflow: 'hidden',
          height: windowWidth > 600 ? '410px' : '300px',
          width: '620px',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      ></iframe>
    </section>
  );
}

export default Instagram;
