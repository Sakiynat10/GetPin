import "./style.scss"

const LoginPage = () => {
    return(
        <div className={"login-content hide-login"}>
            <form className={"login-group"}>
                <h3>Вход</h3>
                <label htmlFor="login">
                    <span>Логин</span>
                    <input id={"login"} type="mail" placeholder={"e-mail"}/>
                </label>
                <label htmlFor="password">
                    <span>E-mail для подтвреждения аккаунта</span>
                    <input id={"password"} type="password" placeholder={"******"}/>
                </label>
                <button className={"forget-password"}>Забыли пароль?</button>
                <button  className={"confirm"}>Далее</button>
                <div className={"enter"}>
                    <button>У вас нет аккаунта?</button>
                    <button className={"enter-btn-2"}>Войти</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;