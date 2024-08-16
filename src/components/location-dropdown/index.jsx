"use client"

import {cities} from "@/data";
import {useState} from "react";
import "./style.scss"

const LocationDropDown = () => {
    const [value, setValue] = useState("Toshkent");
    const [regionValue , setRegionValue] = useState("Yakkasaroy");
    const [act , setAct] = useState("");
    const handleValueOption = (city) => {
        setValue(city) ;
    }
    const handleRegionValue = (region , acts) => {
        setRegionValue(region);
        setAct(acts)
    }
    const handleReSet = () => {
        setAct("as")
    }
        return(
            <>
                <div onClick={handleReSet} className={"select"}>{value}</div>
                <span className={act === "as" ? "options" : "options hidden-options"} >
                {cities?.map(({city, id, regions}) => (
                       <span key={id} onClick={() => handleValueOption(city)}  className={value === city ? "option active" : "option"}>{city}{act}
                           <span className={value === city ? "regions active-region" : "regions"}>{regions.map((region , i) => (
                               <span onClick={() => handleRegionValue(region, regionValue === region ?  "activeRegion"  :"" )} className={regionValue === region ?  "activeRegion"  :""} key={i}>{region || "Toshkent"}</span>
                           ))}</span>
                       </span>
                ))}
                </span>

            </>
        )
}

export default LocationDropDown;