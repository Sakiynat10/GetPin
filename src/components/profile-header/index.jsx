"use client"
import Image from "next/image";
import SearchInput from "../search-input";

import { useEffect, useState } from "react";
import "./style.scss";
import {URLSearchParams, useParams, usePathname} from "next/navigation";
import { useRouter } from "next/navigation";

const ProfileHeader = () => {
    const [isShrunk, setIsShrunk] = useState(false);
    const [users, setUsers] = useState("admin");

    const params = usePathname()
    const pathname = params.split("/")[2]

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
                    <div  className={"nav-title container-1040"}>
                        <h1>{pathname === "addprofile" ? "Добавить объявления":"Профиль"}</h1>
                    </div>
                    <span className="account" >
                    <a href={"/account"} className="account-title">
                      <img src="/plus-header.svg" alt="plus-header"/>
                      Добавить <span>объявления</span>
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

export default ProfileHeader;
