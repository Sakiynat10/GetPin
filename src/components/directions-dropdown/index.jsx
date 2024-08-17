"use client"

import "./style.scss"
import {categoryData} from "@/data";
import {useState} from "react";

const DirectionDropdown = () => {
    const [drop , setDrop] = useState(false) ;
    const [dropActive, setDropActive] = useState("Маркетинг");
    const handleDirectionDrop = () => {
          setDrop(!drop);
    }
    const closeDrop = (e) => {
        e.preventDefault();
        e.stopPropagation()
        setDrop(false);
    }

    return(
        <button onClick={handleDirectionDrop} className={"direction-drop"}>
            <img src="/directions.svg" alt="direction" />
            Направления
            <span className={drop ? "all-subcategories"  :"all-subcategories hidden-drop"}>
                <span onClick={closeDrop} >Маркетинг</span>
                <span onClick={closeDrop} >Образование</span>
                <span onClick={closeDrop} >ИТ</span>
                <span onClick={closeDrop} >Культура</span>
                <span onClick={closeDrop} >Маркетинг</span>
                <span onClick={closeDrop} >Бизнес</span>
            </span>
        </button>
    )
}
export default DirectionDropdown;