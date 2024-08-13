"use client"
import Image from "next/image";
import SearchInput from "../search-input";

import { useEffect, useState } from "react";
import "./style.scss";
import { URLSearchParams, useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [users, setUsers] = useState("user");

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
          <span className="account" >
            <a href={"/profile/addprofile"} className="account-title">
              <img src="/plus-header.svg" alt="plus-header"/>
              Добавить объявления
            </a>
            {users === "user" ?
                <a href={"/register"}  className={"account-sign"}>
                  Вход
                  <img src="/inter.svg" alt="inter"/>
                </a> :
                <a href={"/account"} className="account-img">
                  <img src="/speaker-4.png" alt="speaker"/>
                  <img src="/account-menu.svg" alt="account-menu"/>
                </a>
            }

          </span>
        </div>
        {/* <SearchInput isShrunk={isShrunk} /> */}
      </nav>
    </header>
  );
};

export default Header;
