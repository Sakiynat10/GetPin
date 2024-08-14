"use client"
import {useState} from "react";

import "./style.scss"
import {useRouter} from "next/navigation";

const RegisterPage = () => {
        const [isChecked, setIsChecked] = useState(true);
        const router = useRouter();
        const [login , setLogin] = useState(true)
        const handleChangeType1 = () => {
            setIsChecked(true)
        }

        const handleChangeType2 = () => {
            setIsChecked(false)
        }

        const handleLogin = () => {
             setLogin(false);
        }

    return(
        <div className={login ? "register-content" : "register-content hide-register"}>
            <form className={"register-group"}>
                <h3>Регистрация</h3>
                <div className={"register-check-content"}>
                    <h4>Укажите тип лица</h4>
                    <div className={"register-check-type"}>
                        <div onClick={handleChangeType1}
                             className={isChecked ? "type-left active" : "type-left"}>
                            <img src="/check-1.svg" alt="check-1" />
                            Юридический
                        </div>
                        <div onClick={handleChangeType2}
                             className={isChecked ? "type-right" : "type-right active"}>
                            <img src="/check-2.svg" alt="check-2"/>
                            Физический
                        </div>
                    </div>
                </div>
                <label htmlFor="nameCompany">
                    <span>Названия компания</span>
                    <input id={"nameCompany"} type="text" placeholder={"LLC Getter"}/>
                </label>
                <label htmlFor="email">
                    <span>E-mail для подтвреждения аккаунта</span>
                    <input id={"email"} type="email" placeholder={"e-mail"}/>
                </label>
                <button onClick={handleLogin} className={"confirm"}>Далее</button>
                <button className={"google-confirm"}>
                    <img src="/google.svg" alt="img"/>
                    Google</button>
                <div className={"enter"}>
                    <button>У вас нет аккаунта?</button>
                    <button className={"enter-btn-2"}>Войти</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;