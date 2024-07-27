"use client";

import React , {useState , useEffect} from "react";
import SearchInput from "../search-input";
import { useParams } from "next/navigation";
import { trainCard } from "@/data";
import Image from "next/image";

const AboutSection = () => {
  const pathname = useParams();
  const id = pathname.about;
  const result = trainCard.filter((el) => el.id === id);


  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about">
      <SearchInput />
      <div className="container-1040 about-container">
        <ul className="page-tabs">
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/master">Мастер-классы</a>
          </li>
          <li>
            <a href="/design">То что вам удобна это ux-дизайн </a>
          </li>
        </ul>
        <div className="about-contents">
          <div className={isShrunk ? "about-content-left" : "about-content-left"}>
            <div className={isShrunk ? "about-content-medias media-fixed" : "about-content-medias"}>
              <a href="">
                <img src="/left-arrow.svg" alt="left-arrow" />
              </a>
              <a href="">
                <img src="/telegram.svg" alt="left-arrow" />
              </a>
              <a href="">
                <img src="/facebook.svg" alt="facebook" />
              </a>
              <a href="">
                <img src="/instagram.svg" alt="instagram" />
              </a>
              <a href="">
                <img src="/copy.svg" alt="copy" />
              </a>
            </div>
            <div className="about-content-infos">
              {result.map((el) => (
                <>
                  <h1>То что вам удобна это </h1>
                  <h1>{el.service}</h1>
                  <div className="left-speaker-infos">
                    <div className="infos-top">
                      <p className="top-data">
                        28-Декабр <span>|</span> 16:40
                      </p>
                      <p className="top-subtitle">
                        Проектирование и разработка стартапов
                      </p>
                      <div className="top-shares">
                        <div className="viewers">
                          <div className="viewers-img">
                            <Image fill src={"/watcher.svg"} alt="viewer" />
                          </div>
                          <p>{el.viewers}</p>
                        </div>
                        <div className="shares">
                          <div className="shares-img">
                            <Image fill src={"/share.svg"} alt="viewer" />
                          </div>
                          <p>{el.shares}</p>
                        </div>
                      </div>
                    </div>
                    <div className="infos-speaker-images">
                      <div className="speaker-img-info">
                        <div className="speaker-img">
                          <Image
                            fill
                            src={el.trainer_img1}
                            alt={el.profession1}
                          />
                        </div>
                        <h2>{el.fullName1}</h2>
                        <h3>{el.profession1}</h3>
                      </div>
                      <div className="speaker-img-info">
                        <div className="speaker-img">
                          <Image
                            fill
                            src={el.trainer_img2}
                            alt={el.profession2}
                          />
                        </div>
                        <h2>{el.fullName2}</h2>
                        <h3>{el.profession2}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="about-content-descriptions">
                    <div className="desc-title">
                      <div
                        className="title-img"
                      >
                        <Image fill src={"/star.png"} alt="star" />
                      </div>
                      <p>
                        Погрузитесь в мир <span>То что вам удобна это {el.service} </span> с
                        нашим увлекательным мастер-классом, где вы научитесь:
                      </p>
                    </div>
                    <ul className="desc-subtitles">
                      <li>
                      <span>-</span>
                        <div className="subtitle-img">
                          <Image
                            fill
                            src="/paint-brush.png"
                            alt="brush"
                          />
                        </div>
                        <p>
                          {" "}
                          **[Навык 1]** или знание, которое получат участники
                        </p>
                      </li>
                      <li>
                      <span>-</span>
                        <div className="subtitle-img">
                          <Image
                            fill
                            src="/paint-brush.png"
                            alt="brush"
                          />
                        </div>
                        <p>
                          {" "}
                          **[Навык 2]** или знание, которое получат участники
                        </p>
                      </li>
                      <li>
                      <span>-</span>
                        <div className="subtitle-img">
                          <Image
                            fill
                            src="/paint-brush.png"
                            alt="brush"
                          />
                        </div>
                        <p>
                          {" "}
                          **[Навык 3]** или знание, которое получат участники
                        </p>
                      </li>
                    </ul>
                    <p className="speaker-description">Наш опытный инструктор <span>{el.fullName2}</span> поделится с вами своими профессиональными секретами и поможет раскрыть ваш творческий потенциал. Мастер-класс подходит как для новичков, так и для тех, кто уже имеет базовые знания в **[Тема мастер-класса]**.</p>
                    <p className="awards-title">
                    Что вас ждет:
                    </p>
                    <ul className="awards-infos">
                      <li>
                      <span>-</span>
                        <div className="awards-img">
                          <Image fill src={"/books.png"} alt="bool" />
                        </div>
                        <p> Интерактивные лекции и практические занятия</p>
                      </li>
                      <li>
                      <span>-</span>
                        <div className="awards-img">
                          <Image fill src={"/target.png"} alt="bool" />
                        </div>
                        <p> Индивидуальный подход и персональные рекомендации</p>
                      </li>
                      <li>
                      <span>-</span>
                        <div className="awards-img">
                          <Image fill src={"/message.png"} alt="bool" />
                        </div>
                        <p> Обсуждение работ участников и разбор ошибок</p>
                      </li>
                      <li>
                      <span>-</span>
                        <div className="awards-img">
                          <Image fill src={"/medal.png"} alt="bool" />
                        </div>
                        <p> Сертификат о прохождении мастер-класса</p>
                      </li>
                    </ul>
                    <p className="sign-title">
                    Как записаться:
                    </p>
                    <div className="sign-desc">
                      <div className="sign-img">
                        <Image fill src={"/memo.png"} alt="memo" />
                      </div>
                      <p>Количество мест ограничено, поэтому поспешите записаться! Для регистрации заполните форму на нашем сайте или позвоните по телефону +998 90 000-00-00.</p>
                    </div>
                    <p className="attend-title">О стоимости участия:</p>
                    <ul className="attend-desc">
                      <li>
                        <div className="attend-img">
                          <Image fill src={"/money.png"} alt="money" />
                        </div>
                        <p>Раннее бронирование до 20-Имюля: [50 000]  </p>
                      </li>
                      <li>
                        <div className="attend-img">
                          <Image fill src={"/money.png"} alt="money" />
                        </div>
                        <p>Стандартная цена: [70 000]</p>
                      </li>
                    </ul>
                    <div className="star-final">
                      <div className="star-img">
                        <Image fill src={"/star.png"} alt="star" />
                      </div>
                      <p> Присоединяйтесь к нам и откройте для себя новые горизонты!</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="about-content-right">
            <h3>Мест ограничено, успейте записаться</h3>
            <a href="/">Записаться на мастер-класс</a>
            <div className="right-datas">
              <div className="data-place">
                <span>Месть:</span>
                <p>46/90</p>
              </div>
              <div className="data-place">
                <span>Цена:</span>
                <p>50 000uzs</p>
              </div>
              <div className="data-place">
                <span>Адресс:</span>
                <p>улица Сакичмон, 1, Ташкент</p>
              </div>
              <div className="data-place">
                <span>Дата:</span>
                <p>28-Декабр | 16:40</p>
              </div>
            </div>
            <div className="right-bottom-data">
              <div className="bottom-data-info">
                <h1>Регистрация</h1>
                <p>
                  Для участия в мастер-классе необходимо предварительно
                  зарегистрироваться. Запись производится через наш сайт или по
                  телефону.
                </p>
              </div>
              <div className="bottom-data-info">
                <h1>Оплата</h1>
                <p>
                  Место считается забронированным только после полной
                  предоплаты. Оплатить можно онлайн или в нашем офисе.
                </p>
              </div>
              <div className="bottom-data-info">
                <h1>Отмена и возврат</h1>
                <p>
                  Для участия в мастер-классе необходимо предварительно
                  зарегистрироваться. Запись производится через наш сайт или по
                  телефону.
                </p>
                <p className="p-2">
                  Если мастер-класс отменяется по нашей инициативе, вам будет
                  предложено перенести участие на дру гую дату или получить
                  полный возврат средств.
                </p>
              </div>
              <div className="bottom-data-info">
                <h1>Возрастные ограничения</h1>
                <p>
                  Место считается забронированным только после полной
                  предоплаты. Оплатить можно онлайн или в нашем офисе.
                </p>
              </div>
              <div className="bottom-data-info">
                <h1>Количество мест</h1>
                <p>
                  Количество мест ограничено. Запись производится в порядке
                  поступления заявок.
                </p>
              </div>
              <div className="bottom-data-contact">
                <span>Есть вопросы звоните:</span>
                <p>+998 90 000-00-00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
