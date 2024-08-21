"use client";

import { Fragment, useState } from "react";
import "./style.scss";

const CheckBox = () => {
  const [check, setCheck] = useState(true);
  const handleCheckValue = () => {
      setCheck(!check)
  }

  return (
      <Fragment>
          <label className="toggle-switch">
              <span>Показать только платные</span>
              <input onClick={handleCheckValue} type="checkbox"/>
              <span className="slider"></span>
          </label>
      </Fragment>
  );
};

export default CheckBox;
