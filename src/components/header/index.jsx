"use client"
import Image from "next/image";
import SearchInput from "../search-input";

import { useEffect, useState } from "react";
import "./style.scss";
import { URLSearchParams, useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import RegisterPage from "@/components/registerpage";
import LoginPage from "@/components/loginpage";
import ConfirmationPage from "@/components/confirmation/confirmation-page";
import SkeletonLoading from "@/components/skeleton-main-page-loading";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [users, setUsers] = useState("user");
  const [register , setRegister] = useState(false);
  const [login , setLogin] = useState(false);
  const [confirm , setConfirm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
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

  /*Register Page*/
  const handleRegister = () => {
    setRegister(!register);
  }

  const handleLogin = () => {
    setLogin(!login);
  }

  /*Skeleton Loading*/

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  return (
      <>
    <header className={isShrunk  ?  "header-shrunk" : ""}>
      <nav className="container">
        <div className="nav-top">
          {loading ? <SkeletonLoading style={{marginTop:"10px"}} w={"100px"} h={"45px"}/> : <a className="nav-logo" href="/">
            Getpin
          </a>}
          <span className="account">
            {loading ? <SkeletonLoading w={"200px"} h={"52px"} b={"14px"}/> :
                <button onClick={handleRegister} href={"/profile/addprofile"} className="account-title">
                  <img src="/plus-header.svg" alt="plus-header"/>
                  Добавить <span>объявления</span>
                </button>}
            {users === "user" ?
                <>{
                  loading ? <SkeletonLoading w={"80px"} h={"52px"} b={"14px"} /> : <button onClick={handleLogin} className={"account-sign"}>
                    Вход
                    <img src="/inter.svg" alt="inter"/>
                  </button>
                }</> :
                <button className="account-img">
                  <img src="/speaker-4.png" alt="speaker"/>
                  <img src="/account-menu.svg" alt="account-menu"/>
                </button>
            }
          </span>
        </div>
        {/* <SearchInput isShrunk={isShrunk} /> */}
      </nav>
    </header>
        {register  ? <RegisterPage/>  : <></>}
        {/*{login  ? <LoginPage/>  : <></>}*/}
        {login  ? <LoginPage/>  : <></>}
      </>
  );
};

export default Header;
