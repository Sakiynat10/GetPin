"use client"
import Image from "next/image";
import SearchInput from "../search-input";

import { useEffect, useState } from "react";
import "./style.scss";

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
  return (
    <header>
      <nav className="container">
        <div className="nav-top">
          <a className="nav-logo" href="/">
            Getpin
          </a>
          <a className="account" href="account">
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
