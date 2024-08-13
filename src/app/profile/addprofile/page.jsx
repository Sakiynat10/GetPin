"use client"
import MediaUpload from "@/components/upload-videos";
import React, {useState} from "react";

import "./style.scss"

const AddingProfilePage = () => {
    const [type, setType] = useState("text");
    const [type1, setType1] = useState("text");
    const [isChecked, setIsChecked] = useState(false);

    const [image, setImage] = useState(null);
    const [files, setFiles] = useState([{id:1}]);

    const [dataArray, setDataArray] = useState([]);

    const handleFileChange = (e, _id) => {
        const file = e.target.files[0];
        setFiles(files.map((el)=>{
                if(el.id === _id){
                    el.data = URL.createObjectURL(file);
                    return el;
                }
                return el;
            }
        ))
        setFiles([...files, {id:Date.now()}]);
    };
    console.log(files)

    const handleFocus = () => {
        setType("time");
    };

    const handleFocus1 = () => {
        setType1("date");
    };

    /*checkbox*/
    const handleChangeCheck = () => {
        setIsChecked(!isChecked);
        console.log(isChecked ? 'Switch is OFF' : 'Switch is ON');
    };

    return(
        <div className={"add-profile"}>
            <ul className={"bread-crumb-pro"}>
                <li>
                    <a href="/">Главная</a>
                </li>
                <li>
                    <a href="">Добавить объявления</a>
                </li>
            </ul>
            <div className={"adding-profile-content"}>
                <div className={"adding-main-content"}>
                    <h3>Заполняйте все формы</h3>
                    <div className="bottom-content">
                        <textarea aria-controls={false} className="issue-input" type="text" placeholder="Mavzu"/>
                        <div className="select-group">
                            <select name="" id="" className="select">
                                <option value="1">
                                    Kategoriya
                                </option>
                                <option value="1">Frontend</option>
                                <option value="2">Backend</option>
                                <option value="3">Designer</option>
                                <option value="4">Marketolog</option>
                                <option value="5">Economist</option>
                            </select>
                            <select name="" id="" placeholder="Yonalish">
                                <option value="1">{`Yo'nalish`}</option>
                                <option value="2">Backend</option>
                                <option value="3">Designer</option>
                                <option value="4">Marketolog</option>
                                <option value="5">Economist</option>
                            </select>
                        </div>
                        <MediaUpload/>
                        <div className="data-group">
                            <div className="address-input">
                                <input type="text" placeholder="Адресс"/>
                            </div>
                            <div className="place-input">
                                <input type="text" placeholder="Месть"/>
                            </div>
                            <div className="data-input">
                                <input type={type1} placeholder="Дата" onFocus={handleFocus1}/>
                            </div>
                            <div className="time-input">
                                <input
                                    type={type}
                                    placeholder="Во сколько"
                                    step="900"
                                    onFocus={handleFocus}
                                />
                            </div>
                        </div>
                        <div className="price-input">
                            <h3>Стоимость</h3>
                            <input type="number" placeholder="Narxi (uzs)"/>
                        </div>
                        <h3>Спикеры</h3>
                        <div className="account-group">
                            {files.map((el, i) =>
                                <>
                                <div key={i} className={"container-img"}>
                                    <div className="photo-card">
                                        <div className={"photoArea"}>
                                            {el.data ? (
                                                <img src={el?.data} alt="Speaker" className={"photo"}/>
                                            ) : (
                                                <span className={"placeholder"}>Фото спикера</span>
                                            )}
                                        </div>
                                    </div>
                                    <label className={"uploadButton"}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleFileChange(e, el.id)}
                                            className={"hiddenInput"}
                                            id="rasm"/>
                                        <label htmlFor="rasm" onChange={(e) => handleFileChange(e, el.id)}
                                               className={"buttonText"}>Добавить еще</label>
                                    </label>
                                </div>
                                    <div className={"add-account-profile"}>
                                        <input type="text" placeholder={"Имя спикера"}/>
                                        <input type="text" placeholder={"Фамилия"}/>
                                        <input type="text" placeholder={"Компания"}/>
                                        <input type="text" placeholder={"Должность"}/>
                                    </div>
                                </>
                            )}

                        </div>
                        <div className="context-groups">
                            <div className={"context-group"}>
                                <h1>Контекст</h1>
                                <textarea aria-placeholder={"none"} aria-controls={"none"}  placeholder={"Подробнее описание"}></textarea>
                            </div>
                        </div>
                            <form className={"admit"}>
                                <label htmlFor="admit">
                                    <input id={"admit"} type="checkbox"/>
                                    <p>Я подтверждаю, что ознакомился и согласен с <span>Условиями использования</span>  данного сервиса.</p>
                                </label>
                                <button>Отправить модерацию</button>
                            </form>
                    </div>
                </div>
                <div className={"adding-right-content"}>
                    <h2>Доп-опции</h2>
                    <div className={"add-registration"}>
                        <div className={"registration-check"}>
                            <label className={"switch"}>
                                <input type="checkbox"/>
                                <span className={"slider round"}></span>
                            </label>
                            <h4>Регистрация</h4>
                            <button>
                                <img src="/edit-add.svg" alt="edit-add"/>
                                Изменить
                            </button>
                        </div>
                        <p>Для участия в мастер-классе необходимо предварительно зарегистрироваться.
                            Запись производится через наш сайт или по телефону</p>
                    </div>
                    <div className={"payment"}>
                        <div className={"pay-check"}>
                            <div className={"check-sec"}>
                                <label className={"switch"}>
                                    <input type="checkbox"/>
                                    <span className={"slider round"}></span>
                                </label>
                                <h4>Оплата</h4>
                                <button><img src="/edit-add.svg" alt="edit-add"/>
                                </button>
                            </div>
                            <button className={"save-btn"}>
                                Сохранить
                            </button>
                        </div>
                        <textarea
                            value={"Место считается забронированным только после полной предоплаты. Оплатить можно онлайн или в нашем офисе."}></textarea>
                    </div>
                    <div className={"cancel-refund"}>
                        <div className={"cancel-check"}>
                            <label className={"switch"}>
                                <input type="checkbox"/>
                                <span className={"slider round"}></span>
                            </label>
                            <h4>Отмена и возврат</h4>
                        </div>
                        <p className={"cancel-title-1"}>В случае отмены участия менее чем за 24 часа до начала мастер-класса, предоплата не
                            возвращается. </p>
                        <p>Если мастер-класс отменяется по нашей инициативе, вам будет предложено перенести участие на
                            другую дату или получить полный возврат средств.</p>
                    </div>
                    <div className={"cancel-refund"}>
                        <div className={"cancel-check"}>
                            <label className={"switch"}>
                                <input type="checkbox"/>
                                <span className={"slider round"}></span>
                            </label>
                            <h4>Возрастные ограничения</h4>
                        </div>
                        <p>Мастер-класс предназначен для участников старше 16 лет. Участники младше 16 лет могут принять
                            участие только в сопровождении взрослого.</p>
                    </div>
                    <div className={"cancel-refund"}>
                        <div className={"cancel-check"}>
                            <label className={"switch"}>
                                <input type="checkbox"/>
                                <span className={"slider round"}></span>
                            </label>
                            <h4>Количество мест</h4>
                        </div>
                        <p>Количество мест ограничено. Запись производится в порядке поступления заявок.</p>
                    </div>
                    <div className={"connect-phone"}>
                        <span>Есть вопросы звоните:</span>
                        <p>+998 90 000-00-00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddingProfilePage;