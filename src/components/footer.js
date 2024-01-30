import '../styles/components/footer.scss';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer id="contact">
      <hr />
      <div className="information-box">
        <div className="logo-box">
          {/* <img src={logo} alt={logo} /> */}
          <span>© Copyright 2022 </span>
          <span>Healthymenu s.r.o.</span>
        </div>
        <div className="contact">
          <div>
            <h2>{t('footer.contact')}</h2>
            <span>
              <a href="mailto: hello@healthymenu.com" target="_blanc">
                tereza@healthymenu.com
              </a>
            </span>
            <span>
              <a href="mailto: hello@healthymenu.com" target="_blanc">
                hello@healthymenu.com
              </a>
            </span>
          </div>
          <div>
            <h2>Healthymenu s.r.o.</h2>
            <span>IČ: 06628842</span>
            <span>DIČ: CZ06628842</span>
          </div>
        </div>
        <div className="footer-news">
          <h2>Newsletter</h2>
          <span>{t('footer.newsletterDescription')}</span>
          <div className="subscribe">
            <input
              placeholder="email@example.com"
              type="email"
              pattern=".+@example\.com"
              size="64"
            />
            <button>{t('footer.button')}</button>
          </div>
        </div>
        <div className="info">
          <h2>{t('footer.info')}</h2>
          <span>
            <a href="/">{t('footer.docs')}</a>
          </span>
          <span>
            <a href="/">{t('footer.conditions')}</a>
          </span>
          <span>
            <a href="/">{t('footer.personalData')}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
