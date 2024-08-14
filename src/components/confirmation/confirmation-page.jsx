import "./style.scss"

const ConfirmationPage = () => {
    return(
        <div className={"confirm-content hide-confirm"}>
            <form className={"confirm-group"}>
                <h3>Подтверждения</h3>
                <p>Мы отправили смс-код для подтверждения на
                    e-mail <span>abbosjanizakov@gmail.com</span></p>
                <label htmlFor="confirm">
                    <span>Смс код</span>
                    <div className={"input-groups"}>
                        <input value={"1"} id={"confirm"} type="text" />
                        <input value={"1"} id={"confirm"} type="text" />
                        <input value={"1"} id={"confirm"} type="text" />
                        <input value={"1"} id={"confirm"} type="text" />
                    </div>
                </label>
                <button className={"send-password"}>Отправить повторна</button>
                <button className={"confirm"}>Далее</button>
                <div className={"enter"}>
                    <button>У вас нет аккаунта?</button>
                    <button className={"enter-btn-2"}>Войти</button>
                </div>
            </form>
        </div>
    )
}

export default ConfirmationPage;