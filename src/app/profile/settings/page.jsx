"use client"

import "./style.scss"
import Recommendation from "@/components/recommendation";
import StatisticContent from "@/components/statistic-content";
import {useState} from "react";

const SettingsPage = () => {
    const [photo, setPhoto] = useState("/profile-speaker.png");

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return(
        <div className={"settings"}>
            <div className={"settings-content"}>
                <div className={"settings-main-content"}>
                    <StatisticContent/>
                    <p className={"settings-tab"}>
                        Настройки
                    </p>
                    <form className={"settings-infos"}>
                        <div className={"settings-photo"}>
                            <div className="photo-container">
                                {photo ? (
                                    <img src={photo} alt="Спикер" className="photo"/>
                                ) : (
                                    <div className="placeholder">upload photo</div>
                                )}
                            </div>

                            {/* Custom File Input */}
                            <div className={"photo-infos"}>
                                <h3>Abbos Janizakov</h3>
                                <p>г.Ташкент</p>
                                <label className="custom-file-upload">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="file-input"
                                    />
                                    <div className={"edit-photo"}>
                                        <img src="/edit-photo.svg" alt="edit-photo"/>
                                        изминить фото
                                    </div>
                                </label>
                            </div>
                            <button className={"edit-full"}>Изменить</button>
                        </div>
                        <div className={"setting-input-group"}>
                            <input placeholder={"FullName"} value={"Abbos Janizakov"} type="text"/>
                            <input placeholder={"Email"} value={"abbosjanizakov@gmail.com"} type="email"/>
                            <input placeholder={"Telegram"} type="text"/>
                            <input placeholder={"PhoneNumber"} value={"+99 899 000-00-00"} type="phone"/>
                            <input placeholder={"Profession"} value={"Работадатель"} type="text"/>
                            <input placeholder={"Должность"} type="text"/>
                        </div>
                        <input className={"address-input"} placeholder={"Address"} value={"г.Ташкент, М.Улугбексский район, 131А Дом"} type="text"/>
                        <h4>Данные для входа в аккаунт</h4>
                        <div className={"setting-account"}>
                            <div className={"account-input-group"}>
                                <input value={"abbosjanizakov@gmail.com"} type="email"/>
                                <input type="password" value={"asilbek02"}/>
                            </div>
                            <div className={"change-buttons"}>
                                <button>Изменить пароль</button>
                                <button>Удалить аккаунт</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Recommendation/>
            </div>
        </div>
    )
}

export default SettingsPage;