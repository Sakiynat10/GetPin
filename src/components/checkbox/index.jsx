"use client";

import {Fragment, useEffect, useState} from "react";
import "./style.scss";
import SkeletonLoading from "@/components/skeleton-main-page-loading";

const CheckBox = () => {
  const [check, setCheck] = useState(true);
  const handleCheckValue = () => {
      setCheck(!check)
  }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

  return (
      <Fragment>
          {loading ? <SkeletonLoading  w={"200px"} h={"40px"}/> : <label className="toggle-switch">
              <span><span className={"check-subtitle"}>Показать</span> Tолько платные</span>
              <input onClick={handleCheckValue} type="checkbox"/>
              <span className="slider"></span>
          </label>}
      </Fragment>
  );
};

export default CheckBox;
