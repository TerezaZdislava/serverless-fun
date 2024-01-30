import '../styles/components/header.scss';
import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SvgIcon from '@mui/icons-material/MenuRounded';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cz from '../assets/cz.png';
import en from '../assets/en.png';

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  let [mobileMenu, setMobileMenu] = useState(false);
  const lngs = {
    cz: { nativeName: 'CZ', icon: cz },
    en: { nativeName: 'EN', icon: en },
  };

  let menuButton;
  if (mobileMenu) {
    menuButton = (
      <button
        className="mobile-menu-icon"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <SvgIcon component={CloseRoundedIcon} />
      </button>
    );
  } else {
    menuButton = (
      <button
        className="mobile-menu-icon"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <SvgIcon component={MenuRoundedIcon} />
      </button>
    );
  }

  return (
    <div className="header-container">
      <div className="header">
        <button className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt={logo} />
        </button>
        <div className="links">
          <span>
            <a href="#faq">{t('header.faq')}</a>
            <span className="underline"></span>
          </span>
          <span>
            <a href="#news">{t('header.new')}</a>
            <span className="underline"></span>
          </span>
          <span>
            <a href="#news">{t('header.blog')}</a>
            <span className="underline"></span>
          </span>
          <span>
            <a href="#contact">{t('header.contact')}</a>
            <span className="underline"></span>
          </span>
        </div>
        <div className="right-half">
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              className={
                i18n.resolvedLanguage === lng ? 'lang_selected' : 'lang'
              }
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
              <img src={lngs[lng].icon} alt="bbb" />
            </button>
          ))}
          {/* <div className="account">
            <button className="signin">Log in</button>
            <button className="login button-primary">Sign up</button>
          </div> */}
        </div>
        {menuButton}
      </div>
      {mobileMenu && (
        <div
          className="background"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></div>
      )}
      {mobileMenu && (
        <div className="mobile-menu">
          <div className="content">
            <div className="links">
              <span>
                <a href="#faq">{t('header.faq')}</a>
              </span>
              <span>
                <a href="#news">{t('header.new')}</a>
              </span>
              <span>
                <a href="#news">{t('header.blog')}</a>
              </span>
              <span>
                <a href="#contact">{t('header.contact')}</a>
              </span>
            </div>
            <hr />
            {/* <div className="account">
              <button className="signin" onClick={() => navigate('/login')}>
                Přihlásit
              </button>
              <button
                className="login button-primary"
                onClick={() => navigate('/login')}
              >
                Vytvořit účet
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
