"use client"
import Image from "next/image";
import "./style.scss";
import {useState} from "react";
import SearchTrainCard from "@/components/searchtrain-card";
import LocationDropdown from "@/components/location-dropdown";

const SearchInput = ({isShrunk}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleValue = (e) => {
    setSearchValue(e.target.value)
  }
  return (
      <div className="container-1040 search-content">
        <div className={"location-header"}>
          <LocationDropdown/>
        </div>
        <form className={isShrunk ? "search-input top-input" : "search-input"}>
          <input onChange={handleValue} type="text" placeholder="Поиск"/>
          <button type="submit" className="search-btn">
            <Image fill src={"/search-img.svg"} alt="search"/>
          </button>
        </form>
      </div>
  );
};

export default SearchInput;
