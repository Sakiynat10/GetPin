"use client";

import Image from "next/image";
import "./style.scss";
import VideoPlayer from "./../video-player/index";
import { trainCard } from "@/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchTrainCard = ({searchValue}) => {
    const [autoPlay , setAutoPlay] = useState(false);
    const router = useRouter();
    console.log(searchValue)
    const result = trainCard.filter((el) => el.service === searchValue)
    console.log(result)
  return (
    <>
      <div
        className="search-train-cards"
      >
        {result.map((el) => (
          <button 
          key={el.id}
          autoPlay={autoPlay}
          onMouseEnter={() => setAutoPlay(true)}
          onMouseLeave={() => setAutoPlay(false)} 
           onClick={() => router.push(`/${el.id}`)}  className="train-card">
              <div className="train-date-contents">
                  <div className="trainers">
                      <div className="trainer-img">
                          <Image fill src={el.trainer_img1} alt="card-img-1"/>
                      </div>
                      <div className="trainer-img img-2">
                          <Image fill src={el.trainer_img2} alt="card-img-2"/>
                      </div>
                  </div>
              </div>
              <div className="train-titles">
                  <h1 className="top">{el.train_title_top} {el.service}</h1>
              </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default SearchTrainCard;
