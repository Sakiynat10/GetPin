"use client"

import "./style.scss"
import TrainCard from "@/components/train-card";
import Recommendation from "@/components/recommendation";
import StatisticContent from "@/components/statistic-content";

const PosterPage = () => {
    return(
        <div className={"poster"}>
            <div className={"poster-content"}>
                <StatisticContent/>
                <div className={"main-content"}>
                    <ul className={"main-content-tab"}>
                        <li>
                            Все
                        </li>
                        <li>
                            Актуалные
                        </li>
                        <li>
                            Отклоненные
                        </li>
                        <li>
                            Черновые
                        </li>
                    </ul>
                    <div className={"main-content-context"}>
                        <TrainCard statistic="statistic" />
                    </div>
                </div>
            </div>
            <Recommendation/>
        </div>
    )
}

export default PosterPage;