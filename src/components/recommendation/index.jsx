import "./style.scss"

const Recommendation = () => {
    return (
        <div className={"recommendation"}>
            <h1>Мы рекомендуем</h1>
            <p className={"desc-1"}>Для участия в мастер-классе необходимо предварительно зарегистрироваться. </p>
            <p className={"desc-2"}>Запись производится через наш сайт или по телефону.</p>
            <a href="/">Узнать по больше
                <img src="/chevron-right.svg" alt="right"/>
            </a>
        </div>
    )
}

export default Recommendation;