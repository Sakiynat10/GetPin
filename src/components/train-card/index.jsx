"use client";

import Image from "next/image";
import "./style.scss";
import VideoPlayer from "./../video-player/index";
import { trainCard } from "@/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TrainCard = () => {
    const [autoPlay , setAutoPlay] = useState(false);
    const router = useRouter();
  return (
    <>
      <div
        className="train-cards"
      >
        {trainCard.map((el) => (
          <button 
          key={el.id}
          autoPlay={autoPlay}
          onMouseEnter={() => setAutoPlay(true)}
          onMouseLeave={() => setAutoPlay(false)} 
           onClick={() => router.push(`about/${el.id}`)}  className="train-card">
              <div className="train-date-contents">
                <div className="train-date">
                  <p>{el.train_day}</p>
                  <span className="line">|</span>
                  <p>{el.train_time}</p>
                </div>
                <p className="design-title">{el.design}</p>
              </div>
              <div className="train-titles">
                <h1 className="top">{el.train_title_top}</h1>
                <h1 className="bottom">{el.train_title_bottom}</h1>
              </div>
              <div className="trainers">
                <div className="trainer-img">
                  <Image fill src={el.trainer_img1} alt="card-img-1" />
                </div>
                <div className="trainer-img img-2">
                  <Image fill src={el.trainer_img2} alt="card-img-2" />
                </div>
              </div>
              <div className="training-infos">
                <div className="train-places">
                  <span>Месть:</span>
                  <p>{el.train_place_number}</p>
                </div>
                <div className="train-price">
                  <span>Цена:</span>
                  <p>{el.train_price}</p>
                </div>
                <div className="train-location">
                  <span>Адресс:</span>
                  <a href="">{el.train_address}</a>
                </div>
              </div>
              <div className="train-subtitle">
                <span>Дата публикации:</span> {el.train_subtitle}
              </div>
              <div className="train-video"
              >
                 {/* <VideoPlayer  src={el.video} autoPlay={autoPlay} className="video-player" /> */}
              </div>
          </button>
        ))}
      </div>
      <button className="add-train-btn container-1040">Загрузить еще</button>
    </>
  );
};

export default TrainCard;
