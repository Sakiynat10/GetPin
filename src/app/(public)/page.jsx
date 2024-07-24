import NavLink from "@/components/navlink";
import "./style.scss";

import { Fragment } from "react";
import Image from "next/image";
import CheckBox from "@/components/checkbox";
import TrainCard from "@/components/train-card";
import TrainBtn from "@/components/train-btn";

export const categoryData = [
  {
    p: "Мастер класс",
  },
  {
    p: "Тренинги",
  },
  {
    p: "Интеллектуальные шоу",
  },
  {
    p: "Вечера",
  },
  {
    p: "Конкурсы",
  },
  {
    p: "Марафоны",
  },
  {
    p: "Маркетинг",
  },
  {
    p: "Образование",
  },
  {
    p: "ИТ",
  },
  {
    p: "Культура",
  },
  {
    p: "Бизнес",
  },
];

export const categoryInfos = [
  {
    img: "/location.svg",
    title: "Регион",
  },
  {
    img: "/data.svg",
    title: "Дата",
  },
  {
    img: "/clock.svg",
    title: "Время",
  },
];

export default function Home() {
  return (
    <Fragment>
      <section id="hero">
        <div className="container-1040">
          <ul className="category-training">
            {categoryData?.map((el, i) => (
              <li key={i}>
                <NavLink href="">{el.p}</NavLink>
              </li>
            ))}
          </ul>
          <div className="adv-content">
            <Image fill src={"/advertisment.png"} alt="adv" />
          </div>
        </div>
      </section>
      <section id="category">
        <div className="container-1040">
          <ul className="category-infos">
            {categoryInfos.map((el, i) => (
              <li key={i}>
                <a href="">
                  <img src={el.img} alt={el.title} />
                  <span>{el.title}</span>
                </a>
              </li>
            ))}
            <CheckBox />
          </ul>
          <TrainCard />
        </div>
      </section>
      <section id="article">
        <div className="container-1040">
          <h1>Статьи для саморазвития</h1>
          <div className="article-contents">
            <div className="content-left">
              <div className="article-card">
                <p className="card-data">26 Июня 2024</p>
                <p className="card-title">
                  Путеводитель по Саморазвитию: Как Стать Лучшей Версией Себя
                </p>
                <button>читать далее</button>
              </div>
              <div className="article-card">
                <p className="card-data">26 Июня 2024</p>
                <p className="card-title">10 Эффективных Способов Улучшить Себя Ежедневно</p>
                <button>читать далее</button>
              </div>
              <div className="article-card">
                <p className="card-data">26 Июня 2024</p>
                <p className="card-title">Как Развить Личные Навыки и Увеличить Продуктивность</p>
                <button>читать далее</button>
              </div>
              <div className="article-card">
                <p className="card-data">26 Июня 2024</p>
                <p className="card-title">Мастерство Саморазвития: Советы и Техники для Личного Роста</p>
                <button>читать далее</button>
              </div>
            </div>
            <div className="content-right">
              <div className="article-card">
                <p className="card-data">26 Июня 2024</p>
                <p className="card-title">Саморазвитие: Пошаговый План для Достижения Личных и Профессиональных Целей</p>
                <span className="card-desc-1">В этой статье мы рассмотрим практические шаги, которые помогут вам достичь как личных, так и профессиональных целей. Узнайте, как определить свои приоритеты, разработать план действий и создать систему для постоянного самосовершенствования. </span>
                <span className="card-desc-2">Мы расскажем о методах тайм-менеджмента, постановке целей по SMART и о том, как сохранять мотивацию на протяжении всего пути</span>
                <button>читать далее</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="speaker">
        <div className="container-1040">
          <div className="speaker-content">
            <div className="content-left">
              <h1>Спикеры на ближайшие даты</h1>
              <p>Ищете вдохновение и новые знания? Ознакомьтесь с нашими спикерами и направлениями ближайших мероприятий. </p>
              <p>Выберите понравившегося спикера, запишитесь и получите ценные инсайты от экспертов. Не упустите шанс развиваться и расти вместе с нами!</p>
              <button>Все спикеров на ближайшие даты</button>
            </div>
            <div className="content-right">
              <div className="speaker-img">
                <Image fill src={"/speaker-1.png"} alt="speaker-1" />
              </div>
              <div className="speaker-img">
                <Image fill src={"/speaker-2.png"} alt="speaker-1" />
              </div>
              <div className="speaker-img">
                <Image fill src={"/speaker-3.png"} alt="speaker-1" />
              </div>
              <div className="speaker-img">
                <Image fill src={"/speaker-4.png"} alt="speaker-1" />
              </div>
              <div className="speaker-img">
                <Image fill src={"/speaker-5.png"} alt="speaker-1" />
              </div>
              <div className="speaker-img">
                <Image fill src={"/speaker-6.png"} alt="speaker-1" />
              </div>
              <div className="speaker-img">
                <Image fill src={"/speaker-7.png"} alt="speaker-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
