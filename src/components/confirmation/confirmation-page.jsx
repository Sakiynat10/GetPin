import "./style.scss";
import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const ConfirmationPage = () => {
    const [isVisible, setIsVisible] = useState(true);

    const closeModal = () => {
        setIsVisible(false);
    };

    const ref = useDetectClickOutside({ onTriggered: closeModal });

    return (
        isVisible && (
            <div  className="confirm-content">
                <form ref={ref} className="confirm-group">
                    <h3>Подтверждения</h3>
                    <p>
                        Мы отправили смс-код для подтверждения на e-mail{" "}
                        <span>abbosjanizakov@gmail.com</span>
                    </p>
                    <label htmlFor="confirm">
                        <span>Смс код</span>
                        <div className="input-groups">
                            <input value={"1"} id={"confirm"} type="text" />
                            <input value={"1"} id={"confirm"} type="text" />
                            <input value={"1"} id={"confirm"} type="text" />
                            <input value={"1"} id={"confirm"} type="text" />
                        </div>
                    </label>
                    <button className="send-password">Отправить повторна</button>
                    <button className="confirm">Далее</button>
                    <div className="enter">
                        <button>У вас нет аккаунта?</button>
                        <button className="enter-btn-2">Войти</button>
                    </div>
                </form>
            </div>
        )
    );
};

export default ConfirmationPage;
