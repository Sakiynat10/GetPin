"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import { trainCard } from "@/data";
import Image from "next/image";
import VideoPlayer from './../video-player/index';

import "./style.scss"

export default function CarouselSection() {
    const [autoPlay, setAutoPlay] = useState(false);
    const router = useRouter();

    return (
        <section id="carousel-card">
            <div className="container-1040 carousel-title">
                <h1>Похожие объявлении</h1>
            </div>
            <Swiper
                spaceBetween={40}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    1300: {
                        slidesPerView: 3, // Show 3 slides for screen width >= 1300px
                    },
                    0: {
                        slidesPerView: 2, // Show 2 slides for screen width < 1300px
                    }
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {trainCard.map((el) => (
                    <SwiperSlide key={el.id}>
                        <button
                            autoPlay={autoPlay}
                            onMouseEnter={() => setAutoPlay(true)}
                            onMouseLeave={() => setAutoPlay(false)}
                            onClick={() => router.push(`/${el.id}`)}
                            className="train-card"
                        >
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
                            <div className="train-video">
                                {autoPlay ? (
                                    <VideoPlayer
                                        src={el.video}
                                        autoPlay={autoPlay}
                                        className="video-player"
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
