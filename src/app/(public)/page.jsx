
import "./style.scss";

import {Fragment} from "react";
import Image from "next/image";
import CheckBox from "@/components/checkbox";
import TrainCategory from "@/components/train-category";
import TrainCard from './../../components/train-card/index';
import SearchInput from "@/components/search-input";
import Articles from './../../components/article-section/index';
import { DatePicker, TimePicker } from "antd";
import {cities} from "@/data";
import LocationDropdown from "@/components/location-dropdown";
import DirectionDropdown from "@/components/directions-dropdown";





export default function Home() {

  console.log(cities)
  return (
    <Fragment>
      <section id="hero">
        <SearchInput/>
        <div className="train-categories">
          <TrainCategory/>
          <div className="adv-content">
            <Image fill src={"/advertisment.png"} alt="adv"/>
          </div>
        </div>
      </section>
      <section id="category">
        <div className="categories">
          <div className={"datas"}>
            <div className={"data container-1040"}>
              <ul className="category-infos">
                <li className={"direction"}>
                  <DirectionDropdown/>
                </li>
                <li>
                  <LocationDropdown/>
                </li>
                <li>
                  <DatePicker placeholder="Дата"/>
                </li>
                <li className="time-picker">
                  <TimePicker placeholder="Время"/>
                </li>
                <CheckBox/>
              </ul>

            </div>
          </div>
          <div className={"container-1040"}>
            <TrainCard/>
            <button className="add-train-btn container-1040">Загрузить еще</button>
          </div>
        </div>
      </section>
      {/*<Articles/>*/}
      {/*<section id="speaker">*/}
      {/*  <div className="container-1040">*/}
      {/*    <div className="speaker-content">*/}
      {/*      <div className="content-left">*/}
      {/*        <h1>Спикеры на ближайшие даты</h1>*/}
      {/*        <p>Ищете вдохновение и новые знания? Ознакомьтесь с нашими спикерами и направлениями ближайших мероприятий. </p>*/}
      {/*        <p>Выберите понравившегося спикера, запишитесь и получите ценные инсайты от экспертов. Не упустите шанс развиваться и расти вместе с нами!</p>*/}
      {/*        <button>Все спикеров на ближайшие даты</button>*/}
      {/*      </div>*/}
      {/*      <div className="content-right">*/}
      {/*        <div className="speaker-img">*/}
      {/*          <Image fill src={"/speaker-1.png"} alt="speaker-1" />*/}
      {/*        </div>*/}
      {/*        <div className="speaker-img">*/}
      {/*          <Image fill src={"/speaker-2.png"} alt="speaker-1" />*/}
      {/*        </div>*/}
      {/*        <div className="speaker-img">*/}
      {/*          <Image fill src={"/speaker-3.png"} alt="speaker-1" />*/}
      {/*        </div>*/}
      {/*        <div className="speaker-img">*/}
      {/*          <Image fill src={"/speaker-4.png"} alt="speaker-1" />*/}
      {/*        </div>*/}
      {/*        <div className="speaker-img">*/}
      {/*          <Image fill src={"/speaker-5.png"} alt="speaker-1" />*/}
      {/*        </div>*/}
      {/*        <div className="speaker-img">*/}
      {/*          <Image fill src={"/speaker-6.png"} alt="speaker-1" />*/}
      {/*        </div>*/}
      {/*        <div className="speaker-img">*/}
      {/*          <Image fill src={"/speaker-7.png"} alt="speaker-1" />*/}
      {/*        </div>*/}
      {/*        <div className="speaker-img">*/}
      {/*          <Image fill src={"/speaker-8.png"} alt="speaker-1" />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </Fragment>
  );
}
