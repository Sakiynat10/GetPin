"use client";

import { cities } from "@/data";
import { useEffect, useState } from "react";
import "./style.scss";
import { useDetectClickOutside } from "react-detect-click-outside";
import SkeletonLoading from "@/components/skeleton-main-page-loading";

const LocationDropDown = ({ head }) => {
    const [value, setValue] = useState("Toshkent");
    const [value1, setValue1] = useState("Toshkent");
    const [regionValue, setRegionValue] = useState("Yakkasaroy");
    const [act, setAct] = useState(false); // Toggle dropdown with a boolean

    const handleEnterValueOption = (city) => {
        setValue(city);
    };
    const handleClickValueOption = (city) => {
        setValue1(city);
    };

    const handleRegionValue = (region, acts) => {
        setRegionValue(region);
        setAct(false); // Close the dropdown after choosing a region
    };

    const handleToggleDropdown = () => {
        setAct(!act); // Toggle dropdown open/close
    };

    // Detect click outside using `react-detect-click-outside`
    const closeDropdown = () => {
        setAct(false); // Close the dropdown when clicking outside
    };

    const ref = useDetectClickOutside({ onTriggered: closeDropdown });

    /* Loading */
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    

    return (
        <>
            {loading ? (
                <SkeletonLoading w={head === "head" ? "180px" : "170px"} h={head === "head" ? "45px" : "40px"} />
            ) : (
                <div  onClick={handleToggleDropdown} className="select">
                    {value1}
                </div>
            )}
            {act && (
                <span ref={ref} className="options">
          {cities?.map(({ city, id, regions }) => (
              <span
                  key={id}
                  onClick={(e) => handleClickValueOption(city , e.stopPropagation)} // Use onClick instead of onEnterMouse
                  onMouseEnter={(e) => handleEnterValueOption(city , e.stopPropagation)}
                  className={value === city ? "option active" : "option"}
              >
              {city}
                  <span  className={value === city ? "regions active-region" : "regions"}>
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
