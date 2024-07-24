"use client"

import Image from "next/image";
import trainCard from "@/data";
import "./style.scss"
import VideoPlayer from './../video-player/index';



const TrainCard = () => {

  return (
    <>
    <div className="train-cards">
        {trainCard.map((el , i) => 
        <div key={i} className="train-card">
            <div className="train-date-contents">
            <div className="train-date">
                <p>{el.train_day}</p>
                <span className="line">|</span>
                <p>{el.train_time}</p>
            </div>
            <a href="/">{el.design}</a>
            </div>
            <div className="train-titles">
                <h1 className="top">
                    {el.train_title_top}
                </h1>
                <h1>
                    {el.train_title_bottom}
                </h1>
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
            <div  className="train-video">
                {/* <video id="myVideo" className="video">
                    <source src="/sport.mp4" type="video/mp4" />
                </video> */}
                <VideoPlayer className="video-player" src="/sport.mp4" />
            </div>
      </div>)}
    </div>
    <button className="add-train-btn container-1040">
    Загрузить еще
    </button>
    </>
  );
};

export default TrainCard;
