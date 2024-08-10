import Recommendation from "@/components/recommendation";
import StatisticContent from "@/components/statistic-content";
import "./style.scss"

const ArchivePage = () => {
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
                    <div className={"archive-card"}>
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
                            <img src="/three-dots.svg" alt="edit"/>
                        </div>
                    </div>
                    <div className={"archive-card"}>
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
                            <img src="/three-dots.svg" alt="edit"/>
                        </div>
                    </div>
                    <div className={"archive-card"}>
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
                            <img src="/three-dots.svg" alt="edit"/>
                        </div>
                    </div>
                    <div className={"archive-card"}>
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
                            <img src="/three-dots.svg" alt="edit"/>
                        </div>
                    </div>
                    <div className={"archive-card"}>
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
                            <img src="/three-dots.svg" alt="edit"/>
                        </div>
                    </div>
                    <div className={"archive-card"}>
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
                            <img src="/three-dots.svg" alt="edit"/>
                        </div>
                    </div>
                </div>
            </div>
            <Recommendation/>
        </div>
    )
}

export default ArchivePage;