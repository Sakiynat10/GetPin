"use client"
import Image from "next/image";
import "./style.scss";
import {useEffect, useState} from "react";
import SearchTrainCard from "@/components/searchtrain-card";
import LocationDropdown from "@/components/location-dropdown";
import SkeletonLoading from "@/components/skeleton-main-page-loading";

const SearchInput = ({about}) => {
  const [searchValue, setSearchValue] = useState("");
    const [isShrunk, setIsShrunk] = useState(false);

    const handleValue = (e) => {
    setSearchValue(e.target.value)
  }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
  return (
      <div className={isShrunk  ? "container-search-content-1040 search-content top-search-content"  :"container-search-content-1040 search-content"}>
          {about ? "" :
              <div className={"location-header"}>
                  <LocationDropdown head={"head"}/>
              </div>
          }
          <form className={isShrunk ? "search-input top-input" : "search-input"}>
              {loading ? <SkeletonLoading h={"46px"} w={"355px"} b={"10px"} />
                :
                <>
                    <input onChange={handleValue} type="text" placeholder="Поиск"/>
                    <button type="submit" className="search-btn">
                        <Image fill src={"/search-img.svg"} alt="search"/>
                    </button>
                </>}
        </form>
      </div>
  );
};

export default SearchInput;
