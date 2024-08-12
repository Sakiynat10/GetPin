"use client"

import Recommendation from "@/components/recommendation";
import StatisticContent from "@/components/statistic-content";
import "./style.scss"
import {useEffect, useRef, useState} from "react";

const ArchivePage = () => {
    const buttonRefs = useRef([]);
    const [mode , setMode] = useState(null);
    const handleMode = (prop) => {
        setMode(prop)
    }


    const handleClickOutside = (event) => {
        if (!buttonRefs.current.some(ref => ref && ref.contains(event.target))) {
            setMode(null); // Deactivate all buttons
        }
    };

    const hideMode = () => {
        setMode(null)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    
    return(
        <div className={"archive"}>
            <div className={"archive-main"}>
                <StatisticContent/>
                <div className={"archive-tabs"}>
                    <ul>
                        <li>
                            <button>
                                <img src="/left-archive.svg" alt="right"/>
                                Непринятые
                            </button>
                        </li>
                        <li>То что вам удобна это —<span>ux-дизайн</span></li>
                    </ul>
                    <h3>46/90</h3>
                </div>
                <div className={"archive-cards"}>
                    {[...Array(10)].map((_, i) => (
                            <div key={i} className={"archive-card"}>
                                <div className={"archive-left"}>
                                    <div className={"archive-images"}>
                                        <img style={{width: "48px", height: "48px"}} src="/speaker-6.png" alt="speaker-6"/>
                                        <div className={"archive-names"}>
                                            <h2>Zebo Alimova</h2>
                                            <p>г.Ташкент</p>
                                        </div>
                                    </div>
                                    <div className={"archive-names"}>
                                        <h2>+90 000-00-00</h2>
                                        <p>@Getter_Ceo</p>
                                    </div>
                                    <h3>Оплачено</h3>
                                </div>
                                <div className={"archive-right"}>
                                    <button>Подтверить</button>
                                    <button className={"dots"} onClick={() => handleMode(i)}>
                                        <img src="/three-dots.svg" alt="edit"/>
                                    </button>
                                </div>
                                <div  ref={el => (buttonRefs.current[i] = el)} className={mode === i ? "active-mode" : "hide-mode"}>
                                    <button onClick={hideMode}>Отменить</button>
                                    <button onClick={hideMode}>Инфо</button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
            <Recommendation/>
        </div>
    )
}

export default ArchivePage;