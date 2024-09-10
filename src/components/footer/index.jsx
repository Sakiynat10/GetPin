"use client"
import "./style.scss"
import {useEffect, useState} from "react";
import SkeletonLoading from "@/components/skeleton-main-page-loading";

const Footer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <footer>
      <div className="container-1040">
        <div className="footer-logo">
          {loading ? <SkeletonLoading w={"150px"} h={"40px"} mb={"0"}/> : <a href="/">Getpin</a>}
          {loading ? <SkeletonLoading w={"300px"} h={"20px"} mb={"0"}/> :
              <span>Собирайся, учись, развивайся – всё в одном месте!</span>
          }
        </div>
        <div className="footer-content">
          <div className="content-left">
            <div className="footer-medias">
              {loading ? <SkeletonLoading w={"100%"} h={"100%"} b={"500px"}/> : <a href="/">
                <img src="/telegram.svg" alt="telegram"/>
              </a>}
              {loading ? <SkeletonLoading w={"100%"} h={"100%"} b={"500px"}/> : <a href="/">
                <img src="/facebook.svg" alt="telegram"/>
              </a>}
              {loading ? <SkeletonLoading w={"100%"} h={"100%"} b={"500px"}/> : <a href="/">
                <img src="/instagram.svg" alt="telegram"/>
              </a>}
              {loading ? <SkeletonLoading w={"100%"} h={"100%"} b={"500px"}/> : <a href="/">
                <img src="/twitter.svg" alt="telegram"/>
              </a>}
            </div>
            <div className="footer-contact">
              <div className="contact-number">
                {loading ? <SkeletonLoading w={"50%"}/> : <span>Наш телефон:</span>
                }
                {loading ? <SkeletonLoading h={"30px"}/> : <p>+998 90 000-00-00</p>
                }
              </div>
              <div className="contact-email">
                {loading ? <SkeletonLoading/> : <span>Электронная почта:</span>
                }
                {loading ? <SkeletonLoading h={"30px"}/> : <p>info@gmail.com</p>
                }
              </div>
            </div>
          </div>
          <div className="content-right">
            {loading ? <SkeletonLoading h={"50px"} mb={"30px"}/> :
                <p className="right-title">Наша платформа предоставляет уникальную возможность организаторам мероприятий
                  быстро и эффективно привлекать аудиторию. Здесь вы можете разместить свои объявления о предстоящих
                  мероприятиях, мастер-классах и семинарах, привлекая внимание потенциальных участников.</p>
            }
            {loading ? <SkeletonLoading  h={"50px"} /> :
                <p className="right-subtitle">Пользователи обязаны соблюдать правила пользования сайтом. Размещение
                  объявлений бесплатно с учетом условий использования.</p>}
          </div>
        </div>
        <div className="footer-bottom">
          {loading ? <SkeletonLoading w={"33%"}/> : <p>Copyright @ 2024</p>}
          {loading ? <SkeletonLoading w={"33%"}/> : <span>Terms of Use</span>}
          {loading ? <SkeletonLoading w={"33%"}/> : <span>Privacy policy</span>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
