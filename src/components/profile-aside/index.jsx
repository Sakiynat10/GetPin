"use client"
import React, {useState} from 'react'
import "./style.scss"
import NavLink from '../navlink';
import {ReadonlyURLSearchParams, useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import BreadCrumbs from "@/components/breadcrumb";

const AdminAside = () => {

    return (
        <aside>
            <div className="admin-aside">
                <BreadCrumbs path1={"Главная"} path2={"Мой профиль"}/>
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
                <a className={"profile-logout"} href="/">
                    <img src="/logout.svg" alt="profile-img"/>
                    Категории
                </a>
            </div>
        </aside>
    )
}

export default AdminAside;