"use client";
import React, { useState } from "react";
import "./style.scss";
import MediaUpload from "../../../../components/upload-videos";

const AddingInfos = () => {
  const [type, setType] = useState("text");
  const [type1, setType1] = useState("text");
  // const [image, setImage] = useState(null);
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
  return (
    <>
      <div
        style={{ height: "100%", background: "white" }}
        className="add-content container"
      >
        <div className="top-content">
          <a href="/admin/advertisement">
            <img src="/left.svg" alt="" />
          </a>
          <h3>Продукты</h3>
          <button>сохранить</button>
        </div>
        <div className="bottom-content">
          <input className="issue-input" type="text" placeholder="Mavzu" />
          <div className="select-group">
            <select name="" id="" className="select" >
              <option  value="1">
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
          <MediaUpload />
          <div className="data-group">
            <div className="address-input">
              <input type="text" placeholder="Адресс" />
            </div>
            <div className="place-input">
              <input type="text" placeholder="Месть" />
            </div>
            <div className="data-input">
              <input type={type1} placeholder="Дата" onFocus={handleFocus1} />
            </div>
            <div className="time-input">
              <input
                type={type}
                placeholder="Во сколько"
                step="900"
                onFocus={handleFocus}
              />
            </div>
            <div className="price-input">
              <input type="number" placeholder="Narxi (uzs)" />
            </div>
          </div>
          <div className="account-group">
            {files.map((el , i) =>
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
                        id="rasm"                    />
                    <label htmlFor="rasm" onChange={(e) => handleFileChange(e, el.id)} className={"buttonText"}>Добавить еще</label>
                  </label>
                </div>
            )}

          </div>
          <div className="context-groups">
            <div className={"context-group"}>
              <h1>Контекст</h1>
              <textarea aria-placeholder={"none"}  aria-controls={"none"} placeholder={"пятый текст"}></textarea>
            </div>
            <div className={"fee-group"}>
              <h1>Об оплате</h1>
              <textarea aria-placeholder={"none"} aria-controls={"none"} placeholder={"Опишите"}></textarea>
            </div>
            <div className={"reject-group"}>
              <h1>Отмена и возврат</h1>
              <textarea aria-placeholder={"none"} aria-controls={"none"} placeholder={"Напишите"}></textarea>
            </div>
            <div className={"describe-group"}>
              <h1>Возрастные ограничения</h1>
              <textarea aria-placeholder={"none"} aria-controls={"none"} placeholder={"Опишите"}></textarea>
            </div>
            <div className={"describe-group"}>
              <h1>Возрастные ограничения</h1>
              <textarea aria-placeholder={"none"} aria-controls={"none"} placeholder={"Опишите"}></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddingInfos;
