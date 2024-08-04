"use client"
import Image from "next/image";
import "./style.scss";
import {useState} from "react";
import SearchTrainCard from "@/components/searchtrain-card";

const SearchInput = ({isShrunk}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleValue = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <div className="container-1040 search-content">
    <form className={isShrunk ? "search-input top-input" : "search-input"}>
      <input onChange={handleValue}  type="text" placeholder="Поиск" />
      <button type="submit" className="search-btn">
        <Image  fill src={"/search-img.svg"} alt="search" />
      </button>
    </form>
      <SearchTrainCard searchValue={searchValue} className={"search-content-cards"} />
    </div>
  );
};

export default SearchInput;
