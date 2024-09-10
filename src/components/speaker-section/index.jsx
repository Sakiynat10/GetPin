"use client"
import Image from "next/image";


import {useEffect, useState} from "react";
import SkeletonLoading from "@/components/skeleton-main-page-loading";

const SpeakerSection = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <section id="speaker">
            <div className="container-1040">
                <div className="speaker-content">
                    <div className="content-left">
                        {loading ? <SkeletonLoading w={"100%"} h={"90px"} mb={"50px"} /> : <h1>Спикеры на ближайшие даты</h1>
                        }
                        {loading ? <SkeletonLoading w={"100%"} h={"40px"} mb={"50px"} /> :
                            <p>Ищете вдохновение и новые знания? Ознакомьтесь с нашими спикерами и направлениями
                                ближайших
                                мероприятий. </p>}
                        {loading ? <SkeletonLoading w={"100%"} h={"90px"} mb={"50px"} /> :
                            <p>Выберите понравившегося спикера, запишитесь и получите ценные инсайты от экспертов. Не
                                упустите шанс развиваться и расти вместе с нами!</p>}
                        {loading ? <SkeletonLoading w={"70%"} h={"50px"} b={"500px"} /> : <button>Все спикеров на ближайшие даты</button>
                        }
                    </div>
                    <div className="content-right">
                    {loading ? <SkeletonLoading w={"180px"} h={"180px"} b={"500px"} /> : <div className="speaker-img">
                            <Image fill src={"/speaker-1.png"} alt="speaker-1"/>
                        </div>}
                        {loading ? <SkeletonLoading w={"180px"} h={"180px"} b={"500px"} /> : <div className="speaker-img">
                            <Image fill src={"/speaker-2.png"} alt="speaker-1"/>
                        </div>}
                        {loading ? <SkeletonLoading w={"180px"} h={"180px"} b={"500px"} /> : <div className="speaker-img">
                            <Image fill src={"/speaker-3.png"} alt="speaker-1"/>
                        </div>}
                        {loading ? <SkeletonLoading w={"180px"} h={"180px"} b={"500px"} /> : <div className="speaker-img">
                            <Image fill src={"/speaker-4.png"} alt="speaker-1"/>
                        </div>}
                        {loading ? <SkeletonLoading w={"180px"} h={"180px"} b={"500px"} /> : <div className="speaker-img">
                            <Image fill src={"/speaker-5.png"} alt="speaker-1"/>
                        </div>}
                        {loading ? <SkeletonLoading w={"180px"} h={"180px"} b={"500px"} /> : <div className="speaker-img">
                            <Image fill src={"/speaker-6.png"} alt="speaker-1"/>
                        </div>}
                        {loading ? <SkeletonLoading w={"180px"} h={"180px"} b={"500px"} /> : <div className="speaker-img">
                            <Image fill src={"/speaker-7.png"} alt="speaker-1"/>
                        </div>}
                        {loading ? <SkeletonLoading w={"180px"} h={"180px"} b={"500px"} /> : <div className="speaker-img">
                            <Image fill src={"/speaker-8.png"} alt="speaker-1"/>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpeakerSection;