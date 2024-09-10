"use client";

import { cities } from "@/data";
import {useEffect, useState} from "react";
import "./style.scss";
import { useDetectClickOutside } from "react-detect-click-outside";
import SkeletonLoading from "@/components/skeleton-main-page-loading";

const LocationDropDown = () => {
    const [value, setValue] = useState("Toshkent");
    const [regionValue, setRegionValue] = useState("Yakkasaroy");
    const [act, setAct] = useState("");

    const handleValueOption = (city) => {
        setValue(city);
    };

    const handleRegionValue = (region, acts) => {
        setRegionValue(region);
        setAct(acts);
    };

    const handleReSet = () => {
        setAct("as");
    };

    // Detect click outside using `react-detect-click-outside`
    const closeDropdown = () => {
        setAct("");
    };

    const ref = useDetectClickOutside({ onTriggered: closeDropdown });


    /*Loading*/
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {loading ? <SkeletonLoading w={"170px"} h={"40px"}/> : <div ref={ref} onClick={handleReSet} className="select">
                {value}
            </div>}
            {act && (
                <span className={act === "as" ? "options" : "options hidden-options"}>
          {cities?.map(({ city, id, regions }) => (
              <span
                  key={id}
                  onMouseEnter={() => handleValueOption(city)}
                  className={value === city ? "option active" : "option"}
              >
              {city}
                  <span
                      className={value === city ? "regions active-region" : "regions"}
                  >
                {regions.map((region, i) => (
                    <span
                        onClick={() =>
                            handleRegionValue(region, regionValue === region ? "activeRegion" : "")
                        }
                        className={regionValue === region ? "activeRegion" : ""}
                        key={i}
                    >
                    {region || "Toshkent"}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </span>
            )}
        </>
    );
};

export default LocationDropDown;
