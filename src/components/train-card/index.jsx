"use client";

import Image from "next/image";
import "./style.scss";
import VideoPlayer from "./../video-player/index";
import { trainCard } from "@/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import VideoPlayerRes from "@/components/video-player-res";

const TrainCard = ({statistic}) => {
    const [autoPlay , setAutoPlay] = useState(false);
    const router = useRouter();
  return (
    <>
      <div
        className="train-cards"
      >
              {trainCard.map((el , i) => (
                  <div key={i} style={{position:"relative"}} className={"card-outline"}>
                      <button
                          key={el.id}
                          autoPlay={autoPlay}
                          onMouseEnter={() => setAutoPlay(true)}
                          onMouseLeave={() => setAutoPlay(false)}
                          onClick={() => router.push(`/${el.id}`)} className="train-card">
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
                              <h1 className="bottom">{el.service}</h1>
                          </div>
                          <div className="trainers">
                              <div className="trainer-img">
                                  <Image fill src={el.trainer_img1} alt="card-img-1"/>
                              </div>
                              <div className="trainer-img img-2">
                                  <Image fill src={el.trainer_img2} alt="card-img-2"/>
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
                          <div className="train-video-res"
                          >
                                  <VideoPlayerRes src={el.video} autoPlay={autoPlay} className="video-player-res"/> 
                          </div>
                          <div className="train-video"
                          >
                              {autoPlay ?
                                  <VideoPlayer src={el.video} autoPlay={autoPlay} className="video-player"/> : ""}
                              {/* <VideoPlayer  src={el.video} autoPlay={autoPlay} className="video-player" /> */}
                          </div>
                      </button>
                      {statistic ?
                          <div className={"card-st"}>
                              <h1>Статистика</h1>
                              <ul className={"train-card-statistics"}>
                                  <li>
                                      <span>Прямые записи:</span>
                                      <h3>34</h3>
                                  </li>
                                  <li>
                                      <span>Клики:</span>
                                      <h3>283</h3>
                                  </li>
                                  <li>
                                      <span>Просмотры</span>
                                      <h3>823</h3>
                                  </li>
                                  <li>
                                      <span>Поделились:</span>
                                      <h3>230</h3>
                                  </li>
                              </ul>

                          </div> : ""
                      }
                      {statistic ? <div className={"train-card-records"}>
                          <div className={"train-recorders"}>
                              <p>Записи:</p>
                              <div className={"recorders-img"}>
                                  <img src="/speaker-1.png" alt="spekaer-1"/>
                                  <img src="/speaker-2.png" alt="spekaer-1"/>
                                  <img src="/speaker-3.png" alt="spekaer-1"/>
                                  <img src="/speaker-4.png" alt="spekaer-1"/>
                              </div>
                              <button>Еще +4</button>
                          </div>
                          <button className={"all-recorders"}>
                              Посмотреть все записи
                              <img src="/chevron-right.svg" alt="right"/>
                          </button>
                      </div> : ""}
                  </div>
              ))}
      </div>
    </>
  );
};

export default TrainCard;
