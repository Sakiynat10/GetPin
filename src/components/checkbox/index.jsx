"use client";

import { Fragment, useState } from "react";
import "./style.scss";

const CheckBox = () => {
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);

  const checkInput1 = () => {
    setCheck1(false);
  };

  const checkInput2 = () => {
    setCheck2(true);
  };

  return (
    <Fragment>
      <form>
          <label className="label" for="paid">
            <input type="radio"  defaultChecked={"checked"} id="paid" name="sale" value="value1" />
          <span class="checkmark"></span>
            Платный</label>
          <label className="label" for="free">
            <input type="radio" id="free" name="sale" value="value2" /> {" "}
          <span class="checkmark"></span>
            Бесплатный</label>
      </form>
    </Fragment>
  );
};

export default CheckBox;
