"use client"

import "./style.scss";

import { Fragment } from "react";
import Image from "next/image";
import CheckBox from "@/components/checkbox";
import TrainCategory from "@/components/train-category";
import TrainCard from './../../components/train-card/index';
import SearchInput from "@/components/search-input";
import Articles from './../../components/article-section/index';
import { DatePicker, TimePicker } from "antd";




export const categoryInfos = [
  {
    img: "/location.svg",
    countries:[
      {
        count0:"Регион"
      },
      {
        count1:"Tashkent"
      },
      {
        count1:"Namangan"
      },
      {
        count1:"Andijon"
      },
      {
        count1:"Fargona"
      },
      {
        count1:"Sirdaryo"
      },
      {
        count1:"Jizzax"
      },
      {
        count1:"Samarqand"
      },
      {
        count1:"Qashqadaryo"
      },
      {
        count1:"Surxondaryo"
      },
      {
        count1:"Buxoro"
      },
      {
        count1:"Navoiy"
      },
      {
        count1:"Qoraqalpagiston"
      }
    ]
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
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Fragment>
      <section id="hero">
        <SearchInput/>
        <div className="container-1040">
          <TrainCategory/>
          <div className="adv-content">
            <Image fill src={"/advertisment.png"} alt="adv" />
          </div>
        </div>
      </section>
      <section id="category">
        <div className="container-1040">
          <ul className="category-infos">
              <li>
                <label for="language" >
                  <img src={"/location.svg"} alt="location" />
                  <select className="select" name="language" id="language">
                    <option value="javascript">Tashkent</option>
                    <option value="python">Fargona</option>
                    <option value="c++">Andijon</option>
                    <option value="java">Sirdaryo</option>
                    <option value="javascript">Jizzax</option>
                    <option value="python">Samarqand</option>
                    <option value="c++">Qashqadaryo</option>
                    <option value="java">Surxandaryo</option>
                    <option value="javascript">Buxoro</option>
                    <option value="python">Navoiy</option>
                    <option value="c++">Qoraqalpogiston</option>
                  </select>
                </label>
              </li>
              <li>
              <DatePicker placeholder="Дата" />
              </li>
              <li className="time-picker">
              <TimePicker placeholder="Время" />
              </li>
            <CheckBox />
          </ul>
          <TrainCard />
        </div>
      </section>
      <Articles/>
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
              <div className="speaker-img">
                <Image fill src={"/speaker-8.png"} alt="speaker-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
