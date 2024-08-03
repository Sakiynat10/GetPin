"use client";
import React, { useState } from "react";
import "./style.scss";
import MediaUpload from "./../../../components/upload-videos/index";

const AddingInfos = () => {
  const [type, setType] = useState("text");
  const [type1, setType1] = useState("text");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

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
            <select name="" id="" className="select" placeholder="Kategoriya">
              <option placeholder="Kategoriya" value="1">
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
            <div className={"container-img"}>
              <div className="photo-card">
                <div className={"photoArea"}>
                  {image ? (
                    <img src={image} alt="Speaker" className={"photo"} />
                  ) : (
                    <span className={"placeholder"}>Фото спикера</span>
                  )}
                </div>
              </div>
              <label className={"uploadButton"}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className={"hiddenInput"}
                />
                <span className={"buttonText"}>Добавить еще</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddingInfos;
