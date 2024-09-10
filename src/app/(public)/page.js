import {Fragment} from "react";
import Image from "next/image";
import CheckBox from "@/components/checkbox";
import TrainCategory from "@/components/train-category";
import TrainCard from '../../components/train-card/index';
import SearchInput from "@/components/search-input";
import Articles from '../../components/article-section/index';
import {cities} from "@/data";
import LocationDropdown from "@/components/location-dropdown";
import DirectionDropdown from "@/components/directions-dropdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.scss";
import AdvContent from "@/components/adv-content";
import Datapicker from "@/components/datapicker";
import TimePickers from "@/components/time-picker";
import SpeakerSection from "@/components/speaker-section";
import Footer from "@/components/footer";





export default function Home() {

  console.log(cities)
  return (
    <Fragment>
      <section id="hero">
        <SearchInput/>
        <div className="train-categories">
          <TrainCategory/>
          <AdvContent/>
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
                  <Datapicker/>
                </li>
                <li className="time-picker">
                  <TimePickers/>
                </li>
              </ul>
              <CheckBox/>
            </div>
          </div>
          <div className={"container-1040"}>
            <TrainCard/>
            <button className="add-train-btn container-1040">Загрузить еще</button>
          </div>
        </div>
      </section>
      <Articles/>
      <SpeakerSection/>
    </Fragment>
  );
}
