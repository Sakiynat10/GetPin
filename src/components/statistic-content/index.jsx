import "./style.scss";

const StatisticContent = () => {
    return (
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
    )
}

export default StatisticContent;