import "./style.scss"
import TrainCard from "@/components/train-card";

const PosterPage = () => {
    return(
        <div className={"poster"}>
            <div className={"poster-content"}>
                <div className={"statistic-content"}>
                    <div className={"statistic-number"}>
                        <h1>94</h1>
                        <p>Прямые записи</p>
                    </div>
                    <div className={"statistic-number"}>
                        <h1>738</h1>
                        <p>Клики</p>
                    </div>
                    <div className={"statistic-number"}>
                        <h1>443</h1>
                        <p>Поделились</p>
                    </div>
                    <div className={"statistic-number"}>
                        <h1>1 238</h1>
                        <p>Общие просмотры</p>
                    </div>
                </div>
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
                        <TrainCard/>
                    </div>
                </div>
            </div>
            <div className={"poster-recommendation"}>
                <h1>Мы рекомендуем</h1>
                <p className={"rec-desc-1"}>Для участия в мастер-классе необходимо предварительно зарегистрироваться.  </p>
                <p className={"rec-desc-2"}>Запись производится через наш сайт или по телефону.</p>
                <a href="/">Узнать по больше
                    <img src="/chevron-right.svg" alt="right"/>    
                </a>
            </div>
        </div>
    )
}

export default PosterPage;