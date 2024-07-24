import "./style.scss"

const Footer = () => {
  return (
    <footer>
      <div className="container-1040">
        <div className="footer-logo">
          <a href="/">Getpin</a>
          <span>Собирайся, учись, развивайся – всё в одном месте!</span>
        </div>
        <div className="footer-content">
          <div className="content-left">
            <div className="footer-medias">
              <a href="/">
                <img src="/telegram.svg" alt="telegram" />
              </a>
              <a href="/">
                <img src="/facebook.svg" alt="facebook" />
              </a>
              <a href="/">
                <img src="/instagram.svg" alt="instagram" />
              </a>
              <a href="/">
                <img src="/twitter.svg" alt="twitter" />
              </a>
            </div>
            <div className="footer-contact">
              <div className="contact-number">
                <span>Наш телефон:</span>
                <p>+998 90 000-00-00</p>
              </div>
              <div className="contact-email">
                <span>Электронная почта:</span>
                <p>info@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="content-right">
            <p className="right-title">Наша платформа предоставляет уникальную возможность организаторам мероприятий быстро и эффективно привлекать аудиторию. Здесь вы можете разместить свои объявления о предстоящих мероприятиях, мастер-классах и семинарах, привлекая внимание потенциальных участников.</p>
            <p className="right-subtitle">Пользователи обязаны соблюдать правила пользования сайтом. Размещение объявлений бесплатно с учетом условий использования.</p>
          </div>
        </div>
        <div className="footer-bottom">
            <p>Copyright @ 2024</p>
            <span>Terms of Use</span>
            <span>Privacy policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
