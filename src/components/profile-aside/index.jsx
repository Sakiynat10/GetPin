"use client"
import React, {useEffect, useRef, useState} from 'react'
import "./style.scss"
import NavLink from '../navlink';
import {ReadonlyURLSearchParams, useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import BreadCrumbs from "@/components/breadcrumb";

const AdminAside = () => {
    const router = useRouter();
    const [warn , setWarn] = useState(false);
    const handleWarning = () => {
        setWarn(true)
    }

    const buttonRefs = useRef([]);

    const handleClickOutside = (event) => {
        if (!buttonRefs.current.some(ref => ref && ref.contains(event.target))) {
            setWarn(false); // Deactivate all buttons
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const logout = () => {
        router.push("/")
    }

    return (
        <aside>
            <div className="admin-aside">
                <BreadCrumbs />
                <div className={"profile-speaker-infos"}>
                    <img className={"speaker-img"} src="/profile-speaker.png" alt="profile-speaker"/>
                    <div className={"speaker-title"}>Abbos Janizakov</div>
                    <div className={"speaker-subtitle"}>
                        <span>{`Najot Ta'lim`}</span>
                        <span>Ux & Ui designer</span>
                    </div>
                </div>
                <ul className={"profile-nav"}>
                    <li>
                        <NavLink href="/profile/poster">
                            <img src="/profile-1.svg" alt="profile-img"/>
                            Мои объявлении</NavLink>
                    </li>
                    <li className={"profile-record"}>
                        <NavLink href="/profile/records">
                            <img src="/profile-2.svg" alt="profile-img"/>
                            Записи <span>15</span></NavLink>
                    </li>
                    <li>
                        <NavLink href="/profile/archive">
                            <img src="/profile-3.svg" alt="profile-img"/>
                            Архив</NavLink>
                    </li>
                    <li>
                        <NavLink href="/profile/settings">
                            <img src="/profile-4.svg" alt="profile-img"/>
                            Настройки</NavLink>
                    </li>
                </ul>
                <button onClick={handleWarning} className={warn ? "profile-logout active":"profile-logout"}>
                    <img src="/logout.svg" alt="profile-img"/>
                    Выход
                </button>
                <div  className={warn  ? "hide-warn warning"  : "hide-warn"}>
                    <div className={"overlay-warn"}></div>
                   <p>Вы уверены
                       что хотите выйти из аккаунта</p>
                    <button onClick={logout}>да</button>
                </div>
            </div>
        </aside>
    )
}

export default AdminAside;