"use client"
import Image from "next/image";
import SearchInput from "../search-input";

import { useEffect, useState } from "react";
import "./style.scss";
import { URLSearchParams, useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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

  // const router = useRouter();
  // const { query } = router;

  // useEffect(() => {
  //   if (query?.myParam) {
  //     console.log('Query param:', query.myParam);
  //   }
  // }, [query]);
  // console.log(router);
  // console.log(useParams);
  // console.log("Asilbek");
  return (
    <header>
      <nav className="container">
        <div className="nav-top">
          <a className="nav-logo" href="/">
            Getpin 
          </a>
          <a className="account" href="/account">
            <span className="account-title">Добавить объявления</span>
            <span className="account-img">
              <Image fill src="/speaker-2.png" />
            </span>
          </a>
        </div>
        {/* <SearchInput isShrunk={isShrunk} /> */}
      </nav>
    </header>
  );
};

export default Header;
